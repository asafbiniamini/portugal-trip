// Surf Spots Data
const surfSpotsData = [
    {
        spot: "Arrifana (Aljezur)",
        date_snapshot: "2025-11-08",
        predicted_for_2025_11_13: "Largest open-ocean swell predicted on Thu 13 Nov — up to ~3.5 m in nearby time windows",
        level: "Intermediate-Advanced",
        best_time: "Morning",
        location: "Aljezur, Costa Vicentina",
        swell_quality: "Excellent (3.5m)",
        recommendation: "⭐⭐⭐⭐⭐ מומלץ מאוד ל-13 בנובמבר - הגלים הכי טובים!",
        map_url: "https://www.google.com/maps/search/Arrifana+Beach+Aljezur",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
    },
    {
        spot: "Tonel (Sagres)",
        date_snapshot: "2025-11-08",
        predicted_for_2025_11_13: "Significant swell windows with strong swells and long periods",
        level: "All levels",
        best_time: "Morning-Early afternoon",
        location: "Sagres, Algarve",
        swell_quality: "Very Good (strong swells, long periods)",
        recommendation: "⭐⭐⭐⭐ מומלץ - גלים חזקים עם תקופות ארוכות",
        map_url: "https://www.google.com/maps/search/Tonel+Beach+Sagres",
        image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800"
    },
    {
        spot: "Playa de Lagos (Lagos)",
        date_snapshot: "2025-11-08",
        predicted_for_2025_11_13: "Primary swell ~0.4 m (1.3 ft) @ 10s; Secondary ~0.6 m @ 6s; glassy wind as swell arrives (evening)",
        level: "Beginner-Intermediate",
        best_time: "Evening",
        location: "Lagos, Algarve",
        swell_quality: "Moderate (0.4-0.6m)",
        recommendation: "⭐⭐⭐ טוב למתחילים - גלים קטנים יותר, רוח טובה בערב",
        map_url: "https://www.google.com/maps/search/Playa+de+Lagos",
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800"
    },
    {
        spot: "Praia do Amado (Carrapateira)",
        date_snapshot: "2025-11-08",
        predicted_for_2025_11_13: "Consistent waves, good for all levels",
        level: "All levels",
        best_time: "Morning",
        location: "Carrapateira, Costa Vicentina",
        swell_quality: "Consistent",
        recommendation: "⭐⭐⭐⭐ טוב לכל הרמות - גלים עקביים",
        map_url: "https://www.google.com/maps/search/Praia+do+Amado+Carrapateira",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
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
                        <strong>תחזית ל-13 בנובמבר:</strong>
                        <p>${spot.predicted_for_2025_11_13}</p>
                    </div>
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

