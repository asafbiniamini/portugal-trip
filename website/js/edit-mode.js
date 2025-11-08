// Live Edit Mode for Timeline
// This allows users to add, edit, and delete timeline items

let editModeEnabled = false;

// Initialize edit mode
function initEditMode() {
    // Add edit mode toggle button
    addEditModeToggle();
    
    // Load saved changes from localStorage
    loadSavedChanges();
    
    // Enable hover effects for timeline items
    enableHoverEffects();
    
    // Update timeline on page load to ensure correct order and line visibility
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(() => updateTimeline(), 300);
        });
    } else {
        setTimeout(() => updateTimeline(), 300);
    }
}

// Add edit mode toggle button
function addEditModeToggle() {
    const activitiesSection = document.querySelector('.activities-section');
    if (!activitiesSection) return;
    
    const toggleBtn = document.createElement('button');
    toggleBtn.id = 'editModeToggle';
    toggleBtn.className = 'edit-mode-toggle';
    toggleBtn.innerHTML = '✏️ מצב עריכה';
    toggleBtn.onclick = toggleEditMode;
    
    const h2 = activitiesSection.querySelector('h2');
    if (h2) {
        h2.insertAdjacentElement('afterend', toggleBtn);
    }
}

// Toggle edit mode
function toggleEditMode() {
    editModeEnabled = !editModeEnabled;
    const toggleBtn = document.getElementById('editModeToggle');
    
    if (editModeEnabled) {
        toggleBtn.innerHTML = '✅ סיים עריכה';
        toggleBtn.classList.add('active');
        enableEditMode();
    } else {
        toggleBtn.innerHTML = '✏️ מצב עריכה';
        toggleBtn.classList.remove('active');
        disableEditMode();
    }
}

// Enable edit mode
function enableEditMode() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        addEditControls(item);
    });
    
    // Add "Add new" button
    addNewItemButton();
    
    // Update timeline to ensure it's correct
    updateTimeline();
}

// Disable edit mode
function disableEditMode() {
    const editControls = document.querySelectorAll('.edit-controls');
    editControls.forEach(control => control.remove());
    
    const addBtn = document.getElementById('addNewItemBtn');
    if (addBtn) addBtn.remove();
}

// Add edit controls to timeline item
function addEditControls(item) {
    // Check if controls already exist
    if (item.querySelector('.edit-controls')) return;
    
    const controls = document.createElement('div');
    controls.className = 'edit-controls';
    controls.innerHTML = `
        <button class="edit-btn" onclick="editTimelineItem(this)" title="ערוך">✏️</button>
        <button class="delete-btn" onclick="deleteTimelineItem(this)" title="מחק">❌</button>
    `;
    
    const content = item.querySelector('.timeline-content');
    if (content) {
        content.appendChild(controls);
    }
}

// Enable hover effects
function enableHoverEffects() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            if (editModeEnabled) {
                this.classList.add('hover-edit');
            }
        });
        item.addEventListener('mouseleave', function() {
            this.classList.remove('hover-edit');
        });
    });
}

// Edit timeline item
function editTimelineItem(btn) {
    const item = btn.closest('.timeline-item');
    const content = item.querySelector('.timeline-content p');
    const link = item.querySelector('.timeline-link');
    const timeEl = item.querySelector('.timeline-time');
    
    const currentText = content.textContent;
    const currentTime = timeEl.textContent;
    const currentLink = link ? link.href : '';
    
    // Create edit form
    const editForm = document.createElement('div');
    editForm.className = 'edit-form';
    editForm.innerHTML = `
        <div class="edit-form-group">
            <label>שעה:</label>
            <input type="text" class="edit-time" value="${currentTime}" placeholder="08:00">
        </div>
        <div class="edit-form-group">
            <label>תיאור:</label>
            <textarea class="edit-description" rows="3">${currentText}</textarea>
        </div>
        <div class="edit-form-group">
            <label>קישור Google Maps (אופציונלי):</label>
            <input type="text" class="edit-link" value="${currentLink}" placeholder="https://www.google.com/maps/search/...">
        </div>
        <div class="edit-form-actions">
            <button onclick="saveEdit(this)" class="save-btn">💾 שמור</button>
            <button onclick="cancelEdit(this)" class="cancel-btn">❌ ביטול</button>
        </div>
    `;
    
    // Replace content with form
    const oldContent = content.parentElement;
    oldContent.style.display = 'none';
    oldContent.insertAdjacentElement('afterend', editForm);
}

// Save edit
function saveEdit(btn) {
    const form = btn.closest('.edit-form');
    const item = form.closest('.timeline-item');
    const oldContent = item.querySelector('.timeline-content');
    
    const newTime = form.querySelector('.edit-time').value.trim();
    const newDescription = form.querySelector('.edit-description').value.trim();
    const newLink = form.querySelector('.edit-link').value.trim();
    
    if (!newTime || !newDescription) {
        alert('שעה ותיאור הם שדות חובה!');
        return;
    }
    
    // Update time
    const timeEl = item.querySelector('.timeline-time');
    timeEl.textContent = newTime;
    
    // Update description
    const descEl = oldContent.querySelector('p');
    descEl.textContent = newDescription;
    
    // Update or create link
    let linkEl = oldContent.querySelector('.timeline-link');
    if (newLink) {
        if (!linkEl) {
            linkEl = document.createElement('a');
            linkEl.className = 'timeline-link';
            linkEl.target = '_blank';
            oldContent.appendChild(linkEl);
        }
        linkEl.href = newLink;
        linkEl.textContent = 'פתח ב-Google Maps';
    } else if (linkEl) {
        linkEl.remove();
    }
    
    // Show content, remove form
    oldContent.style.display = 'block';
    form.remove();
    
    // Update timeline
    updateTimeline();
    
    // Save to localStorage
    saveToLocalStorage();
}

// Cancel edit
function cancelEdit(btn) {
    const form = btn.closest('.edit-form');
    const item = form.closest('.timeline-item');
    const oldContent = item.querySelector('.timeline-content');
    
    oldContent.style.display = 'block';
    form.remove();
}

// Delete timeline item
function deleteTimelineItem(btn) {
    if (!confirm('האם אתה בטוח שברצונך למחוק את הפעילות הזו?')) {
        return;
    }
    
    const item = btn.closest('.timeline-item');
    item.style.transition = 'opacity 0.3s, transform 0.3s';
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    
    setTimeout(() => {
        item.remove();
        updateTimeline();
        saveToLocalStorage();
    }, 300);
}

// Add new item button
function addNewItemButton() {
    const container = document.querySelector('.timeline-container');
    if (!container) return;
    
    if (document.getElementById('addNewItemBtn')) return;
    
    const addBtn = document.createElement('button');
    addBtn.id = 'addNewItemBtn';
    addBtn.className = 'add-new-item-btn';
    addBtn.innerHTML = '+ הוסף פעילות חדשה';
    addBtn.onclick = addNewTimelineItem;
    
    container.appendChild(addBtn);
}

// Add new timeline item
function addNewTimelineItem() {
    const container = document.querySelector('.timeline-container');
    if (!container) return;
    
    // Get current items to suggest next time
    const existingItems = Array.from(document.querySelectorAll('.timeline-time'));
    const lastTime = existingItems.length > 0 ? existingItems[existingItems.length - 1].textContent : '08:00';
    
    // Create new item
    const newItem = document.createElement('div');
    newItem.className = 'timeline-item';
    newItem.innerHTML = `
        <div class="timeline-dot"></div>
        <div class="timeline-time">${lastTime}</div>
        <div class="timeline-content">
            <p>פעילות חדשה</p>
        </div>
    `;
    
    // Add edit controls
    addEditControls(newItem);
    
    // Insert at end
    const timelineLine = container.querySelector('.timeline-line');
    timelineLine.insertAdjacentElement('afterend', newItem);
    
    // Auto-edit the new item
    const editBtn = newItem.querySelector('.edit-btn');
    if (editBtn) {
        editTimelineItem(editBtn);
    }
    
    // Update timeline
    updateTimeline();
}

// Update timeline (reorder items, update line height)
function updateTimeline() {
    const container = document.querySelector('.timeline-container');
    if (!container) return;
    
    const items = Array.from(container.querySelectorAll('.timeline-item'));
    
    if (items.length === 0) {
        // No items - hide timeline line
        const timelineLine = container.querySelector('.timeline-line');
        if (timelineLine) timelineLine.style.display = 'none';
        return;
    }
    
    // Show timeline line if hidden
    const timelineLine = container.querySelector('.timeline-line');
    if (timelineLine) timelineLine.style.display = 'block';
    
    // Sort by time (convert HH:MM to minutes for proper sorting)
    // Sort ascending: 08:00 first (top), 20:00 last (bottom)
    items.sort((a, b) => {
        const timeA = a.querySelector('.timeline-time')?.textContent?.trim() || '';
        const timeB = b.querySelector('.timeline-time')?.textContent?.trim() || '';
        
        // Convert HH:MM to minutes for comparison
        const parseTime = (timeStr) => {
            const parts = timeStr.split(':');
            if (parts.length !== 2) return 0;
            const hours = parseInt(parts[0]) || 0;
            const minutes = parseInt(parts[1]) || 0;
            return hours * 60 + minutes;
        };
        
        return parseTime(timeA) - parseTime(timeB);
    });
    
    // Reorder in DOM - insert after timeline line (so earliest time is first)
    const timelineContainer = timelineLine.parentElement;
    items.forEach(item => {
        timelineContainer.appendChild(item);
    });
    
    // Move timeline line to the beginning
    timelineContainer.insertBefore(timelineLine, timelineContainer.firstChild);
    
    // Update timeline line position and height after a short delay
    setTimeout(() => {
        if (items.length > 0) {
            const firstItem = items[0];
            const lastItem = items[items.length - 1];
            const firstDot = firstItem.querySelector('.timeline-dot');
            const lastDot = lastItem.querySelector('.timeline-dot');
            
            if (firstDot && lastDot && timelineLine) {
                // Wait for layout to complete
                requestAnimationFrame(() => {
                    const firstDotRect = firstDot.getBoundingClientRect();
                    const lastDotRect = lastDot.getBoundingClientRect();
                    const containerRect = container.getBoundingClientRect();
                    
                    // Position line to start from first dot center
                    const startY = firstDotRect.top - containerRect.top + (firstDotRect.height / 2);
                    const endY = lastDotRect.top - containerRect.top + (lastDotRect.height / 2);
                    
                    // Ensure line is visible
                    timelineLine.style.display = 'block';
                    timelineLine.style.top = `${startY}px`;
                    timelineLine.style.height = `${Math.max(endY - startY, 50)}px`;
                    timelineLine.style.bottom = 'auto';
                });
            }
        }
    }, 200);
}

// Save to Firebase (and localStorage as backup)
function saveToLocalStorage() {
    const pagePath = window.location.pathname;
    const pageName = pagePath.split('/').pop() || 'index.html';
    
    const items = Array.from(document.querySelectorAll('.timeline-item')).map(item => {
        const time = item.querySelector('.timeline-time').textContent;
        const description = item.querySelector('.timeline-content p').textContent;
        const linkEl = item.querySelector('.timeline-link');
        const link = linkEl ? linkEl.href : '';
        
        return { time, description, link };
    });
    
    // Save to localStorage as backup
    localStorage.setItem(`timeline_${pageName}`, JSON.stringify(items));
    
    // Save to Firebase for real-time sharing
    if (typeof db !== 'undefined' && db) {
        db.collection('timeline').doc(pageName).set({
            items: items,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        }).catch(error => {
            console.error('Error saving to Firebase:', error);
        });
    }
}

// Load from Firebase (with localStorage fallback)
function loadSavedChanges() {
    const pagePath = window.location.pathname;
    const pageName = pagePath.split('/').pop() || 'index.html';
    
    // Try to load from Firebase first
    if (typeof db !== 'undefined' && db) {
        db.collection('timeline').doc(pageName).onSnapshot((doc) => {
            if (doc.exists()) {
                const data = doc.data();
                if (data.items && data.items.length > 0) {
                    renderTimelineItems(data.items);
                    return;
                }
            }
            // If Firebase doesn't have data, try localStorage
            loadFromLocalStorage(pageName);
        }, (error) => {
            console.error('Error loading from Firebase:', error);
            // Fallback to localStorage
            loadFromLocalStorage(pageName);
        });
    } else {
        // Firebase not available, use localStorage
        loadFromLocalStorage(pageName);
    }
}

// Load from localStorage (fallback)
function loadFromLocalStorage(pageName) {
    const saved = localStorage.getItem(`timeline_${pageName}`);
    if (!saved) return;
    
    try {
        const items = JSON.parse(saved);
        renderTimelineItems(items);
    } catch (e) {
        console.error('Error loading from localStorage:', e);
    }
}

// Render timeline items
function renderTimelineItems(items) {
    const container = document.querySelector('.timeline-container');
    if (!container) return;
    
    // Clear existing items
    const existingItems = container.querySelectorAll('.timeline-item');
    existingItems.forEach(item => item.remove());
    
    // Add saved items
    items.forEach(itemData => {
        const newItem = document.createElement('div');
        newItem.className = 'timeline-item';
        
        let linkHtml = '';
        if (itemData.link) {
            linkHtml = `<a href="${itemData.link}" target="_blank" class="timeline-link">פתח ב-Google Maps</a>`;
        }
        
        newItem.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-time">${itemData.time}</div>
            <div class="timeline-content">
                <p>${itemData.description}</p>
                ${linkHtml}
            </div>
        `;
        
        const timelineLine = container.querySelector('.timeline-line');
        timelineLine.insertAdjacentElement('afterend', newItem);
    });
    
    // Update timeline after loading
    setTimeout(() => {
        updateTimeline();
    }, 200);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initEditMode();
    
    // Update timeline after page loads (for initial display)
    setTimeout(() => {
        updateTimeline();
    }, 300);
});

