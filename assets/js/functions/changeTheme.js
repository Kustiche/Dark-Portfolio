const themeBtn = document.querySelector('.sidebar__switch');
const namesTheme = document.querySelectorAll('.sidebar__text');

function changeTheme() {
	document.body.classList.toggle('light-theme');

	namesTheme.forEach((name) => {
		const isNameActive = name.className === 'sidebar__text sidebar__text--active';

		if (isNameActive) {
			name.classList.remove('sidebar__text--active');
		} else {
			name.classList.add('sidebar__text--active');
		}
	});
}

themeBtn.addEventListener('click', () => {
	changeTheme();
});
