const navItem = document.querySelectorAll('.nav-item');

navItem.forEach((item) => {
  item.addEventListener('click', (e) => {
    const isDropdownButton = item.classList.contains('dropdown-btn');

    let currentDropdown;
    if (isDropdownButton) {
      currentDropdown = item.querySelector('[data-dropdown]');
      currentDropdown.classList.toggle('active');
    }
  });
});
