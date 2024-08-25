import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'center-bottom', // defines which position of the element regarding to window should trigger the animation

});


document.addEventListener('DOMContentLoaded', function () {
    const animatedHeading = document.getElementById('animate__bounce');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animatedHeading.classList.add('animate__animated', 'animate__bounce',);
            } else {
                animatedHeading.classList.remove('animate__animated', 'animate__bounce');
            }
        });
    }, {
        threshold: 0.1
    });

    observer.observe(animatedHeading);
});

document.addEventListener('DOMContentLoaded', function () {
    const animatedHeading = document.getElementById('animated-heartBeat');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animatedHeading.classList.add('animate__animated', 'animate__heartBeat');
            } else {
                animatedHeading.classList.remove('animate__animated', 'animate__heartBeat');
            }
        });
    }, {
        threshold: 0.1
    });

    observer.observe(animatedHeading);
});

document.addEventListener('DOMContentLoaded', function () {
    const animatedHeading = document.getElementById('animate__bounce-footer');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animatedHeading.classList.add('animate__animated', 'animate__bounce');
            } else {
                animatedHeading.classList.remove('animate__animated', 'animate__bounce');
            }
        });
    }, {
        threshold: 0.1
    });

    observer.observe(animatedHeading);
});