import Swiper from 'swiper/bundle';

const screenWidth = window.screen.width;

const swiper = new Swiper('.swiper', {
	speed: 300,
	loop: true,
	spaceBetween: screenWidth <= 1024 ? 8 : 20,
	slidesPerView: screenWidth <= 1024 ? 2 : 3,
	centeredSlides: true,

	// autoplay: {
	// 	delay: 4000,
	// },

	navigation: {
		nextEl: '.swiper-btn--next',
		prevEl: '.swiper-btn--prev',
	},

	effect: 'slide',
});
