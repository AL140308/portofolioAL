const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', ()=>{
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}
window.addEventListener('scroll', function() {
    const aboutMeSection = document.querySelector('.about-photo');
    const sectionPosition = aboutMeSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (sectionPosition < screenPosition) {
        aboutMeSection.classList.add('active');
    } else {
        aboutMeSection.classList.remove('active');
    }
});
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll animation
function handleScroll() {
    const items = document.querySelectorAll('.education-item');
    const triggerPoint = window.innerHeight * 0.8; // Trigger animation when 80% of the viewport is visible

    items.forEach(item => {
        const itemPosition = item.getBoundingClientRect().top; // Get position of the item relative to viewport
        if (itemPosition < triggerPoint) {
            item.classList.add('visible'); // Add visible class to trigger animation
        } else {
            item.classList.remove('visible'); // Remove visible class when out of view
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);
window.addEventListener('scroll', function() {
    const aboutMeSection = document.querySelector('.about-photo2');
    const sectionPosition = aboutMeSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (sectionPosition < screenPosition) {
        aboutMeSection.classList.add('active');
    } else {
        aboutMeSection.classList.remove('active');
    }
});
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}