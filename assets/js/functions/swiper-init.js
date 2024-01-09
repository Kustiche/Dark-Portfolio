import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper', {
	speed: 300,
	loop: true,
	spaceBetween: 8,
	slidesPerView: 2,
	centeredSlides: true,

	// autoplay: {
	// 	delay: 4000,
	// },

	navigation: {
		nextEl: '.swiper-btn--next',
		prevEl: '.swiper-btn--prev',
	},
	effect: 'slide',

	breakpoints: {
		1024: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
	},
});
