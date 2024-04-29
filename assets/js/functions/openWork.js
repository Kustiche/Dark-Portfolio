const cards = document.querySelectorAll('.works__card');
const siteContainer = document.querySelector('.site-container');

function removeClassActive() {
	cards.forEach((card) => {
		card.classList.remove('active');
	});
}

function addClassActive(e) {
	const card = e.target.closest('.works__card');
	const isCard = card !== null;

	if (isCard) {
		removeClassActive();
		card.classList.add('active');
	} else {
		removeClassActive();
	}
}

siteContainer.addEventListener('click', (e) => {
	addClassActive(e);
});
