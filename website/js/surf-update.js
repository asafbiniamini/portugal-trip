// Surf Forecast Update Functionality
// This file handles updating surf forecasts from external APIs

// Note: Most surf forecast APIs require API keys and may have usage limits
// Here are the options:

// Option 1: Magic Seaweed API (requires API key)
// Option 2: Surfline API (requires API key)
// Option 3: Embed widget from surf-forecast.com
// Option 4: Manual update button that opens external site

const surfUpdateOptions = {
    // Option 1: Magic Seaweed Widget (easiest - no API key needed)
    magicSeaweed: {
        enabled: true,
        method: 'embed', // Use embed widget instead of API
        spots: {
            'Arrifana': 'https://magicseaweed.com/Arrifana-Surf-Report/1234/',
            'Tonel': 'https://magicseaweed.com/Tonel-Surf-Report/1235/',
            'Lagos': 'https://magicseaweed.com/Lagos-Surf-Report/1236/',
            'Praia do Amado': 'https://magicseaweed.com/Praia-do-Amado-Surf-Report/1237/'
        }
    },
    
    // Option 2: Surfline API (requires free API key)
    surfline: {
        enabled: false,
        apiKey: 'YOUR_API_KEY_HERE', // Get from https://www.surfline.com/surf-news/surfline-api-access/43246
        spots: {
            'Arrifana': '5842041f4e65fad6a7708b87',
            'Tonel': '5842041f4e65fad6a7708b88',
            'Lagos': '5842041f4e65fad6a7708b89',
            'Praia do Amado': '5842041f4e65fad6a7708b90'
        }
    }
};

// Update button functionality
function addUpdateButton() {
    const container = document.getElementById('surfSpotsContainer');
    if (!container) return;
    
    // Add update button at the top
    const updateSection = document.createElement('div');
    updateSection.className = 'surf-update-section';
    updateSection.innerHTML = `
        <div class="update-button-container">
            <button id="updateForecastBtn" class="update-forecast-btn" onclick="updateSurfForecasts()">
                🔄 עדכן תחזיות גלים
            </button>
            <p class="update-note">לחיצה על הכפתור תפתח את תחזיות הגלים המעודכנות באתרים חיצוניים</p>
        </div>
    `;
    container.insertBefore(updateSection, container.firstChild);
}

// Update forecasts function
function updateSurfForecasts() {
    // Show loading message
    showUpdateMessage('פותח תחזיות גלים מעודכנות...');
    
    // Open Magic Seaweed search for Algarve region (covers all spots)
    // This will work from anywhere - local or published website!
    const mainUrl = 'https://magicseaweed.com/Algarve-Surf-Forecast/12/';
    window.open(mainUrl, '_blank');
    
    // Also open individual searches for each spot
    const spots = ['Arrifana', 'Monte Clérigo', 'Amoreira', 'Beliche', 'Zavial', 'Cordoama', 'Praia do Amado', 'Tonel', 'Lagos'];
    
    // Open in sequence (with small delay to avoid popup blocker)
    spots.forEach((spot, index) => {
        setTimeout(() => {
            const url = getMagicSeaweedUrl(spot);
            if (url) {
                window.open(url, '_blank');
            }
        }, index * 500); // 500ms delay between each
    });
    
    // Show success message
    setTimeout(() => {
        showUpdateMessage('✅ פתחתי את תחזיות הגלים המעודכנות בחלונות חדשים. בדקו את המידע באתרים החיצוניים.');
    }, 1000);
}

function getMagicSeaweedUrl(spotName) {
    // URLs to Magic Seaweed search pages - these will work from anywhere!
    const spotMap = {
        'Arrifana': 'https://magicseaweed.com/search/?q=Arrifana+Aljezur',
        'Monte Clérigo': 'https://magicseaweed.com/search/?q=Monte+Clérigo+Aljezur',
        'Amoreira': 'https://magicseaweed.com/search/?q=Praia+do+Amoreira+Aljezur',
        'Beliche': 'https://magicseaweed.com/search/?q=Beliche+Sagres',
        'Zavial': 'https://magicseaweed.com/search/?q=Zavial+Sagres',
        'Cordoama': 'https://magicseaweed.com/search/?q=Cordoama+Portugal',
        'Praia do Amado': 'https://magicseaweed.com/search/?q=Praia+do+Amado+Carrapateira',
        'Tonel': 'https://magicseaweed.com/search/?q=Tonel+Sagres',
        'Lagos': 'https://magicseaweed.com/search/?q=Lagos+Portugal'
    };
    return spotMap[spotName] || 'https://magicseaweed.com/Algarve-Surf-Forecast/12/';
}

function showUpdateMessage(message) {
    // Create or update message element
    let messageEl = document.getElementById('updateMessage');
    if (!messageEl) {
        messageEl = document.createElement('div');
        messageEl.id = 'updateMessage';
        messageEl.className = 'update-message';
        document.querySelector('.surf-update-section').appendChild(messageEl);
    }
    
    messageEl.textContent = message;
    messageEl.style.display = 'block';
    
    // Hide after 5 seconds
    setTimeout(() => {
        messageEl.style.display = 'none';
    }, 5000);
}

// Alternative: Fetch from API (requires API key)
async function fetchSurflineForecast(spotId) {
    // This requires a Surfline API key
    // Example implementation:
    /*
    try {
        const response = await fetch(
            `https://services.surfline.com/kbfe/spots/forecasts/wave?spotId=${spotId}&days=1&intervalHours=1`,
            {
                headers: {
                    'Accept': 'application/json'
                }
            }
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching forecast:', error);
        return null;
    }
    */
    return null;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    addUpdateButton();
});

