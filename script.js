document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', () => {
        const boxId = box.id;
        switch(boxId) {
            case 'weatherBox':
                window.location.href = 'weather.html';
                break;
            case 'tempBox':
                window.location.href = 'temperature.html';
                break;
            case 'humanBox':
                window.location.href = 'wind.html';
                break;
        }
    });
});

// Swipe handling for hourly and weekly views
let touchStartX = 0;
let touchEndX = 0;
let currentView = 'main'; // Can be 'main', 'hourly', or 'weekly'

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchEndX - touchStartX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe right - go back
            navigateView('back');
        } else {
            // Swipe left - go forward
            navigateView('forward');
        }
    }
}

function navigateView(direction) {
    const views = ['main', 'hourly', 'weekly'];
    const currentIndex = views.indexOf(currentView);
    
    if (direction === 'forward' && currentIndex < views.length - 1) {
        window.location.href = `${views[currentIndex + 1]}.html`;
    } else if (direction === 'back' && currentIndex > 0) {
        window.location.href = `${views[currentIndex - 1]}.html`;
    }
}

// Handle back button clicks
document.querySelector('.back-button')?.addEventListener('click', () => {
    window.location.href = 'index.html';
});

// Add this to the existing script.js file
document.querySelector('.weekly-button').addEventListener('click', () => {
    window.location.href = 'forecast.html';
});