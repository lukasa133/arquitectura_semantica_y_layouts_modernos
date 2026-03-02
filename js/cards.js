const cards = Array.from(document.querySelectorAll('.card'));

function closeCard(card) {
  const button = card.querySelector('.card-toggle');
  card.classList.remove('is-open');
  if (button) {
    button.setAttribute('aria-expanded', 'false');
    button.textContent = 'Ver completo';
  }
}

function openCard(card) {
  const button = card.querySelector('.card-toggle');
  card.classList.add('is-open');
  if (button) {
    button.setAttribute('aria-expanded', 'true');
    button.textContent = 'Cerrar';
  }
}

cards.forEach((card) => {
  const button = card.querySelector('.card-toggle');
  if (!button) return;

  button.addEventListener('click', () => {
    const shouldOpen = !card.classList.contains('is-open');

    cards.forEach((item) => closeCard(item));

    if (shouldOpen) {
      openCard(card);
    }
  });
});
