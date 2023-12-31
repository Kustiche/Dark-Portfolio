import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper', {
	speed: 300,
	loop: true,
	spaceBetween: 10,
	slidesPerView: 3,
	centeredSlides: true,

	autoplay: {
		delay: 4000,
	},

	navigation: {
		nextEl: '.swiper-btn--next',
		prevEl: '.swiper-btn--prev',
	},

	effect: 'slide',
});
