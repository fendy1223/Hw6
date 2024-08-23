import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper1 = new Swiper(".swiper1", {
    modules: [Navigation, Pagination],
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 24,
    navigation: {
        nextEl: ".swiper-next1",
        prevEl: ".swiper-prev1"
    },
    pagination: {
        el: ".swiper-pagination1",
        type: "fraction"
    },
    breakpoints: {
        992: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 48,
        },
    },
});

const swiper2 = new Swiper(".swiper2", {
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 24,
});

const swiper3 = new Swiper(".swiper3", {
    modules: [Navigation],
    loop: true,
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 24,
    navigation: {
        nextEl: ".swiper-next3",
        prevEl: ".swiper-prev3"
    },
});
