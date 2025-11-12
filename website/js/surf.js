// Surf Spots Data - Algarve (דרום פורטוגל)
const surfSpotsData = [
    {
        spot: "Arrifana (Aljezur)",
        date_snapshot: "2025-11-15",
        predicted_for_2025_11_13: "הספוט המפורסם ביותר באזור Aljezur. מוגן על ידי צוקים גדולים, מה שמגן על הגלים כשיש רוח. גלים עקביים וטובים.",
        level: "Intermediate-Advanced",
        best_time: "Morning",
        location: "Aljezur, Costa Vicentina",
        swell_quality: "Excellent - מוגן מרוח",
        recommendation: "⭐⭐⭐⭐⭐ הספוט הטוב ביותר ב-Aljezur! מוגן מרוח, גלים עקביים",
        map_url: "https://www.google.com/maps/search/Arrifana+Beach+Aljezur",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
        description: "מפרץ מוגן על ידי צוקים גדולים. גלים עקביים, מוגן מרוח. כמה דקות מ-Arrifana תמצאו Monte Clérigo ו-Praia do Amoreira."
    },
    {
        spot: "Monte Clérigo (Aljezur)",
        date_snapshot: "2025-11-15",
        predicted_for_2025_11_13: "חוף יפה בין שני גבעות. נדיר לראות אותו צפוף מדי. גלים טובים לעיתים קרובות.",
        level: "Intermediate",
        best_time: "Morning-Afternoon",
        location: "Aljezur, Costa Vicentina",
        swell_quality: "Good - פחות צפוף",
        recommendation: "⭐⭐⭐⭐ חוף יפה, פחות צפוף מ-Arrifana",
        map_url: "https://www.google.com/maps/search/Monte+Clérigo+Beach",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
        description: "חוף יפה בין שני גבעות. זרמים ואבנים במים הופכים אותו לפחות מתאים למתחילים מ-Arrifana."
    },
    {
        spot: "Praia do Amoreira (Aljezur)",
        date_snapshot: "2025-11-15",
        predicted_for_2025_11_13: "חוף חול רחב עם ליין-אפ ריק יחסית. שרטוני החול משתנים, מה שהופך את הספוט לפחות עקבי. כדאי לבדוק מדי פעם.",
        level: "All levels",
        best_time: "Morning-Afternoon",
        location: "Aljezur, Costa Vicentina",
        swell_quality: "Variable - כדאי לבדוק",
        recommendation: "⭐⭐⭐ חוף רחב, פחות צפוף, גלים משתנים",
        map_url: "https://www.google.com/maps/search/Praia+do+Amoreira",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
        description: "חוף רחב בתוך פארק לאומי. שרטוני החול משתנים, מה שהופך את הספוט לפחות עקבי, אבל יכול לייצר גלים טובים מאוד."
    },
    {
        spot: "Beliche (Sagres)",
        date_snapshot: "2025-11-15",
        predicted_for_2025_11_13: "מוגן יחסית מרוח צפונית (Nortada). גלים A-frame שנוטים לשבור חלולים. לא מתאים למתחילים בגלל זרמים.",
        level: "Intermediate-Advanced",
        best_time: "Morning-Afternoon",
        location: "Sagres, Algarve",
        swell_quality: "Very Good - מוגן מרוח",
        recommendation: "⭐⭐⭐⭐ מוגן מרוח, גלים חלולים, לא למתחילים",
        map_url: "https://www.google.com/maps/search/Beliche+Beach+Sagres",
        image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800",
        description: "מוגן יחסית מרוח צפונית. גלים A-frame חלולים. גם טוב ל-bodyboarders. לא מתאים למתחילים בגלל זרמים."
    },
    {
        spot: "Zavial (Sagres)",
        date_snapshot: "2025-11-15",
        predicted_for_2025_11_13: "פוטנציאל לייצר חלק מהגלים הטובים ביותר באזור. צריך סוואל גדול יותר ממערב או דרום. גלים מהירים וחלולים.",
        level: "Advanced",
        best_time: "Morning",
        location: "Northeast of Sagres, Algarve",
        swell_quality: "Excellent - עם סוואל גדול",
        recommendation: "⭐⭐⭐⭐⭐ גלים מעולים עם סוואל גדול - יכול להיות צפוף!",
        map_url: "https://www.google.com/maps/search/Zavial+Beach+Sagres",
        image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800",
        description: "כמה קילומטרים צפון-מזרחית מ-Sagres. גלים מהירים וחלולים. כשהתנאים טובים, יכול להיות צפוף עם מקומיים. שימו לב לכללי הגלישה!"
    },
    {
        spot: "Cordoama (West Coast)",
        date_snapshot: "2025-11-15",
        predicted_for_2025_11_13: "חוף ציורי! גלים נוטים לשבור ב-A-frame קלאסי ועקבי למדי. גולשים ברמות שונות יכולים ליהנות כאן.",
        level: "All levels",
        best_time: "Morning-Afternoon",
        location: "West Coast, Algarve",
        swell_quality: "Consistent - A-frame",
        recommendation: "⭐⭐⭐⭐ גלים עקביים, מתאים לכל הרמות",
        map_url: "https://www.google.com/maps/search/Cordoama+Beach",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
        description: "חוף ציורי. גלים A-frame קלאסיים ועקביים. מתאים לגולשים ברמות שונות."
    },
    {
        spot: "Praia do Amado (Carrapateira)",
        date_snapshot: "2025-11-15",
        predicted_for_2025_11_13: "המקום להיות - לא רק למתחילים! גם למטיילים שרוצים קפה או בירה תוך צפייה בשקיעה. גלים גם לבינוניים.",
        level: "All levels",
        best_time: "Morning",
        location: "Carrapateira, Costa Vicentina",
        swell_quality: "Consistent - טוב למתחילים ובינוניים",
        recommendation: "⭐⭐⭐⭐ מושלם למתחילים, גם בינוניים ימצאו גלים",
        map_url: "https://www.google.com/maps/search/Praia+do+Amado+Carrapateira",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
        description: "מושלם למתחילים אבל גם בינוניים ימצאו גלים. מקום נהדר לשקיעה עם קפה או בירה."
    },
    {
        spot: "Tonel (Sagres)",
        date_snapshot: "2025-11-15",
        predicted_for_2025_11_13: "עובד עם סוואל גדול מדרום. גלים נוטים לסגור, אז צריך קצת מזל. לא תמיד עובד.",
        level: "Intermediate-Advanced",
        best_time: "Morning-Early afternoon",
        location: "Sagres, Algarve",
        swell_quality: "Variable - צריך סוואל גדול מדרום",
        recommendation: "⭐⭐⭐ עובד רק עם סוואל גדול מדרום",
        map_url: "https://www.google.com/maps/search/Tonel+Beach+Sagres",
        image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800",
        description: "עובד עם סוואל גדול מדרום. גלים נוטים לסגור, אז צריך קצת מזל."
    },
    {
        spot: "Playa de Lagos (Lagos)",
        date_snapshot: "2025-11-15",
        predicted_for_2025_11_13: "גלים קטנים יותר, טוב למתחילים. רוח טובה בערב.",
        level: "Beginner-Intermediate",
        best_time: "Evening",
        location: "Lagos, Algarve",
        swell_quality: "Moderate (0.4-0.6m)",
        recommendation: "⭐⭐⭐ טוב למתחילים - גלים קטנים יותר",
        map_url: "https://www.google.com/maps/search/Playa+de+Lagos",
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
        description: "גלים קטנים יותר, מושלם למתחילים. רוח טובה בערב."
    }
];

// Load surf spots
function loadSurfSpots() {
    const container = document.getElementById('surfSpotsContainer');
    if (!container) return;

    surfSpotsData.forEach((spot, index) => {
        const spotCard = document.createElement('div');
        spotCard.className = 'surf-spot-card';
        spotCard.innerHTML = `
            <div class="surf-spot-header" onclick="toggleForecast(${index})">
                <div class="surf-spot-info">
                    <h2>${spot.spot}</h2>
                    <p class="surf-location">📍 ${spot.location}</p>
                    <div class="surf-badges">
                        <span class="surf-badge level-${spot.level.toLowerCase().replace(/\s+/g, '-')}">${spot.level}</span>
                        <span class="surf-badge time-badge">🕐 ${spot.best_time}</span>
                        <span class="surf-badge quality-badge">${spot.swell_quality}</span>
                    </div>
                </div>
                <div class="surf-spot-image">
                    <img src="${spot.image}" alt="${spot.spot}">
                </div>
                <div class="toggle-icon">▼</div>
            </div>
            <div class="surf-forecast-details" id="forecast-${index}" style="display: none;">
                <div class="forecast-content">
                    <h3>🌊 תחזית גלים</h3>
                    <div class="forecast-item">
                        <strong>מידע על הספוט:</strong>
                        <p>${spot.predicted_for_2025_11_13}</p>
                    </div>
                    ${spot.description ? `<div class="forecast-item"><strong>תיאור:</strong><p>${spot.description}</p></div>` : ''}
                    <div class="forecast-item">
                        <strong>איכות הגלים:</strong>
                        <p>${spot.swell_quality}</p>
                    </div>
                    <div class="forecast-item">
                        <strong>המלצה:</strong>
                        <p class="recommendation-text">${spot.recommendation}</p>
                    </div>
                    <div class="forecast-item">
                        <strong>תאריך עדכון אחרון:</strong>
                        <p>${spot.date_snapshot}</p>
                    </div>
                    <div class="forecast-note">
                        <p>💡 <strong>טיפ:</strong> תחזיות גלים משתנות - מומלץ לבדוק תחזית מעודכנת ב-<a href="https://www.surf-forecast.com" target="_blank">surf-forecast.com</a> או <a href="https://www.magicseaweed.com" target="_blank">magicseaweed.com</a></p>
                    </div>
                    <div class="forecast-links">
                        <a href="${spot.map_url}" target="_blank" class="link-item">📍 פתח ב-Google Maps</a>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(spotCard);
    });
}

// Toggle forecast visibility
function toggleForecast(index) {
    const forecast = document.getElementById(`forecast-${index}`);
    const card = forecast.closest('.surf-spot-card');
    const toggleIcon = card.querySelector('.toggle-icon');
    
    if (forecast.style.display === 'none') {
        forecast.style.display = 'block';
        toggleIcon.textContent = '▲';
        card.classList.add('expanded');
    } else {
        forecast.style.display = 'none';
        toggleIcon.textContent = '▼';
        card.classList.remove('expanded');
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadSurfSpots();
});

