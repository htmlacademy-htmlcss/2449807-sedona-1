const promoLink = document.querySelector('.promo-link');
const modal = document.querySelector('.modal');
const modalCloseButton = document.querySelector('.modal-close-button');

promoLink.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.remove('modal-closed')
});

modalCloseButton.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.add('modal-closed');
});
