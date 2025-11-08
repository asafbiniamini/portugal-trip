// Trip Data
const tripData = {
    days: [
        {
            day: "יום חמישי, 13 בנובמבר",
            date: "2025-11-13",
            dayNumber: 1,
            activities: [
                { time: "08:00", description: "נחיתה בליסבון - שדה התעופה", link: "https://www.google.com/maps/search/Lisbon+Airport" },
                { time: "09:00", description: "התארגנות ונסיעה למלון במרכז ליסבון", link: "https://www.google.com/maps/search/hotels+Lisbon+center" },
                { time: "10:30", description: "ביקור ב-Alfama - הרובע העתיק של ליסבון", link: "https://www.google.com/maps/search/Alfama+Lisbon" },
                { time: "12:00", description: "ארוחת צהריים ב-Time Out Market או מסעדה מקומית", link: "https://www.google.com/maps/search/Time+Out+Market+Lisbon" },
                { time: "14:00", description: "ביקור ב-Castelo de São Jorge - טירה עם נוף מדהים", link: "https://www.google.com/maps/search/Castelo+de+São+Jorge+Lisbon" },
                { time: "16:00", description: "טיול ב-Baixa - המרכז ההיסטורי", link: "https://www.google.com/maps/search/Baixa+Lisbon" },
                { time: "18:00", description: "שקיעה ב-Miradouro de Santa Luzia או Miradouro das Portas do Sol", link: "https://www.google.com/maps/search/Miradouro+de+Santa+Luzia+Lisbon" },
                { time: "20:00", description: "ארוחת ערב בליסבון - מסעדה מקומית מומלצת", link: "https://www.google.com/maps/search/best+restaurants+Lisbon" },
                { time: "22:00", description: "לינה בליסבון - הכנה ליציאה בבוקר לדרום" }
            ],
            restaurant: "Time Out Market / מסעדות מקומיות בליסבון",
            accommodation: "ליסבון",
            links: [
                { name: "שדה התעופה ליסבון", url: "https://www.google.com/maps/search/Lisbon+Airport" },
                { name: "Alfama - הרובע העתיק", url: "https://www.google.com/maps/search/Alfama+Lisbon" },
                { name: "Castelo de São Jorge", url: "https://www.google.com/maps/search/Castelo+de+São+Jorge+Lisbon" },
                { name: "Time Out Market", url: "https://www.google.com/maps/search/Time+Out+Market+Lisbon" },
                { name: "Miradouro de Santa Luzia", url: "https://www.google.com/maps/search/Miradouro+de+Santa+Luzia+Lisbon" },
                { name: "מלונות במרכז ליסבון", url: "https://www.google.com/maps/search/hotels+Lisbon+center" }
            ],
            images: [
                "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800&q=80",
                "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&q=80"
            ]
        },
        {
            day: "יום שישי, 14 בנובמבר",
            date: "2025-11-14",
            dayNumber: 2,
            activities: [
                { time: "08:00", description: "גלישה ב-Tonel (Sagres) או Praia do Amado", link: "https://www.google.com/maps/search/Tonel+Beach+Sagres" },
                { time: "12:00", description: "ארוחה ב-Restaurante O Infante (Sagres)", link: "https://www.google.com/maps/search/Restaurante+O+Infante+Sagres" },
                { time: "15:00", description: "ביקור ב-Sagres - כף סנט וינסנט (הנקודה הדרומית-מערבית ביותר באירופה)", link: "https://www.google.com/maps/search/Cape+St+Vincent+Sagres" },
                { time: "18:00", description: "חזרה ל-Lagos, טעימת יין ב-Wine Bar do Castelo או Adega do Cantor", link: "https://www.google.com/maps/search/Wine+Bar+do+Castelo+Lagos" },
                { time: "20:00", description: "ארוחת ערב: A Tasca (טעימות + יין)", link: "https://www.google.com/maps/search/A+Tasca+Lagos" }
            ],
            surfSpot: "Tonel או Praia do Amado",
            restaurant: "Restaurante O Infante (צהריים), A Tasca (ערב)",
            wine: "Wine Bar do Castelo או Adega do Cantor",
            links: [
                { name: "Sagres - Cape St. Vincent", url: "https://www.google.com/maps/search/Cape+St+Vincent+Sagres" },
                { name: "Restaurante O Infante", url: "https://www.google.com/maps/search/Restaurante+O+Infante+Sagres" },
                { name: "Tonel Beach", url: "https://www.google.com/maps/search/Tonel+Beach+Sagres" }
            ],
            images: [
                "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800",
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
            ]
        },
        {
            day: "יום שבת, 15 בנובמבר",
            date: "2025-11-15",
            dayNumber: 3,
            activities: [
                { time: "07:00", description: "יום טבע! - Costa Vicentina Natural Park", link: "https://www.google.com/maps/search/Costa+Vicentina+Natural+Park" },
                { time: "08:00", description: "נסיעה ל-Aljezur", link: "https://www.google.com/maps/search/Aljezur+Portugal" },
                { time: "09:00", description: "הליכה במסלול החוף של Costa Vicentina (מסלול Arrifana או Praia do Amado)", link: "https://www.google.com/maps/search/Arrifana+Beach+Aljezur" },
                { time: "13:00", description: "פיקניק או ארוחה במסעדה מקומית באזור", link: "https://www.google.com/maps/search/restaurants+Aljezur" },
                { time: "15:00", description: "המשך הליכה או ביקור ב-Monchique Mountains (נסיעה של שעה)", link: "https://www.google.com/maps/search/Monchique+Mountains" },
                { time: "19:00", description: "חזרה ל-Lagos, ארוחת ערב ב-Adega Vila Lisa", link: "https://www.google.com/maps/search/Adega+Vila+Lisa+Lagos" }
            ],
            natureSpot: "Costa Vicentina Natural Park + Monchique Mountains",
            restaurant: "Adega Vila Lisa",
            links: [
                { name: "Costa Vicentina Natural Park", url: "https://www.google.com/maps/search/Costa+Vicentina+Natural+Park" },
                { name: "Monchique Mountains", url: "https://www.google.com/maps/search/Monchique+Mountains" },
                { name: "Adega Vila Lisa", url: "https://www.google.com/maps/search/Adega+Vila+Lisa+Lagos" }
            ],
            images: [
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
                "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800"
            ]
        },
        {
            day: "יום ראשון, 16 בנובמבר",
            date: "2025-11-16",
            dayNumber: 4,
            activities: [
                { time: "08:00", description: "גלישה ב-Playa de Lagos או Praia do Amado", link: "https://www.google.com/maps/search/Playa+de+Lagos" },
                { time: "14:00", description: "סיור ב-Ponta da Piedade (סירה או קיאק)", link: "https://www.google.com/maps/search/Ponta+da+Piedade+Lagos" },
                { time: "15:30", description: "ארוחה ב-O Camilo או מסעדה אחרת ב-Lagos", link: "https://www.google.com/maps/search/O+Camilo+Lagos" },
                { time: "17:00", description: "ביקור ביקב Quinta do Francês (טעימות יין)", link: "https://www.google.com/maps/search/Quinta+do+Francês+Lagos" },
                { time: "20:00", description: "ארוחת ערב ב-Quinta do Francês (יש להם גם מסעדה)", link: "https://www.google.com/maps/search/Quinta+do+Francês+Lagos" }
            ],
            surfSpot: "Playa de Lagos או Praia do Amado",
            natureSpot: "Ponta da Piedade",
            wine: "Quinta do Francês",
            restaurant: "Quinta do Francês",
            links: [
                { name: "Ponta da Piedade", url: "https://www.google.com/maps/search/Ponta+da+Piedade+Lagos" },
                { name: "Quinta do Francês", url: "https://www.google.com/maps/search/Quinta+do+Francês+Lagos" },
                { name: "Lagos Beach", url: "https://www.google.com/maps/search/Playa+de+Lagos" }
            ],
            images: [
                "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800",
                "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800"
            ]
        },
        {
            day: "יום שני, 17 בנובמבר",
            date: "2025-11-17",
            dayNumber: 5,
            activities: [
                { time: "08:00", description: "גלישה ב-Arrifana או Tonel (לפי תנאי הגלים)", link: "https://www.google.com/maps/search/Arrifana+Beach+Aljezur" },
                { time: "13:00", description: "נסיעה ל-Ria Formosa Natural Park (כ-45 דקות מלוגוס)", link: "https://www.google.com/maps/search/Ria+Formosa+Natural+Park" },
                { time: "14:30", description: "סיור ב-Ria Formosa (סירה או קיאק) - ציפורים, לגונות, איים", link: "https://www.google.com/maps/search/Ria+Formosa+boat+tour" },
                { time: "19:00", description: "נסיעה ל-Albufeira, ארוחת ערב ב-Dom Carlos (4.5⭐) - מומלץ להזמין מראש!", link: "https://www.google.com/maps/search/Dom+Carlos+Albufeira" },
                { time: "21:30", description: "אחרי הארוחה: יין ב-Adega do Cantor (יקב של קליף ריצ'רד, 4.4⭐)", link: "https://www.google.com/maps/search/Adega+do+Cantor+Albufeira" }
            ],
            surfSpot: "Arrifana או Tonel",
            natureSpot: "Ria Formosa Natural Park",
            restaurant: "Dom Carlos (4.5⭐ - מומלץ מאוד!)",
            wine: "Adega do Cantor (4.4⭐)",
            links: [
                { name: "Ria Formosa Natural Park", url: "https://www.google.com/maps/search/Ria+Formosa+Natural+Park" },
                { name: "Dom Carlos Restaurant", url: "https://www.google.com/maps/search/Dom+Carlos+Albufeira" },
                { name: "Adega do Cantor", url: "https://www.google.com/maps/search/Adega+do+Cantor+Albufeira" }
            ],
            images: [
                "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800",
                "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800"
            ]
        },
        {
            day: "יום שלישי, 18 בנובמבר",
            date: "2025-11-18",
            dayNumber: 6,
            activities: [
                { time: "08:00", description: "גלישה ב-Praia do Amado או Tonel", link: "https://www.google.com/maps/search/Praia+do+Amado+Carrapateira" },
                { time: "13:00", description: "מסלול Seven Hanging Valleys Trail (כ-30 דקות מלוגוס)", link: "https://www.google.com/maps/search/Seven+Hanging+Valleys+Trail+Lagoa" },
                { time: "13:30", description: "הליכה במסלול החוף המדהים (3-4 שעות)", link: "https://www.google.com/maps/search/Seven+Hanging+Valleys+Trail" },
                { time: "16:30", description: "ארוחה באזור Carvoeiro/Lagoa", link: "https://www.google.com/maps/search/restaurants+Carvoeiro" },
                { time: "17:30", description: "ביקור ביקב Quinta dos Vales (סיור וטעימות, 4.5⭐)", link: "https://www.google.com/maps/search/Quinta+dos+Vales+Estômbar" },
                { time: "20:00", description: "ארוחת ערב מיוחדת ב-Bon Bon (4.7⭐, Carvoeiro) או Vila Joya (2 כוכבי מישלן, Albufeira) - הזמינו מראש!", link: "https://www.google.com/maps/search/Bon+Bon+Carvoeiro" }
            ],
            surfSpot: "Praia do Amado או Tonel",
            natureSpot: "Seven Hanging Valleys Trail",
            wine: "Quinta dos Vales (4.5⭐)",
            restaurant: "Bon Bon (4.7⭐ - מומלץ מאוד!) או Vila Joya (2 Michelin stars)",
            links: [
                { name: "Seven Hanging Valleys Trail", url: "https://www.google.com/maps/search/Seven+Hanging+Valleys+Trail+Lagoa" },
                { name: "Bon Bon Restaurant", url: "https://www.google.com/maps/search/Bon+Bon+Carvoeiro" },
                { name: "Quinta dos Vales", url: "https://www.google.com/maps/search/Quinta+dos+Vales+Estômbar" },
                { name: "Vila Joya", url: "https://www.google.com/maps/search/Vila+Joya+Albufeira" }
            ],
            images: [
                "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800",
                "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800"
            ]
        },
        {
            day: "יום רביעי, 19 בנובמבר",
            date: "2025-11-19",
            dayNumber: 7,
            activities: [
                { time: "08:00", description: "גלישה אחרונה - בחרו את הספוט האהוב עליכם", link: "https://www.google.com/maps/search/surf+spots+Algarve" },
                { time: "13:00", description: "קניות יין ב-Adega do Cantor או Wine Bar do Castelo", link: "https://www.google.com/maps/search/Adega+do+Cantor+Albufeira" },
                { time: "14:00", description: "ארוחה אחרונה ב-Adega Vila Lisa או מסעדה אחרת שתאהבו", link: "https://www.google.com/maps/search/Adega+Vila+Lisa+Lagos" },
                { time: "16:00", description: "זמן חופשי - עוד ביקור במקום שאהבתם, או פשוט להירגע" },
                { time: "20:00", description: "ארוחת ערב אחרונה + יין מקומי", link: "https://www.google.com/maps/search/best+restaurants+Lagos" }
            ],
            surfSpot: "בחירה חופשית",
            restaurant: "Adega Vila Lisa או בחירה חופשית",
            wine: "קניות יין",
            links: [
                { name: "Adega do Cantor", url: "https://www.google.com/maps/search/Adega+do+Cantor+Albufeira" },
                { name: "Wine Bar do Castelo", url: "https://www.google.com/maps/search/Wine+Bar+do+Castelo+Lagos" }
            ],
            images: [
                "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800"
            ]
        },
        {
            day: "יום חמישי, 20 בנובמבר",
            date: "2025-11-20",
            dayNumber: 8,
            activities: [
                { time: "08:00", description: "ארוחת בוקר אחרונה" },
                { time: "10:00", description: "נסיעה לשדה התעופה", link: "https://www.google.com/maps/search/Faro+Airport" },
                { time: "12:00", description: "טיסה חזרה" }
            ],
            links: [
                { name: "Faro Airport", url: "https://www.google.com/maps/search/Faro+Airport" },
                { name: "Lisbon Airport", url: "https://www.google.com/maps/search/Lisbon+Airport" }
            ]
        }
    ]
};

// Load days preview on homepage
function loadDaysPreview() {
    const daysGrid = document.getElementById('daysGrid');
    if (!daysGrid) return;

    tripData.days.forEach(day => {
        const dayCard = document.createElement('a');
        dayCard.href = `pages/day${day.dayNumber}.html`;
        dayCard.className = 'day-card';
        
        const highlights = [];
        if (day.surfSpot) highlights.push({ icon: '🏄', text: 'גלישה' });
        if (day.restaurant) highlights.push({ icon: '🍽️', text: 'מסעדה' });
        if (day.wine) highlights.push({ icon: '🍷', text: 'יין' });
        if (day.natureSpot) highlights.push({ icon: '🌲', text: 'טבע' });

        dayCard.innerHTML = `
            <div class="day-card-header">
                <div>
                    <div class="day-number">יום ${day.dayNumber}</div>
                    <div class="day-date">${day.date}</div>
                </div>
            </div>
            <h3>${day.day}</h3>
            <div class="day-highlights">
                ${highlights.map(h => `<span class="highlight-badge">${h.icon} ${h.text}</span>`).join('')}
            </div>
        `;

        daysGrid.appendChild(dayCard);
    });
}

// Handle photo upload
function handlePhotoUpload(input, previewId) {
    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.getElementById(previewId);
            preview.src = e.target.result;
            preview.style.display = 'block';
            // Hide placeholder if exists
            const placeholderId = previewId.replace('Preview', 'Placeholder');
            const placeholder = document.getElementById(placeholderId);
            if (placeholder) {
                placeholder.style.display = 'none';
            }
        };
        reader.readAsDataURL(file);
    }
}

// Load existing photos on page load
document.addEventListener('DOMContentLoaded', () => {
    // Photos are already loaded in HTML, just make sure they're visible
    const photo1 = document.getElementById('photo1Preview');
    const photo2 = document.getElementById('photo2Preview');
    if (photo1 && photo1.src) {
        photo1.style.display = 'block';
        const placeholder1 = document.getElementById('photo1Placeholder');
        if (placeholder1) placeholder1.style.display = 'none';
    }
    if (photo2 && photo2.src) {
        photo2.style.display = 'block';
        const placeholder2 = document.getElementById('photo2Placeholder');
        if (placeholder2) placeholder2.style.display = 'none';
    }
});

// Mobile menu toggle
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadDaysPreview();
    initMobileMenu();
});

// Export trip data for day pages
if (typeof module !== 'undefined' && module.exports) {
    module.exports = tripData;
}

