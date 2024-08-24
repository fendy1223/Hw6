import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

document.addEventListener('DOMContentLoaded', function () {
    const animatedHeading = document.getElementById('animate__bounce');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animatedHeading.classList.add('animate__animated', 'animate__bounce');
            } else {
                animatedHeading.classList.remove('animate__animated', 'animate__bounce');
            }
        });
    }, {
        threshold: 0.1 // 當元素進入視窗 10% 時觸發
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
        threshold: 0.1 // 當元素進入視窗 10% 時觸發
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
        threshold: 0.1 // 當元素進入視窗 10% 時觸發
    });

    observer.observe(animatedHeading);
});