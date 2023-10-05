const navbar = document.querySelector('.navbar');
const toggleButton = document.querySelector('.toggle-menu');

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('active')
})

// carusel
const scroller = document.querySelector('.scroller');

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = document.querySelector('.scroller__inner');
    const scrollerContent = Array.from(scrollerInner.children);
    
    scrollerContent.forEach(item => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
        scrollerInner.appendChild(duplicatedItem);
    })
}