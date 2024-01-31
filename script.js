// For Illumination
const mouseEvent = document.documentElement;

mouseEvent.addEventListener("mousemove", (e) => {
    mouseEvent.style.setProperty('--x', e.clientX + 'px');
    mouseEvent.style.setProperty('--y', e.clientY + 'px');
})

// Get the card and helloText elements
const cardContainer = document.getElementById('cardContainer');
const helloTextContainer = document.getElementById('helloTextContainer');

// Add event listener for mouseover
cardContainer.addEventListener('mouseover', () => {
    helloTextContainer.style.opacity = '1';
});

// Add event listener for mouseout
cardContainer.addEventListener('mouseout', () => {
    helloTextContainer.style.opacity = '0';
});