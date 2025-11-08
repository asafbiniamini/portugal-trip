#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script to generate day pages from trip data
"""

import os
import json

# Trip data (same as in main.js)
trip_data = {
    "days": [
        {
            "day": "יום חמישי, 13 בנובמבר",
            "date": "2025-11-13",
            "dayNumber": 1,
            "activities": [
                {"time": "08:00", "description": "נחיתה בליסבון - שדה התעופה", "link": "https://www.google.com/maps/search/Lisbon+Airport"},
                {"time": "09:00", "description": "התארגנות ונסיעה למלון במרכז ליסבון", "link": "https://www.google.com/maps/search/hotels+Lisbon+center"},
                {"time": "10:30", "description": "ביקור ב-Alfama - הרובע העתיק של ליסבון", "link": "https://www.google.com/maps/search/Alfama+Lisbon"},
                {"time": "12:00", "description": "ארוחת צהריים ב-Time Out Market או מסעדה מקומית", "link": "https://www.google.com/maps/search/Time+Out+Market+Lisbon"},
                {"time": "14:00", "description": "ביקור ב-Castelo de São Jorge - טירה עם נוף מדהים", "link": "https://www.google.com/maps/search/Castelo+de+São+Jorge+Lisbon"},
                {"time": "16:00", "description": "טיול ב-Baixa - המרכז ההיסטורי", "link": "https://www.google.com/maps/search/Baixa+Lisbon"},
                {"time": "18:00", "description": "שקיעה ב-Miradouro de Santa Luzia או Miradouro das Portas do Sol", "link": "https://www.google.com/maps/search/Miradouro+de+Santa+Luzia+Lisbon"},
                {"time": "20:00", "description": "ארוחת ערב בליסבון - מסעדה מקומית מומלצת", "link": "https://www.google.com/maps/search/best+restaurants+Lisbon"},
                {"time": "22:00", "description": "לינה בליסבון - הכנה ליציאה בבוקר לדרום"}
            ],
            "restaurant": "Time Out Market / מסעדות מקומיות בליסבון",
            "accommodation": "ליסבון",
            "links": [
                {"name": "שדה התעופה ליסבון", "url": "https://www.google.com/maps/search/Lisbon+Airport"},
                {"name": "Alfama - הרובע העתיק", "url": "https://www.google.com/maps/search/Alfama+Lisbon"},
                {"name": "Castelo de São Jorge", "url": "https://www.google.com/maps/search/Castelo+de+São+Jorge+Lisbon"},
                {"name": "Time Out Market", "url": "https://www.google.com/maps/search/Time+Out+Market+Lisbon"},
                {"name": "Miradouro de Santa Luzia", "url": "https://www.google.com/maps/search/Miradouro+de+Santa+Luzia+Lisbon"},
                {"name": "מלונות במרכז ליסבון", "url": "https://www.google.com/maps/search/hotels+Lisbon+center"}
            ],
            "images": [
                "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800&q=80",
                "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&q=80"
            ]
        },
        {
            "day": "יום שישי, 14 בנובמבר",
            "date": "2025-11-14",
            "dayNumber": 2,
            "activities": [
                {"time": "08:00", "description": "גלישה ב-Tonel (Sagres) או Praia do Amado", "link": "https://www.google.com/maps/search/Tonel+Beach+Sagres"},
                {"time": "12:00", "description": "ארוחה ב-Restaurante O Infante (Sagres)", "link": "https://www.google.com/maps/search/Restaurante+O+Infante+Sagres"},
                {"time": "15:00", "description": "ביקור ב-Sagres - כף סנט וינסנט (הנקודה הדרומית-מערבית ביותר באירופה)", "link": "https://www.google.com/maps/search/Cape+St+Vincent+Sagres"},
                {"time": "18:00", "description": "חזרה ל-Lagos, טעימת יין ב-Wine Bar do Castelo או Adega do Cantor", "link": "https://www.google.com/maps/search/Wine+Bar+do+Castelo+Lagos"},
                {"time": "20:00", "description": "ארוחת ערב: A Tasca (טעימות + יין)", "link": "https://www.google.com/maps/search/A+Tasca+Lagos"}
            ],
            "surfSpot": "Tonel או Praia do Amado",
            "restaurant": "Restaurante O Infante (צהריים), A Tasca (ערב)",
            "wine": "Wine Bar do Castelo או Adega do Cantor",
            "links": [
                {"name": "Sagres - Cape St. Vincent", "url": "https://www.google.com/maps/search/Cape+St+Vincent+Sagres"},
                {"name": "Restaurante O Infante", "url": "https://www.google.com/maps/search/Restaurante+O+Infante+Sagres"},
                {"name": "Tonel Beach", "url": "https://www.google.com/maps/search/Tonel+Beach+Sagres"}
            ],
            "images": [
                "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800",
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
            ]
        },
        {
            "day": "יום שבת, 15 בנובמבר",
            "date": "2025-11-15",
            "dayNumber": 3,
            "activities": [
                {"time": "07:00", "description": "יום טבע! - Costa Vicentina Natural Park", "link": "https://www.google.com/maps/search/Costa+Vicentina+Natural+Park"},
                {"time": "08:00", "description": "נסיעה ל-Aljezur", "link": "https://www.google.com/maps/search/Aljezur+Portugal"},
                {"time": "09:00", "description": "הליכה במסלול החוף של Costa Vicentina (מסלול Arrifana או Praia do Amado)", "link": "https://www.google.com/maps/search/Arrifana+Beach+Aljezur"},
                {"time": "13:00", "description": "פיקניק או ארוחה במסעדה מקומית באזור", "link": "https://www.google.com/maps/search/restaurants+Aljezur"},
                {"time": "15:00", "description": "המשך הליכה או ביקור ב-Monchique Mountains (נסיעה של שעה)", "link": "https://www.google.com/maps/search/Monchique+Mountains"},
                {"time": "19:00", "description": "חזרה ל-Lagos, ארוחת ערב ב-Adega Vila Lisa", "link": "https://www.google.com/maps/search/Adega+Vila+Lisa+Lagos"}
            ],
            "natureSpot": "Costa Vicentina Natural Park + Monchique Mountains",
            "restaurant": "Adega Vila Lisa",
            "links": [
                {"name": "Costa Vicentina Natural Park", "url": "https://www.google.com/maps/search/Costa+Vicentina+Natural+Park"},
                {"name": "Monchique Mountains", "url": "https://www.google.com/maps/search/Monchique+Mountains"},
                {"name": "Adega Vila Lisa", "url": "https://www.google.com/maps/search/Adega+Vila+Lisa+Lagos"}
            ],
            "images": [
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
                "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800"
            ]
        },
        {
            "day": "יום ראשון, 16 בנובמבר",
            "date": "2025-11-16",
            "dayNumber": 4,
            "activities": [
                {"time": "08:00", "description": "גלישה ב-Playa de Lagos או Praia do Amado", "link": "https://www.google.com/maps/search/Playa+de+Lagos"},
                {"time": "14:00", "description": "סיור ב-Ponta da Piedade (סירה או קיאק)", "link": "https://www.google.com/maps/search/Ponta+da+Piedade+Lagos"},
                {"time": "15:30", "description": "ארוחה ב-O Camilo או מסעדה אחרת ב-Lagos", "link": "https://www.google.com/maps/search/O+Camilo+Lagos"},
                {"time": "17:00", "description": "ביקור ביקב Quinta do Francês (טעימות יין)", "link": "https://www.google.com/maps/search/Quinta+do+Francês+Lagos"},
                {"time": "20:00", "description": "ארוחת ערב ב-Quinta do Francês (יש להם גם מסעדה)", "link": "https://www.google.com/maps/search/Quinta+do+Francês+Lagos"}
            ],
            "surfSpot": "Playa de Lagos או Praia do Amado",
            "natureSpot": "Ponta da Piedade",
            "wine": "Quinta do Francês",
            "restaurant": "Quinta do Francês",
            "links": [
                {"name": "Ponta da Piedade", "url": "https://www.google.com/maps/search/Ponta+da+Piedade+Lagos"},
                {"name": "Quinta do Francês", "url": "https://www.google.com/maps/search/Quinta+do+Francês+Lagos"},
                {"name": "Lagos Beach", "url": "https://www.google.com/maps/search/Playa+de+Lagos"}
            ],
            "images": [
                "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800",
                "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800"
            ]
        },
        {
            "day": "יום שני, 17 בנובמבר",
            "date": "2025-11-17",
            "dayNumber": 5,
            "activities": [
                {"time": "08:00", "description": "גלישה ב-Arrifana או Tonel (לפי תנאי הגלים)", "link": "https://www.google.com/maps/search/Arrifana+Beach+Aljezur"},
                {"time": "13:00", "description": "נסיעה ל-Ria Formosa Natural Park (כ-45 דקות מלוגוס)", "link": "https://www.google.com/maps/search/Ria+Formosa+Natural+Park"},
                {"time": "14:30", "description": "סיור ב-Ria Formosa (סירה או קיאק) - ציפורים, לגונות, איים", "link": "https://www.google.com/maps/search/Ria+Formosa+boat+tour"},
                {"time": "19:00", "description": "נסיעה ל-Albufeira, ארוחת ערב ב-Dom Carlos (4.5⭐) - מומלץ להזמין מראש!", "link": "https://www.google.com/maps/search/Dom+Carlos+Albufeira"},
                {"time": "21:30", "description": "אחרי הארוחה: יין ב-Adega do Cantor (יקב של קליף ריצ'רד, 4.4⭐)", "link": "https://www.google.com/maps/search/Adega+do+Cantor+Albufeira"}
            ],
            "surfSpot": "Arrifana או Tonel",
            "natureSpot": "Ria Formosa Natural Park",
            "restaurant": "Dom Carlos (4.5⭐ - מומלץ מאוד!)",
            "wine": "Adega do Cantor (4.4⭐)",
            "links": [
                {"name": "Ria Formosa Natural Park", "url": "https://www.google.com/maps/search/Ria+Formosa+Natural+Park"},
                {"name": "Dom Carlos Restaurant", "url": "https://www.google.com/maps/search/Dom+Carlos+Albufeira"},
                {"name": "Adega do Cantor", "url": "https://www.google.com/maps/search/Adega+do+Cantor+Albufeira"}
            ],
            "images": [
                "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800",
                "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800"
            ]
        },
        {
            "day": "יום שלישי, 18 בנובמבר",
            "date": "2025-11-18",
            "dayNumber": 6,
            "activities": [
                {"time": "08:00", "description": "גלישה ב-Praia do Amado או Tonel", "link": "https://www.google.com/maps/search/Praia+do+Amado+Carrapateira"},
                {"time": "13:00", "description": "מסלול Seven Hanging Valleys Trail (כ-30 דקות מלוגוס)", "link": "https://www.google.com/maps/search/Seven+Hanging+Valleys+Trail+Lagoa"},
                {"time": "13:30", "description": "הליכה במסלול החוף המדהים (3-4 שעות)", "link": "https://www.google.com/maps/search/Seven+Hanging+Valleys+Trail"},
                {"time": "16:30", "description": "ארוחה באזור Carvoeiro/Lagoa", "link": "https://www.google.com/maps/search/restaurants+Carvoeiro"},
                {"time": "17:30", "description": "ביקור ביקב Quinta dos Vales (סיור וטעימות, 4.5⭐)", "link": "https://www.google.com/maps/search/Quinta+dos+Vales+Estômbar"},
                {"time": "20:00", "description": "ארוחת ערב מיוחדת ב-Bon Bon (4.7⭐, Carvoeiro) או Vila Joya (2 כוכבי מישלן, Albufeira) - הזמינו מראש!", "link": "https://www.google.com/maps/search/Bon+Bon+Carvoeiro"}
            ],
            "surfSpot": "Praia do Amado או Tonel",
            "natureSpot": "Seven Hanging Valleys Trail",
            "wine": "Quinta dos Vales (4.5⭐)",
            "restaurant": "Bon Bon (4.7⭐ - מומלץ מאוד!) או Vila Joya (2 Michelin stars)",
            "links": [
                {"name": "Seven Hanging Valleys Trail", "url": "https://www.google.com/maps/search/Seven+Hanging+Valleys+Trail+Lagoa"},
                {"name": "Bon Bon Restaurant", "url": "https://www.google.com/maps/search/Bon+Bon+Carvoeiro"},
                {"name": "Quinta dos Vales", "url": "https://www.google.com/maps/search/Quinta+dos+Vales+Estômbar"},
                {"name": "Vila Joya", "url": "https://www.google.com/maps/search/Vila+Joya+Albufeira"}
            ],
            "images": [
                "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800",
                "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800"
            ]
        },
        {
            "day": "יום רביעי, 19 בנובמבר",
            "date": "2025-11-19",
            "dayNumber": 7,
            "activities": [
                {"time": "08:00", "description": "גלישה אחרונה - בחרו את הספוט האהוב עליכם", "link": "https://www.google.com/maps/search/surf+spots+Algarve"},
                {"time": "13:00", "description": "קניות יין ב-Adega do Cantor או Wine Bar do Castelo", "link": "https://www.google.com/maps/search/Adega+do+Cantor+Albufeira"},
                {"time": "14:00", "description": "ארוחה אחרונה ב-Adega Vila Lisa או מסעדה אחרת שתאהבו", "link": "https://www.google.com/maps/search/Adega+Vila+Lisa+Lagos"},
                {"time": "16:00", "description": "זמן חופשי - עוד ביקור במקום שאהבתם, או פשוט להירגע"},
                {"time": "20:00", "description": "ארוחת ערב אחרונה + יין מקומי", "link": "https://www.google.com/maps/search/best+restaurants+Lagos"}
            ],
            "surfSpot": "בחירה חופשית",
            "restaurant": "Adega Vila Lisa או בחירה חופשית",
            "wine": "קניות יין",
            "links": [
                {"name": "Adega do Cantor", "url": "https://www.google.com/maps/search/Adega+do+Cantor+Albufeira"},
                {"name": "Wine Bar do Castelo", "url": "https://www.google.com/maps/search/Wine+Bar+do+Castelo+Lagos"}
            ],
            "images": [
                "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800"
            ]
        },
        {
            "day": "יום חמישי, 20 בנובמבר",
            "date": "2025-11-20",
            "dayNumber": 8,
            "activities": [
                {"time": "08:00", "description": "ארוחת בוקר אחרונה"},
                {"time": "10:00", "description": "נסיעה לשדה התעופה", "link": "https://www.google.com/maps/search/Faro+Airport"},
                {"time": "12:00", "description": "טיסה חזרה"}
            ],
            "links": [
                {"name": "Faro Airport", "url": "https://www.google.com/maps/search/Faro+Airport"},
                {"name": "Lisbon Airport", "url": "https://www.google.com/maps/search/Lisbon+Airport"}
            ]
        }
    ]
}

def generate_day_page(day_data):
    """Generate HTML for a single day page"""
    
    # Generate activities HTML with timeline
    activities_html = ""
    for activity in day_data.get("activities", []):
        time_str = activity.get('time', '')
        description = activity.get('description', '')
        link = activity.get('link', '')
        
        # Check if time is in format HH:MM (for timeline) or text (for old format)
        is_timeline = ':' in time_str and len(time_str) <= 6
        
        if is_timeline:
            # Timeline format
            link_html = f'<a href="{link}" target="_blank" class="timeline-link">פתח ב-Google Maps</a>' if link else ''
            activities_html += f"""
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-time">{time_str}</div>
                <div class="timeline-content">
                    <p>{description}</p>
                    {f'<a href="{link}" target="_blank" class="timeline-link">פתח ב-Google Maps</a>' if link else ''}
                </div>
            </div>
            """
        else:
            # Old format (backward compatibility)
            activities_html += f"""
            <div class="activity-item">
                <div class="activity-time">{time_str}</div>
                <div class="activity-description">{description}</div>
                {f'<a href="{link}" target="_blank" class="link-item">פתח ב-Google Maps</a>' if link else ''}
            </div>
            """
    
    # Generate highlights HTML
    highlights_html = ""
    if day_data.get("surfSpot"):
        highlights_html += f"""
            <div class="highlight-box">
                <h3>🏄 גלישה</h3>
                <p>{day_data['surfSpot']}</p>
            </div>
        """
    if day_data.get("restaurant"):
        highlights_html += f"""
            <div class="highlight-box">
                <h3>🍽️ מסעדה</h3>
                <p>{day_data['restaurant']}</p>
            </div>
        """
    if day_data.get("wine"):
        highlights_html += f"""
            <div class="highlight-box">
                <h3>🍷 יין</h3>
                <p>{day_data['wine']}</p>
            </div>
        """
    if day_data.get("natureSpot"):
        highlights_html += f"""
            <div class="highlight-box">
                <h3>🌲 טבע</h3>
                <p>{day_data['natureSpot']}</p>
            </div>
        """
    if day_data.get("accommodation"):
        highlights_html += f"""
            <div class="highlight-box">
                <h3>🏨 לינה</h3>
                <p>{day_data['accommodation']}</p>
            </div>
        """
    
    # Generate links HTML
    links_html = ""
    for link in day_data.get("links", []):
        links_html += f'<a href="{link["url"]}" target="_blank" class="link-item">{link["name"]}</a>\n                '
    
    # Generate images HTML
    images_html = ""
    for img_url in day_data.get("images", []):
        images_html += f'<img src="{img_url}" alt="תמונה" class="gallery-image">\n                '
    
    # Read template
    template_path = os.path.join(os.path.dirname(__file__), "pages", "day_template.html")
    with open(template_path, 'r', encoding='utf-8') as f:
        template = f.read()
    
    # Generate location string
    location_parts = []
    if day_data.get("accommodation"):
        location_parts.append(f"🏨 {day_data['accommodation']}")
    if day_data.get("surfSpot"):
        location_parts.append(f"🏄 {day_data['surfSpot']}")
    if day_data.get("natureSpot"):
        location_parts.append(f"🌲 {day_data['natureSpot']}")
    if day_data.get("restaurant"):
        location_parts.append(f"🍽️ {day_data['restaurant']}")
    
    location_str = " • ".join(location_parts) if location_parts else "פורטוגל"
    
    # Replace placeholders
    html = template.replace("{{DAY_TITLE}}", day_data["day"])
    html = html.replace("{{DAY_LOCATION}}", location_str)
    html = html.replace("{{ACTIVITIES}}", activities_html)
    html = html.replace("{{HIGHLIGHTS}}", highlights_html)
    html = html.replace("{{LINKS}}", links_html)
    html = html.replace("{{IMAGES}}", images_html)
    
    # Update active nav item
    day_num = day_data["dayNumber"]
    html = html.replace(f'<a href="day{day_num}.html">', f'<a href="day{day_num}.html" class="active">')
    
    return html

def main():
    """Generate all day pages"""
    pages_dir = os.path.join(os.path.dirname(__file__), "pages")
    
    for day_data in trip_data["days"]:
        day_num = day_data["dayNumber"]
        html_content = generate_day_page(day_data)
        
        output_path = os.path.join(pages_dir, f"day{day_num}.html")
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(html_content)
        
        print(f"Generated: day{day_num}.html")

if __name__ == "__main__":
    main()

