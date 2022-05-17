const caret = document.querySelector('[data-caret]');
const dropdownContainer = document.querySelector('[data-dropdown]');

caret.addEventListener('click', () => {
  dropdownContainer.classList.toggle('active');
});
