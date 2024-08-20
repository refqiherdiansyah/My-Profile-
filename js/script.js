// GSAP animation for the About section with a smoother effect
gsap.from("#about", {
    duration: 1.2,
    opacity: 0,
    y: -50,
    ease: "power3.out",
    delay: 0.2
});

// GSAP animation for experience items with enhanced easing and stagger effect
gsap.from(".experience-item", {
    scrollTrigger: {
        trigger: ".experience-section",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    duration: 1,
    opacity: 0,
    y: 50,
    stagger: 0.3,
    ease: "power3.out" // stronger easing for a more pronounced effect
});

// GSAP animation for blog items with a unique scale and fade-in effect
gsap.from(".blog-item", {
    scrollTrigger: {
        trigger: ".blog-section",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    duration: 1.2,
    opacity: 0,
    y: 50,
    scale: 0.9, // slight scale effect
    stagger: 0.2,
    ease: "power2.out"
});

// Toggle navigation menu on mobile
document.querySelector('.nav-toggle').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});

// Blog item content toggle
document.addEventListener('DOMContentLoaded', function() {
    const blogItems = document.querySelectorAll('.blog-item');

    blogItems.forEach(item => {
        const header = item.querySelector('h3');
        const content = item.querySelector('p');

        header.addEventListener('click', () => {
            // Toggle content visibility
            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });

        // Ensure the content is visible by default
        content.style.display = 'block';
    });
});


let slideIndex = 1;
showSlides(slideIndex);

// Next/Previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Show current slide
function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

