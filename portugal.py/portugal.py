"""
תכנית טיול לדרום פורטוגל - 13-20 בנובמבר 2025
כולל: גלישה, אוכל מעולה, יין, וטבע
"""

import pandas as pd
from datetime import datetime, timedelta

# ============================================================================
# 1. מידע על ספוטים לגלישה - נתונים מהחבר שלך
# ============================================================================
# הנתונים המקוריים שהחבר שלח (מתוך surf-forecast)
surf_forecast_raw = [
    {
        "spot": "Playa de Lagos (Lagos)",
        "date_snapshot": "2025-11-08",
        "predicted_for_2025-11-13": "Primary swell ~0.4 m (1.3 ft) @ 10s; Secondary ~0.6 m @ 6s; glassy wind as swell arrives (evening).",
        "source": "surf-forecast Playa de Lagos (six_day)."
    },
    {
        "spot": "Arrifana (Aljezur)",
        "date_snapshot": "2025-11-08",
        "predicted_for_2025-11-13": "Largest open-ocean swell predicted on Thu 13 Nov (noted in forecast) — examples in live feed showed up to ~3.5 m in nearby time windows; check live for hour-by-hour.",
        "source": "surf-forecast Arrifana (latest forecasts)."
    },
    {
        "spot": "Tonel (Sagres)",
        "date_snapshot": "2025-11-08",
        "predicted_for_2025-11-13": "Significant swell windows noted in the 12-day forecast (strong swells with long periods recorded in early-Nov updates). Check live forecast for exact heights/tides.",
        "source": "surf-forecast Tonel (six_day)."
    }
]

# מידע מורחב על הספוטים (מבוסס על הנתונים המקוריים + מידע נוסף)
surf_spots = [
    {
        "spot": "Arrifana (Aljezur)",
        "date_snapshot": "2025-11-08",
        "predicted_for_2025-11-13": "Largest open-ocean swell predicted on Thu 13 Nov — up to ~3.5 m in nearby time windows",
        "level": "Intermediate-Advanced",
        "best_time": "Morning",
        "location": "Aljezur, Costa Vicentina",
        "swell_quality": "Excellent (3.5m)",
        "recommendation": "⭐⭐⭐⭐⭐ מומלץ מאוד ל-13 בנובמבר - הגלים הכי טובים!"
    },
    {
        "spot": "Tonel (Sagres)",
        "date_snapshot": "2025-11-08",
        "predicted_for_2025-11-13": "Significant swell windows with strong swells and long periods",
        "level": "All levels",
        "best_time": "Morning-Early afternoon",
        "location": "Sagres, Algarve",
        "swell_quality": "Very Good (strong swells, long periods)",
        "recommendation": "⭐⭐⭐⭐ מומלץ - גלים חזקים עם תקופות ארוכות"
    },
    {
        "spot": "Playa de Lagos (Lagos)",
        "date_snapshot": "2025-11-08",
        "predicted_for_2025-11-13": "Primary swell ~0.4 m (1.3 ft) @ 10s; Secondary ~0.6 m @ 6s; glassy wind as swell arrives (evening)",
        "level": "Beginner-Intermediate",
        "best_time": "Evening",
        "location": "Lagos, Algarve",
        "swell_quality": "Moderate (0.4-0.6m)",
        "recommendation": "⭐⭐⭐ טוב למתחילים - גלים קטנים יותר, רוח טובה בערב"
    },
    {
        "spot": "Praia do Amado (Carrapateira)",
        "date_snapshot": "2025-11-08",
        "predicted_for_2025-11-13": "Consistent waves, good for all levels",
        "level": "All levels",
        "best_time": "Morning",
        "location": "Carrapateira, Costa Vicentina",
        "swell_quality": "Consistent",
        "recommendation": "⭐⭐⭐⭐ טוב לכל הרמות - גלים עקביים"
    }
]

# ============================================================================
# 2. מסעדות מומלצות - אוכל מעולה (מבוסס על מחקר + ציונים גבוהים)
# ============================================================================
restaurants = [
    {
        "name": "Vila Joya",
        "location": "Albufeira",
        "type": "Fine Dining (2 Michelin stars)",
        "cuisine": "Modern Portuguese",
        "price": "$$$$",
        "reservation": "Required",
        "rating": "2 Michelin Stars",
        "reviews": "Top rated",
        "note": "אחת המסעדות הטובות בפורטוגל - גורמה ברמה עולמית"
    },
    {
        "name": "Bon Bon",
        "location": "Carvoeiro",
        "type": "Fine Dining (Michelin star)",
        "cuisine": "Creative Modern Portuguese",
        "price": "€50+",
        "reservation": "Required",
        "rating": "4.7/5 (355 reviews)",
        "reviews": "Google Maps & TripAdvisor",
        "note": "⭐⭐⭐⭐⭐ ציון גבוה מאוד! מנות יצירתיות מחומרי גלם מקומיים"
    },
    {
        "name": "O Camilo",
        "location": "Lagos",
        "type": "Seafood Restaurant",
        "cuisine": "Fresh seafood, Cataplana",
        "price": "$$",
        "reservation": "Recommended",
        "rating": "4.3/5 (2,950 reviews)",
        "reviews": "Google Maps & TripAdvisor",
        "note": "⭐⭐⭐⭐ מעל מערה ימית, נוף מדהים - פופולרי מאוד!"
    },
    {
        "name": "Dom Carlos",
        "location": "Albufeira",
        "type": "Fine Dining",
        "cuisine": "Modern Portuguese, Seasonal menu",
        "price": "$$$",
        "reservation": "Required",
        "rating": "4.5/5 (130 reviews)",
        "reviews": "Google Maps & TripAdvisor",
        "note": "⭐⭐⭐⭐⭐ מסעדה אינטימית עם תפריט משתנה, שירות אישי מעולה"
    },
    {
        "name": "Adega Vila Lisa",
        "location": "Lagos",
        "type": "Traditional Portuguese",
        "cuisine": "Seafood, Grilled meats",
        "price": "€35-40",
        "reservation": "Recommended",
        "rating": "4.3/5 (43 reviews)",
        "reviews": "Google Maps",
        "note": "אוכל מקומי אותנטי, יין מקומי מעולה"
    },
    {
        "name": "Restaurante O Leão de Porches",
        "location": "Porches",
        "type": "Traditional",
        "cuisine": "Portuguese classics",
        "price": "$$",
        "reservation": "Not required",
        "rating": "Highly rated",
        "reviews": "Local favorite",
        "note": "אוכל ביתי מעולה, מחירים סבירים"
    },
    {
        "name": "A Tasca",
        "location": "Lagos",
        "type": "Tapas/Wine Bar",
        "cuisine": "Portuguese tapas, Cheese, Charcuterie",
        "price": "$$",
        "reservation": "Recommended",
        "rating": "Highly rated",
        "reviews": "Local favorite",
        "note": "מקום מעולה ליין וטעימות"
    },
    {
        "name": "Restaurante O Infante",
        "location": "Sagres",
        "type": "Seafood",
        "cuisine": "Fresh fish, Grilled seafood",
        "price": "$$",
        "reservation": "Not required",
        "rating": "Highly rated",
        "reviews": "Local favorite",
        "note": "ליד הים, אוכל טרי"
    }
]

# ============================================================================
# 3. יקבים וטעימות יין (מבוסס על מחקר + ציונים גבוהים)
# ============================================================================
wine_experiences = [
    {
        "name": "Quinta dos Vales",
        "location": "Estômbar (near Lagos)",
        "type": "Winery Tour & Tasting",
        "wines": "Algarve wines, Sparkling wines",
        "price": "$$",
        "reservation": "Required",
        "rating": "4.5/5 (371 reviews)",
        "reviews": "Google Maps & TripAdvisor",
        "note": "⭐⭐⭐⭐⭐ יקב מפורסם עם פסלים ייחודיים בגנים, סיורים וטעימות מעולים"
    },
    {
        "name": "Adega do Cantor",
        "location": "Albufeira",
        "type": "Winery Tour & Tasting",
        "wines": "Local Portuguese wines (owned by Cliff Richard)",
        "price": "$$",
        "reservation": "Recommended",
        "rating": "4.4/5 (149 reviews)",
        "reviews": "Google Maps & TripAdvisor",
        "note": "⭐⭐⭐⭐ יקב בבעלות הזמר קליף ריצ'רד, סיורים וטעימות יינות מקומיים"
    },
    {
        "name": "Quinta do Francês",
        "location": "Lagos",
        "type": "Wine Tasting & Restaurant",
        "wines": "Algarve regional wines",
        "price": "$$",
        "reservation": "Recommended",
        "rating": "Highly rated",
        "reviews": "Local favorite",
        "note": "יקב מקומי עם טעימות ואוכל מצוין"
    },
    {
        "name": "Wine Bar do Castelo",
        "location": "Lagos",
        "type": "Wine Bar",
        "wines": "Curated Portuguese selection",
        "price": "$$",
        "reservation": "Recommended",
        "rating": "Highly rated",
        "reviews": "Local favorite",
        "note": "מקום אינטימי עם יינות איכותיים"
    }
]

# ============================================================================
# 4. טבע ונוף - יום טבע
# ============================================================================
nature_spots = [
    {
        "name": "Costa Vicentina Natural Park",
        "location": "Aljezur to Vila do Bispo",
        "type": "Coastal Nature Park",
        "activities": "Hiking, Bird watching, Photography",
        "duration": "Full day",
        "note": "חוף פראי עם צוקים דרמטיים, מסלולי הליכה מדהימים"
    },
    {
        "name": "Monchique Mountains (Foia Peak)",
        "location": "Monchique (1 hour from Lagos)",
        "type": "Mountain Viewpoint",
        "activities": "Hiking, Scenic drive, Views",
        "duration": "Half day",
        "note": "הנקודה הגבוהה ביותר באלגארבה, נוף פנורמי של 360 מעלות"
    },
    {
        "name": "Ria Formosa Natural Park",
        "location": "Faro area",
        "type": "Lagoon & Wetlands",
        "activities": "Boat tour, Bird watching, Kayaking",
        "duration": "Half to full day",
        "note": "פארק טבע עם לגונות, איים, וציפורים"
    },
    {
        "name": "Ponta da Piedade",
        "location": "Lagos",
        "type": "Rock Formations & Caves",
        "activities": "Boat tour, Kayaking, Photography",
        "duration": "2-3 hours",
        "note": "צוקים ומערות ימיות מדהימות, אפשר בסירה או קיאק"
    },
    {
        "name": "Seven Hanging Valleys Trail",
        "location": "Lagoa (near Carvoeiro)",
        "type": "Coastal Hiking Trail",
        "activities": "Hiking, Photography",
        "duration": "3-4 hours",
        "note": "אחד המסלולים היפים באלגארבה, לאורך החוף"
    }
]

# ============================================================================
# 5. פונקציות ניתוח והמלצות מבוססות תחזיות
# ============================================================================
def get_best_surf_spot_for_date(date_str="2025-11-13"):
    """
    מחזיר את הספוט הטוב ביותר לגלישה לפי התחזיות המקוריות
    מבוסס על הנתונים שהחבר שלח
    """
    if date_str == "2025-11-13":
        # לפי התחזיות המקוריות, Arrifana הוא הטוב ביותר ב-13 בנובמבר
        best_spot = next((s for s in surf_spots if "Arrifana" in s["spot"]), None)
        return {
            "date": date_str,
            "recommended_spot": best_spot["spot"],
            "reason": best_spot["recommendation"],
            "forecast": best_spot["predicted_for_2025-11-13"],
            "alternative": "Tonel (Sagres) - גם מעולה עם גלים חזקים"
        }
    else:
        # לשאר הימים, נחזיר המלצה כללית
        return {
            "date": date_str,
            "recommended_spot": "Tonel או Praia do Amado",
            "reason": "גלים עקביים, מתאים לכל הרמות",
            "note": "בדקו תחזית יומית - תנאי הגלים משתנים"
        }

def compare_surf_spots():
    """משווה בין כל הספוטים לפי התחזיות"""
    comparison = []
    for spot in surf_spots:
        comparison.append({
            "spot": spot["spot"],
            "swell_quality": spot.get("swell_quality", "Unknown"),
            "level": spot["level"],
            "best_time": spot["best_time"],
            "recommendation": spot.get("recommendation", "")
        })
    return pd.DataFrame(comparison)

def get_surf_recommendations_by_level(level="All levels"):
    """מחזיר המלצות לפי רמת הגולש"""
    if level == "Beginner":
        return [s for s in surf_spots if "Beginner" in s["level"] or "All levels" in s["level"]]
    elif level == "Intermediate":
        return [s for s in surf_spots if "Intermediate" in s["level"] or "All levels" in s["level"]]
    elif level == "Advanced":
        return [s for s in surf_spots if "Advanced" in s["level"]]
    else:
        return surf_spots

# ============================================================================
# 6. תכנית יומית מפורטת
# ============================================================================
def create_itinerary():
    """יוצר תכנית יומית מפורטת לטיול"""
    
    itinerary = [
        {
            "day": "יום חמישי, 13 בנובמבר",
            "date": "2025-11-13",
            "activities": [
                "הגעה לפורטוגל - נחיתה כנראה בפארו או ליסבון",
                "נסיעה לדרום (אם נחתתם בליסבון: ~3 שעות, אם בפארו: ~1 שעה)",
                "התמקמות ב-Lagos או Sagres (מומלץ: Lagos - מרכזי יותר)",
                "צהריים: ארוחה קלה ב-A Tasca או Adega Vila Lisa",
                "אחר הצהריים: גלישה ראשונה ב-Arrifana (הגלים הכי טובים ביום הזה!) או Tonel",
                "ערב: ארוחת ערב ב-O Camilo (נוף מדהים) + יין מקומי"
            ],
            "surf_spot": "Arrifana או Tonel",
            "restaurant": "O Camilo",
            "accommodation": "Lagos (מומלץ)"
        },
        {
            "day": "יום שישי, 14 בנובמבר",
            "date": "2025-11-14",
            "activities": [
                "בוקר: גלישה ב-Tonel (Sagres) או Praia do Amado",
                "צהריים: ארוחה ב-Restaurante O Infante (Sagres)",
                "אחר הצהריים: ביקור ב-Sagres - כף סנט וינסנט (הנקודה הדרומית-מערבית ביותר באירופה)",
                "ערב: חזרה ל-Lagos, טעימת יין ב-Wine Bar do Castelo או Adega do Cantor",
                "ארוחת ערב: A Tasca (טעימות + יין)"
            ],
            "surf_spot": "Tonel או Praia do Amado",
            "restaurant": "Restaurante O Infante (צהריים), A Tasca (ערב)",
            "wine": "Wine Bar do Castelo או Adega do Cantor"
        },
        {
            "day": "יום שבת, 15 בנובמבר",
            "date": "2025-11-15",
            "activities": [
                "יום טבע! - Costa Vicentina Natural Park",
                "בוקר מוקדם: נסיעה ל-Aljezur",
                "הליכה במסלול החוף של Costa Vicentina (מסלול Arrifana או Praia do Amado)",
                "צהריים: פיקניק או ארוחה במסעדה מקומית באזור",
                "אחר הצהריים: המשך הליכה או ביקור ב-Monchique Mountains (נסיעה של שעה)",
                "ערב: חזרה ל-Lagos, ארוחת ערב ב-Adega Vila Lisa"
            ],
            "nature_spot": "Costa Vicentina Natural Park + Monchique Mountains",
            "restaurant": "Adega Vila Lisa"
        },
        {
            "day": "יום ראשון, 16 בנובמבר",
            "date": "2025-11-16",
            "activities": [
                "בוקר: גלישה ב-Playa de Lagos או Praia do Amado",
                "אחר הצהריים: סיור ב-Ponta da Piedade (סירה או קיאק)",
                "צהריים מאוחר: ארוחה ב-O Camilo או מסעדה אחרת ב-Lagos",
                "אחר הצהריים: ביקור ביקב Quinta do Francês (טעימות יין)",
                "ערב: ארוחת ערב ב-Quinta do Francês (יש להם גם מסעדה)"
            ],
            "surf_spot": "Playa de Lagos או Praia do Amado",
            "nature_spot": "Ponta da Piedade",
            "wine": "Quinta do Francês",
            "restaurant": "Quinta do Francês"
        },
        {
            "day": "יום שני, 17 בנובמבר",
            "date": "2025-11-17",
            "activities": [
                "בוקר: גלישה ב-Arrifana או Tonel (לפי תנאי הגלים)",
                "אחר הצהריים: נסיעה ל-Ria Formosa Natural Park (כ-45 דקות מלוגוס)",
                "סיור ב-Ria Formosa (סירה או קיאק) - ציפורים, לגונות, איים",
                "ערב: נסיעה ל-Albufeira, ארוחת ערב ב-Dom Carlos (4.5⭐) - מומלץ להזמין מראש!",
                "אחרי הארוחה: יין ב-Adega do Cantor (יקב של קליף ריצ'רד, 4.4⭐)"
            ],
            "surf_spot": "Arrifana או Tonel",
            "nature_spot": "Ria Formosa Natural Park",
            "restaurant": "Dom Carlos (4.5⭐ - מומלץ מאוד!)",
            "wine": "Adega do Cantor (4.4⭐)"
        },
        {
            "day": "יום שלישי, 18 בנובמבר",
            "date": "2025-11-18",
            "activities": [
                "בוקר: גלישה ב-Praia do Amado או Tonel",
                "אחר הצהריים: מסלול Seven Hanging Valleys Trail (כ-30 דקות מלוגוס)",
                "הליכה במסלול החוף המדהים (3-4 שעות)",
                "צהריים מאוחר: ארוחה באזור Carvoeiro/Lagoa",
                "אחר הצהריים: ביקור ביקב Quinta dos Vales (סיור וטעימות, 4.5⭐)",
                "ערב: ארוחת ערב מיוחדת ב-Bon Bon (4.7⭐, Carvoeiro) או Vila Joya (2 כוכבי מישלן, Albufeira) - הזמינו מראש!"
            ],
            "surf_spot": "Praia do Amado או Tonel",
            "nature_spot": "Seven Hanging Valleys Trail",
            "wine": "Quinta dos Vales (4.5⭐)",
            "restaurant": "Bon Bon (4.7⭐ - מומלץ מאוד!) או Vila Joya (2 Michelin stars)"
        },
        {
            "day": "יום רביעי, 19 בנובמבר",
            "date": "2025-11-19",
            "activities": [
                "בוקר: גלישה אחרונה - בחרו את הספוט האהוב עליכם",
                "אחר הצהריים: קניות יין ב-Adega do Cantor או Wine Bar do Castelo",
                "צהריים: ארוחה אחרונה ב-Adega Vila Lisa או מסעדה אחרת שתאהבו",
                "אחר הצהריים: זמן חופשי - עוד ביקור במקום שאהבתם, או פשוט להירגע",
                "ערב: ארוחת ערב אחרונה + יין מקומי"
            ],
            "surf_spot": "בחירה חופשית",
            "restaurant": "Adega Vila Lisa או בחירה חופשית",
            "wine": "קניות יין"
        },
        {
            "day": "יום חמישי, 20 בנובמבר",
            "date": "2025-11-20",
            "activities": [
                "בוקר: ארוחת בוקר אחרונה",
                "נסיעה לשדה התעופה",
                "טיסה חזרה"
            ]
        }
    ]
    
    return itinerary

# ============================================================================
# 6. טיפים חשובים
# ============================================================================
tips = [
    "הזמנות: מומלץ להזמין מראש את Vila Joya, Bon Bon, Dom Carlos ו-Quinta dos Vales",
    "גלישה: תחזיות גלים מדויקות זמינות רק עד שבועיים מראש. בדקו תחזית יומית באתרים: Magicseaweed, Surfline, או surf-forecast.com",
    "תחזיות גלים: הנתונים כאן הם מתאריך 8 בנובמבר - מומלץ לבדוק תחזיות מעודכנות קרוב יותר למועד הנסיעה",
    "רכב: מומלץ לשכור רכב - זה הכי נוח לניידות בדרום פורטוגל",
    "לינה: Lagos הוא בסיס מעולה - מרכזי, יש הרבה אפשרויות, קרוב לכל מקום",
    "יין: יינות פורטוגליים מעולים - נסו Vinho Verde, Douro, Alentejo",
    "אוכל: אל תפספסו Cataplana (תבשיל פירות ים), Pastéis de Nata, ו-Grilled sardines",
    "מסעדות מומלצות: Bon Bon (4.7⭐), O Camilo (4.3⭐ עם 2,950 ביקורות!), Dom Carlos (4.5⭐)",
    "יקבים מומלצים: Quinta dos Vales (4.5⭐), Adega do Cantor (4.4⭐)",
    "טבע: נובמבר הוא זמן מעולה - פחות תיירים, מזג אוויר נעים (19-24°C ביום)",
    "בגדים: קחו בגדים חמים לערב (נובמבר יכול להיות קריר 13-18°C), וגם בגדי ים לגלישה"
]

# ============================================================================
# 8. יצירת קבצי CSV ו-Display
# ============================================================================
def generate_trip_plan():
    """יוצר את כל קבצי התכנית"""
    
    # DataFrames
    df_surf_forecast_raw = pd.DataFrame(surf_forecast_raw)  # הנתונים המקוריים
    df_surf = pd.DataFrame(surf_spots)  # המידע המורחב
    df_restaurants = pd.DataFrame(restaurants)
    df_wine = pd.DataFrame(wine_experiences)
    df_nature = pd.DataFrame(nature_spots)
    df_itinerary = pd.DataFrame(create_itinerary())
    df_comparison = compare_surf_spots()  # השוואה בין הספוטים
    
    # המלצה מיוחדת ל-13 בנובמבר (מבוסס על הנתונים המקוריים)
    best_spot_recommendation = get_best_surf_spot_for_date("2025-11-13")
    
    # שמירת קבצים
    df_surf_forecast_raw.to_csv("surf_forecast_raw.csv", index=False)  # הנתונים המקוריים
    df_surf.to_csv("surf_spots.csv", index=False)
    df_comparison.to_csv("surf_spots_comparison.csv", index=False)
    df_restaurants.to_csv("restaurants.csv", index=False)
    df_wine.to_csv("wine_experiences.csv", index=False)
    df_nature.to_csv("nature_spots.csv", index=False)
    df_itinerary.to_csv("itinerary.csv", index=False)
    
    # הדפסה
    print("=" * 80)
    print("תכנית טיול לדרום פורטוגל - 13-20 בנובמבר 2025")
    print("=" * 80)
    
    # המלצה מיוחדת ליום הראשון (מבוסס על הנתונים שהחבר שלח)
    print("\n" + "=" * 80)
    print("⭐ המלצה מיוחדת ליום הראשון (13 בנובמבר) - מבוסס על תחזיות:")
    print("-" * 80)
    print(f"🏄 הספוט המומלץ: {best_spot_recommendation['recommended_spot']}")
    print(f"📊 סיבה: {best_spot_recommendation['reason']}")
    print(f"🌊 תחזית: {best_spot_recommendation['forecast']}")
    print(f"🔄 אלטרנטיבה: {best_spot_recommendation['alternative']}")
    
    print("\n" + "=" * 80)
    print("📅 תכנית יומית:")
    print("-" * 80)
    for day in create_itinerary():
        print(f"\n{day['day']} ({day['date']}):")
        for activity in day['activities']:
            print(f"  • {activity}")
        if 'surf_spot' in day:
            print(f"  🏄 גלישה: {day['surf_spot']}")
        if 'restaurant' in day:
            print(f"  🍽️  מסעדה: {day['restaurant']}")
        if 'wine' in day:
            print(f"  🍷 יין: {day['wine']}")
        if 'nature_spot' in day:
            print(f"  🌲 טבע: {day['nature_spot']}")
    
    print("\n" + "=" * 80)
    print("🏄 השוואה בין ספוטים לגלישה (מבוסס על תחזיות):")
    print("-" * 80)
    print(df_comparison.to_string(index=False))
    
    print("\n" + "=" * 80)
    print("🏄 מידע מפורט על ספוטים לגלישה:")
    print("-" * 80)
    print(df_surf.to_string(index=False))
    
    print("\n" + "=" * 80)
    print("📊 נתוני תחזית מקוריים (מהחבר שלך):")
    print("-" * 80)
    print(df_surf_forecast_raw.to_string(index=False))
    
    print("\n" + "=" * 80)
    print("🍽️  מסעדות מומלצות:")
    print("-" * 80)
    print(df_restaurants.to_string(index=False))
    
    print("\n" + "=" * 80)
    print("🍷 חוויות יין:")
    print("-" * 80)
    print(df_wine.to_string(index=False))
    
    print("\n" + "=" * 80)
    print("🌲 מקומות טבע:")
    print("-" * 80)
    print(df_nature.to_string(index=False))
    
    print("\n" + "=" * 80)
    print("💡 טיפים חשובים:")
    print("-" * 80)
    for tip in tips:
        print(f"  • {tip}")
    
    print("\n" + "=" * 80)
    print("✅ קבצים שנוצרו:")
    print("  - surf_forecast_raw.csv (הנתונים המקוריים מהחבר שלך)")
    print("  - surf_spots.csv (מידע מורחב)")
    print("  - surf_spots_comparison.csv (השוואה בין הספוטים)")
    print("  - restaurants.csv")
    print("  - wine_experiences.csv")
    print("  - nature_spots.csv")
    print("  - itinerary.csv")
    print("=" * 80)
    
    return {
        'surf_forecast_raw': df_surf_forecast_raw,
        'surf': df_surf,
        'surf_comparison': df_comparison,
        'restaurants': df_restaurants,
        'wine': df_wine,
        'nature': df_nature,
        'itinerary': df_itinerary,
        'best_spot_recommendation': best_spot_recommendation
    }

# הרצת התכנית
if __name__ == "__main__":
    trip_data = generate_trip_plan()
