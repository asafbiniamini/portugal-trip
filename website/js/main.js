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
                { time: "08:00", description: "נסיעה מליסבון ל-Aljezur (כ-2.5 שעות)", link: "https://www.google.com/maps/dir/Lisbon/Aljezur" },
                { time: "11:00", description: "הגעה ל-Aljezur, התארגנות והתמקמות", link: "https://www.google.com/maps/search/hotels+Aljezur" },
                { time: "12:00", description: "ארוחת צהריים ב-Restaurante O Paulo או מסעדה מקומית ב-Aljezur", link: "https://www.google.com/maps/search/Restaurante+O+Paulo+Aljezur" },
                { time: "14:00", description: "גלישה ראשונה ב-Arrifana - הספוט המפורסם של Aljezur (מוגן מרוח, גלים טובים)", link: "https://www.google.com/maps/search/Arrifana+Beach+Aljezur" },
                { time: "18:00", description: "שקיעה ב-Arrifana", link: "https://www.google.com/maps/search/Arrifana+Beach+Aljezur" },
                { time: "20:00", description: "ארוחת ערב ב-Restaurante O Paulo או A Tasca do Mar (מסעדות מומלצות ב-Aljezur)", link: "https://www.google.com/maps/search/Restaurante+O+Paulo+Aljezur" }
            ],
            surfSpot: "Arrifana",
            restaurant: "Restaurante O Paulo / A Tasca do Mar",
            accommodation: "Aljezur",
            links: [
                { name: "Arrifana Beach", url: "https://www.google.com/maps/search/Arrifana+Beach+Aljezur" },
                { name: "Restaurante O Paulo", url: "https://www.google.com/maps/search/Restaurante+O+Paulo+Aljezur" },
                { name: "A Tasca do Mar", url: "https://www.google.com/maps/search/A+Tasca+do+Mar+Aljezur" },
                { name: "Aljezur", url: "https://www.google.com/maps/search/Aljezur+Portugal" }
            ],
            images: [
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
                "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800"
            ]
        },
        {
            day: "יום שבת, 15 בנובמבר",
            date: "2025-11-15",
            dayNumber: 3,
            activities: [
                { time: "08:00", description: "גלישה בוקר ב-Arrifana או Monte Clérigo", link: "https://www.google.com/maps/search/Arrifana+Beach+Aljezur" },
                { time: "12:00", description: "ארוחת צהריים ב-Café Arrifana או מסעדה מקומית", link: "https://www.google.com/maps/search/Café+Arrifana" },
                { time: "14:00", description: "בדיקת ספוטים נוספים: Monte Clérigo או Amoreira (דקות ספורות נסיעה)", link: "https://www.google.com/maps/search/Monte+Clérigo+Beach" },
                { time: "15:00", description: "גלישה נוספת או הליכה במסלול החוף של Costa Vicentina", link: "https://www.google.com/maps/search/Costa+Vicentina+Natural+Park" },
                { time: "18:00", description: "שקיעה ב-Arrifana או Monte Clérigo", link: "https://www.google.com/maps/search/Arrifana+Beach+Aljezur" },
                { time: "20:00", description: "ארוחת ערב ב-Restaurante O Paulo או A Tasca do Mar", link: "https://www.google.com/maps/search/Restaurante+O+Paulo+Aljezur" }
            ],
            surfSpot: "Arrifana, Monte Clérigo, Amoreira",
            natureSpot: "Costa Vicentina Natural Park",
            restaurant: "Restaurante O Paulo / A Tasca do Mar",
            accommodation: "Aljezur",
            links: [
                { name: "Arrifana Beach", url: "https://www.google.com/maps/search/Arrifana+Beach+Aljezur" },
                { name: "Monte Clérigo Beach", url: "https://www.google.com/maps/search/Monte+Clérigo+Beach" },
                { name: "Praia do Amoreira", url: "https://www.google.com/maps/search/Praia+do+Amoreira" },
                { name: "Costa Vicentina Natural Park", url: "https://www.google.com/maps/search/Costa+Vicentina+Natural+Park" },
                { name: "Restaurante O Paulo", url: "https://www.google.com/maps/search/Restaurante+O+Paulo+Aljezur" }
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
                { time: "08:00", description: "גלישה בוקר - Arrifana, Monte Clérigo או Amoreira (לפי תנאי הגלים)", link: "https://www.google.com/maps/search/Arrifana+Beach+Aljezur" },
                { time: "12:00", description: "ארוחת צהריים ב-Café Arrifana או מסעדה מקומית", link: "https://www.google.com/maps/search/Café+Arrifana" },
                { time: "14:00", description: "יום טבע - הליכה במסלול החוף של Costa Vicentina או ביקור ב-Monchique Mountains", link: "https://www.google.com/maps/search/Costa+Vicentina+Natural+Park" },
                { time: "17:00", description: "חזרה ל-Aljezur, זמן חופשי", link: "https://www.google.com/maps/search/Aljezur+Portugal" },
                { time: "20:00", description: "ארוחת ערב ב-Restaurante O Paulo או A Tasca do Mar", link: "https://www.google.com/maps/search/Restaurante+O+Paulo+Aljezur" }
            ],
            surfSpot: "Arrifana, Monte Clérigo, Amoreira",
            natureSpot: "Costa Vicentina Natural Park / Monchique Mountains",
            restaurant: "Restaurante O Paulo / A Tasca do Mar",
            accommodation: "Aljezur",
            links: [
                { name: "Costa Vicentina Natural Park", url: "https://www.google.com/maps/search/Costa+Vicentina+Natural+Park" },
                { name: "Monchique Mountains", url: "https://www.google.com/maps/search/Monchique+Mountains" },
                { name: "Restaurante O Paulo", url: "https://www.google.com/maps/search/Restaurante+O+Paulo+Aljezur" }
            ],
            images: [
                "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800",
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
            ]
        },
        {
            day: "יום שני, 17 בנובמבר",
            date: "2025-11-17",
            dayNumber: 5,
            activities: [
                { time: "08:00", description: "גלישה אחרונה ב-Aljezur - Arrifana או Monte Clérigo", link: "https://www.google.com/maps/search/Arrifana+Beach+Aljezur" },
                { time: "12:00", description: "ארוחת צהריים אחרונה ב-Aljezur", link: "https://www.google.com/maps/search/restaurants+Aljezur" },
                { time: "14:00", description: "נסיעה מ-Aljezur ל-Lagos (כ-45 דקות)", link: "https://www.google.com/maps/dir/Aljezur/Lagos" },
                { time: "15:00", description: "התארגנות ב-Lagos, התמקמות", link: "https://www.google.com/maps/search/hotels+Lagos+Portugal" },
                { time: "16:00", description: "סיור ב-Ponta da Piedade (סירה או קיאק) - צוקים מדהימים", link: "https://www.google.com/maps/search/Ponta+da+Piedade+Lagos" },
                { time: "20:00", description: "ארוחת ערב ב-Lagos - O Camilo או Restaurante Don Sebastião", link: "https://www.google.com/maps/search/O+Camilo+Lagos" }
            ],
            surfSpot: "Arrifana / Monte Clérigo (בוקר)",
            natureSpot: "Ponta da Piedade",
            restaurant: "O Camilo / Restaurante Don Sebastião",
            accommodation: "Lagos",
            links: [
                { name: "Ponta da Piedade", url: "https://www.google.com/maps/search/Ponta+da+Piedade+Lagos" },
                { name: "O Camilo", url: "https://www.google.com/maps/search/O+Camilo+Lagos" },
                { name: "Restaurante Don Sebastião", url: "https://www.google.com/maps/search/Restaurante+Don+Sebastião+Lagos" },
                { name: "Lagos", url: "https://www.google.com/maps/search/Lagos+Portugal" }
            ],
            images: [
                "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800",
                "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800"
            ]
        },
        {
            day: "יום שלישי, 18 בנובמבר",
            date: "2025-11-18",
            dayNumber: 6,
            activities: [
                { time: "08:00", description: "גלישה ב-Lagos - Playa de Lagos או Praia do Amado", link: "https://www.google.com/maps/search/Playa+de+Lagos" },
                { time: "12:00", description: "ארוחת צהריים ב-O Camilo או Casinha do Petisco (מסעדות מומלצות ב-Lagos)", link: "https://www.google.com/maps/search/O+Camilo+Lagos" },
                { time: "14:00", description: "ביקור ביקב Quinta do Francês (סיור וטעימות יין)", link: "https://www.google.com/maps/search/Quinta+do+Francês+Lagos" },
                { time: "16:00", description: "זמן חופשי ב-Lagos - טיול בעיר העתיקה או חוף", link: "https://www.google.com/maps/search/Lagos+old+town" },
                { time: "20:00", description: "ארוחת ערב ב-Restaurante Don Sebastião או A Tasca (טעימות + יין)", link: "https://www.google.com/maps/search/Restaurante+Don+Sebastião+Lagos" }
            ],
            surfSpot: "Playa de Lagos / Praia do Amado",
            wine: "Quinta do Francês",
            restaurant: "Restaurante Don Sebastião / A Tasca / O Camilo",
            accommodation: "Lagos",
            links: [
                { name: "Quinta do Francês", url: "https://www.google.com/maps/search/Quinta+do+Francês+Lagos" },
                { name: "Restaurante Don Sebastião", url: "https://www.google.com/maps/search/Restaurante+Don+Sebastião+Lagos" },
                { name: "A Tasca", url: "https://www.google.com/maps/search/A+Tasca+Lagos" },
                { name: "O Camilo", url: "https://www.google.com/maps/search/O+Camilo+Lagos" }
            ],
            images: [
                "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800",
                "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800"
            ]
        },
        {
            day: "יום רביעי, 19 בנובמבר",
            date: "2025-11-19",
            dayNumber: 7,
            activities: [
                { time: "08:00", description: "גלישה אחרונה - בחרו את הספוט האהוב עליכם", link: "https://www.google.com/maps/search/surf+spots+Lagos" },
                { time: "12:00", description: "מסלול Seven Hanging Valleys Trail (כ-30 דקות מ-Lagos) - הליכה במסלול החוף המדהים", link: "https://www.google.com/maps/search/Seven+Hanging+Valleys+Trail+Lagoa" },
                { time: "16:00", description: "ארוחה באזור Carvoeiro/Lagoa", link: "https://www.google.com/maps/search/restaurants+Carvoeiro" },
                { time: "17:30", description: "ביקור ביקב Quinta dos Vales (סיור וטעימות, 4.5⭐)", link: "https://www.google.com/maps/search/Quinta+dos+Vales+Estômbar" },
                { time: "20:00", description: "ארוחת ערב מיוחדת ב-Bon Bon (4.7⭐, Carvoeiro) - הזמינו מראש!", link: "https://www.google.com/maps/search/Bon+Bon+Carvoeiro" }
            ],
            surfSpot: "בחירה חופשית",
            natureSpot: "Seven Hanging Valleys Trail",
            wine: "Quinta dos Vales (4.5⭐)",
            restaurant: "Bon Bon (4.7⭐ - מומלץ מאוד!)",
            accommodation: "Lagos",
            links: [
                { name: "Seven Hanging Valleys Trail", url: "https://www.google.com/maps/search/Seven+Hanging+Valleys+Trail+Lagoa" },
                { name: "Bon Bon Restaurant", url: "https://www.google.com/maps/search/Bon+Bon+Carvoeiro" },
                { name: "Quinta dos Vales", url: "https://www.google.com/maps/search/Quinta+dos+Vales+Estômbar" }
            ],
            images: [
                "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800",
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

