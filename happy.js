document.addEventListener('DOMContentLoaded', () => {
    const skyshotElement = document.querySelector('.skyshot');
    const happyNewYearElement = document.querySelector('.happy-new-year');
    const yearElement = document.querySelector('.year-change');

    skyshotElement.addEventListener('animationend', () => {
        skyshotElement.style.display = 'none';
        happyNewYearElement.style.display = 'block';
        happyNewYearElement.classList.add('show-text');
        init(); // Initialize fireworks
        resize();
        requestAnimationFrame(render);

        // Apply blue-blink class to every second word
        const words = happyNewYearElement.innerHTML.split(' ');
        happyNewYearElement.innerHTML = words.map((word, index) => {
            return index % 2 === 1 ? `<span class="blue-blink">${word}</span>` : word;
        }).join(' ');
    });

    createStars(); // Initialize stars

    setTimeout(() => {
        yearElement.innerHTML = '202<span class="yellow">4</span>';
        setTimeout(() => {
            yearElement.innerHTML = '202<span class="green">5</span>';
            yearElement.classList.add('spark');
        }, 5000); // Increased timing for the year change
    }, 2000);
});

function createStars() {
    const starContainer = document.createElement('div');
    starContainer.classList.add('star-container');
    document.body.appendChild(starContainer);

    for (let i = 0; i < 10; i++) { // Increased number of stars
        const star = document.createElement('div');
        star.classList.add('star');
        starContainer.appendChild(star);
    }
}
