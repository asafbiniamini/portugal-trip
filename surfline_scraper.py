"""
Surfline Forecast Scraper
משוך תחזיות גלים מ-Surfline עבור ספוטים בפורטוגל
גישה ישירה ל-API ללא התחברות (תחזית שבוע זמינה לכולם)
"""

import requests
from bs4 import BeautifulSoup
import json
from datetime import datetime, timedelta
import time
import re

# רשימת ספוטים בפורטוגל - דרום (Algarve) ומרכז (Peniche/Ericeira)
PORTUGAL_SPOTS = {
    # דרום פורטוגל (Algarve)
    "Arrifana": {
        "name": "Arrifana",
        "location": "Aljezur, Costa Vicentina",
        "region": "דרום (Algarve)",
        "surfline_id": "5842041f4e65fad6a7708b87",
        "surfline_url": "https://www.surfline.com/surf-report/arrifana/5842041f4e65fad6a7708b87"
    },
    "Tonel": {
        "name": "Tonel",
        "location": "Sagres, Algarve",
        "region": "דרום (Algarve)",
        "surfline_id": "5842041f4e65fad6a7708b88",
        "surfline_url": "https://www.surfline.com/surf-report/tonel/5842041f4e65fad6a7708b88"
    },
    "Lagos": {
        "name": "Lagos",
        "location": "Lagos, Algarve",
        "region": "דרום (Algarve)",
        "surfline_id": "5842041f4e65fad6a7708b89",
        "surfline_url": "https://www.surfline.com/surf-report/lagos/5842041f4e65fad6a7708b89"
    },
    "Praia do Amado": {
        "name": "Praia do Amado",
        "location": "Carrapateira, Costa Vicentina",
        "region": "דרום (Algarve)",
        "surfline_id": "5842041f4e65fad6a7708b90",
        "surfline_url": "https://www.surfline.com/surf-report/praia-do-amado/5842041f4e65fad6a7708b90"
    },
    # מרכז פורטוגל - פניש
    "Supertubos": {
        "name": "Supertubos",
        "location": "Peniche, Central Portugal",
        "region": "מרכז (Peniche)",
        "surfline_id": None,  # יימצא אוטומטית
        "search_terms": ["Supertubos", "Peniche", "Portugal"]
    },
    "Baleal": {
        "name": "Baleal",
        "location": "Peniche, Central Portugal",
        "region": "מרכז (Peniche)",
        "surfline_id": None,
        "search_terms": ["Baleal", "Peniche", "Portugal"]
    },
    # מרכז פורטוגל - אריסיירה
    "Ribeira d'Ilhas": {
        "name": "Ribeira d'Ilhas",
        "location": "Ericeira, Central Portugal",
        "region": "מרכז (Ericeira)",
        "surfline_id": None,
        "search_terms": ["Ribeira d'Ilhas", "Ericeira", "Portugal"]
    },
    "Praia do Sul": {
        "name": "Praia do Sul",
        "location": "Ericeira, Central Portugal",
        "region": "מרכז (Ericeira)",
        "surfline_id": None,
        "search_terms": ["Praia do Sul", "Ericeira", "Portugal"]
    }
}

def create_session():
    """
    יצירת session עם headers מתאימים
    """
    session = requests.Session()
    session.headers.update({
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive',
        'Referer': 'https://www.surfline.com/',
        'Origin': 'https://www.surfline.com'
    })
    return session

def find_spot_id(spot_name, session):
    """
    מצא Spot ID לפי שם (אם לא ידוע)
    """
    search_url = "https://services.surfline.com/kbyg/spots/search"
    params = {"q": spot_name, "querySize": 10}
    
    try:
        response = session.get(search_url, params=params, timeout=10)
        if response.status_code == 200:
            results = response.json()
            if results and len(results) > 0:
                # חפש תוצאה בפורטוגל
                for result in results:
                    name = result.get('name', '').lower()
                    location = result.get('location', {}).get('name', '').lower()
                    country = result.get('location', {}).get('country', '').lower()
                    
                    # ודא שזה בפורטוגל
                    if 'portugal' in country or 'portugal' in location:
                        # בדוק אם השם תואם
                        if any(term.lower() in name or term.lower() in location for term in spot_name.split()):
                            return result.get('_id')
                
                # אם לא מצאנו התאמה מדויקת, נחזיר את הראשון בפורטוגל
                for result in results:
                    country = result.get('location', {}).get('country', '').lower()
                    if 'portugal' in country:
                        return result.get('_id')
                
                # אם אין תוצאות בפורטוגל, נחזיר את הראשון
                return results[0].get('_id')
    except Exception as e:
        pass  # לא נדפיס שגיאה כאן כדי לא להציף
    return None

def get_forecast_via_api(spot_id, session):
    """
    משוך תחזית דרך Surfline API (ללא התחברות - תחזית שבוע)
    """
    # Surfline API endpoints
    base_url = "https://services.surfline.com/kbyg"
    
    forecasts = {}
    
    # 1. Wave forecast
    wave_url = f"{base_url}/spots/forecasts/wave"
    wave_params = {
        "spotId": spot_id,
        "days": 7,
        "intervalHours": 1
    }
    
    try:
        response = session.get(wave_url, params=wave_params, timeout=10)
        if response.status_code == 200:
            forecasts['wave'] = response.json()
        else:
            print(f"  ⚠️  Wave API: {response.status_code}")
    except Exception as e:
        print(f"  ⚠️  Wave API error: {e}")
    
    # 2. Wind forecast
    wind_url = f"{base_url}/spots/forecasts/wind"
    wind_params = {
        "spotId": spot_id,
        "days": 7,
        "intervalHours": 1
    }
    
    try:
        response = session.get(wind_url, params=wind_params, timeout=10)
        if response.status_code == 200:
            forecasts['wind'] = response.json()
    except Exception as e:
        print(f"  ⚠️  Wind API error: {e}")
    
    # 3. Conditions forecast
    conditions_url = f"{base_url}/spots/forecasts/conditions"
    conditions_params = {
        "spotId": spot_id,
        "days": 7
    }
    
    try:
        response = session.get(conditions_url, params=conditions_params, timeout=10)
        if response.status_code == 200:
            forecasts['conditions'] = response.json()
    except Exception as e:
        print(f"  ⚠️  Conditions API error: {e}")
    
    # 4. Tide forecast
    tide_url = f"{base_url}/spots/forecasts/tides"
    tide_params = {
        "spotId": spot_id,
        "days": 7
    }
    
    try:
        response = session.get(tide_url, params=tide_params, timeout=10)
        if response.status_code == 200:
            forecasts['tide'] = response.json()
    except Exception as e:
        print(f"  ⚠️  Tide API error: {e}")
    
    return forecasts if forecasts else None

def analyze_forecast(forecast_data, spot_name, dates_range):
    """
    ניתוח תחזית והמלצות עבור התאריכים 13-20 בנובמבר
    """
    recommendations = {
        "spot": spot_name,
        "best_days": [],
        "summary": "",
        "wave_heights": [],
        "wind_conditions": [],
        "overall_rating": ""
    }
    
    if not forecast_data or 'wave' not in forecast_data:
        return recommendations
    
    try:
        wave_data = forecast_data['wave']
        
        # תאריכים: 13-20 בנובמבר 2025
        target_dates = []
        for i in range(8):  # 13-20 = 8 ימים
            date = datetime(2025, 11, 13) + timedelta(days=i)
            target_dates.append(date.strftime("%Y-%m-%d"))
        
        # ניתוח נתוני גלים
        if 'data' in wave_data and 'wave' in wave_data['data']:
            wave_points = wave_data['data']['wave']
            
            daily_max = {}
            for point in wave_points:
                timestamp = point.get('timestamp', 0)
                dt = datetime.fromtimestamp(timestamp)
                date_str = dt.strftime("%Y-%m-%d")
                
                if date_str in target_dates:
                    surf_min = point.get('surf', {}).get('min', 0)
                    surf_max = point.get('surf', {}).get('max', 0)
                    
                    if date_str not in daily_max:
                        daily_max[date_str] = {'min': surf_min, 'max': surf_max, 'count': 0}
                    else:
                        daily_max[date_str]['max'] = max(daily_max[date_str]['max'], surf_max)
                        daily_max[date_str]['min'] = min(daily_max[date_str]['min'], surf_min)
                        daily_max[date_str]['count'] += 1
            
            # מציאת הימים הטובים ביותר
            for date_str in target_dates:
                if date_str in daily_max:
                    avg_height = (daily_max[date_str]['min'] + daily_max[date_str]['max']) / 2
                    recommendations['wave_heights'].append({
                        'date': date_str,
                        'min': daily_max[date_str]['min'],
                        'max': daily_max[date_str]['max'],
                        'avg': avg_height
                    })
                    
                    # הוסף את כל הימים (גם קטנים) להמלצות
                    recommendations['best_days'].append({
                        'date': date_str,
                        'height': avg_height,
                        'min': daily_max[date_str]['min'],
                        'max': daily_max[date_str]['max']
                    })
            
            # מיון לפי גובה גלים (מהגדול לקטן)
            recommendations['best_days'].sort(key=lambda x: x['height'], reverse=True)
            
            # סיכום והערכה
            if recommendations['best_days']:
                best_day = recommendations['best_days'][0]
                max_height = best_day['max']
                
                # הערכת איכות לפי גובה מקסימלי
                if max_height >= 2.0:
                    rating = "⭐⭐⭐⭐⭐"
                    quality = "מצוין"
                elif max_height >= 1.5:
                    rating = "⭐⭐⭐⭐"
                    quality = "טוב מאוד"
                elif max_height >= 1.0:
                    rating = "⭐⭐⭐"
                    quality = "טוב"
                elif max_height >= 0.6:
                    rating = "⭐⭐"
                    quality = "בינוני - גלים קטנים"
                else:
                    rating = "⭐"
                    quality = "קטנים מאוד"
                
                recommendations['summary'] = f"היום הטוב ביותר: {best_day['date']} - גלים {best_day['min']:.1f}-{best_day['max']:.1f}m ({quality})"
                recommendations['overall_rating'] = rating
            else:
                recommendations['summary'] = "אין נתונים זמינים"
                recommendations['overall_rating'] = "❓"
        
    except Exception as e:
        print(f"  ⚠️  Error analyzing forecast: {e}")
    
    return recommendations

def main():
    """
    פונקציה ראשית - משיכת תחזיות ללא התחברות
    """
    print("🌊 Surfline Forecast Scraper - פורטוגל 13-20 בנובמבר")
    print("=" * 60)
    print("משיכת תחזיות שבועיות (זמין לכולם ללא התחברות)")
    print("=" * 60)
    
    # יצירת session
    session = create_session()
    
    # משיכת תחזיות לכל הספוטים
    print("\n📊 מושך תחזיות מ-Surfline...")
    all_forecasts = {}
    all_recommendations = []
    
    for spot_key, spot_info in PORTUGAL_SPOTS.items():
        print(f"\n📍 בודק {spot_info['name']} ({spot_info['location']}) - {spot_info['region']}...")
        
        # אם ה-ID לא ידוע, נסה למצוא אותו
        spot_id = spot_info.get('surfline_id')
        if not spot_id:
            print(f"   🔍 מחפש Spot ID...")
            # נסה עם שמות חיפוש שונים
            search_terms = spot_info.get('search_terms', [spot_info['name']])
            found_id = None
            for term in search_terms:
                found_id = find_spot_id(term, session)
                if found_id:
                    print(f"   ✅ מצאתי Spot ID עם '{term}': {found_id}")
                    break
            if found_id:
                spot_id = found_id
            else:
                print(f"   ⚠️  לא מצאתי Spot ID, מדלג...")
                continue
        else:
            print(f"   Spot ID: {spot_id}")
        
        # משיכת תחזית דרך API
        forecast = get_forecast_via_api(spot_id, session)
        
        if forecast:
            all_forecasts[spot_key] = forecast
            print(f"   ✅ קיבלתי תחזית!")
            
            # ניתוח והמלצות
            recommendation = analyze_forecast(forecast, spot_info['name'], "2025-11-13 to 2025-11-20")
            recommendation['location'] = spot_info['location']
            recommendation['region'] = spot_info['region']
            all_recommendations.append(recommendation)
            
            # הדפסת סיכום מהיר
            if recommendation['best_days']:
                best = recommendation['best_days'][0]
                print(f"   🌊 היום הטוב ביותר: {best['date']} - גלים {best['min']:.1f}-{best['max']:.1f}m")
            else:
                print(f"   ⚠️  אין נתונים זמינים")
        else:
            print(f"   ❌ לא הצלחתי לקבל תחזית")
        
        # המתנה קצרה בין בקשות
        time.sleep(1)
    
    # שמירת תוצאות גולמיות
    output_file = "surfline_forecasts_raw.json"
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(all_forecasts, f, ensure_ascii=False, indent=2)
    print(f"\n💾 נתונים גולמיים נשמרו ב-{output_file}")
    
    # שמירת המלצות
    recommendations_file = "surfline_recommendations.json"
    with open(recommendations_file, 'w', encoding='utf-8') as f:
        json.dump(all_recommendations, f, ensure_ascii=False, indent=2)
    print(f"💾 המלצות נשמרו ב-{recommendations_file}")
    
    # הדפסת סיכום המלצות
    print("\n" + "=" * 60)
    print("📈 סיכום המלצות לשבוע 13-20 בנובמבר:")
    print("=" * 60)
    
    # מיון לפי גובה מקסימלי
    sorted_recs = sorted(all_recommendations, key=lambda x: x['best_days'][0]['max'] if x['best_days'] else 0, reverse=True)
    
    # הפרדה לפי אזורים
    south_spots = [r for r in sorted_recs if 'דרום' in r.get('region', '')]
    central_spots = [r for r in sorted_recs if 'מרכז' in r.get('region', '')]
    
    print("\n" + "=" * 60)
    print("🏄 דרום פורטוגל (Algarve):")
    print("=" * 60)
    for rec in south_spots:
        print(f"\n📍 {rec['spot']} ({rec['location']})")
        print(f"   {rec['overall_rating']} {rec['summary']}")
        if rec['best_days']:
            best = rec['best_days'][0]
            print(f"   🌊 היום הטוב ביותר: {best['date']} - גלים {best['min']:.1f}-{best['max']:.1f}m")
    
    print("\n" + "=" * 60)
    print("🏄 מרכז פורטוגל (Peniche/Ericeira):")
    print("=" * 60)
    for rec in central_spots:
        print(f"\n📍 {rec['spot']} ({rec['location']})")
        print(f"   {rec['overall_rating']} {rec['summary']}")
        if rec['best_days']:
            best = rec['best_days'][0]
            print(f"   🌊 היום הטוב ביותר: {best['date']} - גלים {best['min']:.1f}-{best['max']:.1f}m")
    
    # המלצה סופית
    print("\n" + "=" * 60)
    print("💡 המלצה סופית:")
    print("=" * 60)
    
    if sorted_recs and sorted_recs[0]['best_days']:
        best_spot = sorted_recs[0]
        best_day = best_spot['best_days'][0]
        print(f"\n🏆 הספוט הטוב ביותר: {best_spot['spot']} ({best_spot['region']})")
        print(f"   📅 תאריך מומלץ: {best_day['date']}")
        print(f"   🌊 גלים: {best_day['min']:.1f}-{best_day['max']:.1f}m")
        print(f"   📍 מיקום: {best_spot['location']}")
        
        # השוואה בין אזורים
        if south_spots and central_spots:
            south_max = max([s['best_days'][0]['max'] for s in south_spots if s['best_days']], default=0)
            central_max = max([s['best_days'][0]['max'] for s in central_spots if s['best_days']], default=0)
            
            print(f"\n📊 השוואה בין אזורים:")
            print(f"   דרום (Algarve): גלים עד {south_max:.1f}m")
            print(f"   מרכז (Peniche/Ericeira): גלים עד {central_max:.1f}m")
            
            if central_max > south_max:
                print(f"\n✅ המלצה: מרכז פורטוגל (Peniche/Ericeira) מציע גלים גדולים יותר!")
            elif south_max > central_max:
                print(f"\n✅ המלצה: דרום פורטוגל (Algarve) מציע גלים גדולים יותר!")
            else:
                print(f"\n✅ שני האזורים מציעים גלים דומים - בחר לפי העדפות נוספות")
    
    print("\n" + "=" * 60)
    print("📅 פירוט מלא לכל הספוטים:")
    print("=" * 60)
    for rec in sorted_recs:
        print(f"\n🏄 {rec['spot']} ({rec['location']}) - {rec.get('region', '')}")
        print(f"   {rec['overall_rating']} {rec['summary']}")
        if rec['best_days']:
            print(f"   📅 כל הימים (13-20 בנובמבר):")
            for day in rec['best_days']:
                print(f"      • {day['date']}: גלים {day['min']:.1f}-{day['max']:.1f}m (ממוצע: {day['height']:.1f}m)")
    
    print("\n✅ סיום!")
    print("\n💡 הערה: הנתונים מבוססים על תחזיות Surfline.")
    print("   מומלץ לבדוק תחזיות מעודכנות לפני הגלישה.")

if __name__ == "__main__":
    main()

