import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper', {
	speed: 500,
	loop: true,
	spaceBetween: 8,
	slidesPerView: 'auto',
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
			spaceBetween: 20,
		},
	},
});
