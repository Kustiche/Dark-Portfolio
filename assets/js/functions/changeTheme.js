const themeBtn = document.querySelector('.header__switch');
const namesTheme = document.querySelectorAll('.header__text');

function changeTheme() {
	document.body.classList.toggle('light-theme');

	namesTheme.forEach((name) => {
		const isNameActive = name.className === 'header__text header__text--active';

		if (isNameActive) {
			name.classList.remove('header__text--active');
		} else {
			name.classList.add('header__text--active');
		}
	});
}

themeBtn.addEventListener('click', () => {
	changeTheme();
});
