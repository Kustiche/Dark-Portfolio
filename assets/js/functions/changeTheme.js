const themeBtn = document.querySelector('.sidebar__switch');

themeBtn.addEventListener('click', () => {
	document.body.classList.toggle('light-theme');
});
