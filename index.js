const container = document.querySelector('.container');
const navItemTemplate = document.getElementById('nav-item-template');
const navbarNav = document.querySelector('[data-navbar-nav]');

function navItem(item) {
  const navbarElement = document.importNode(navItemTemplate.content, true);
  const navItem = navbarElement.querySelector('i');
  navItem.classList.add(item);
  navbarNav.appendChild(navbarElement);
}

function createNavItem(icon) {
  return {
    id: generateId(),
    icon,
    down: false,
  };
}

function generateId() {
  return Date.now().toString();
}

const items = ['fa-circle-plus', 'fa-bell', 'fa-comment', 'fa-caret-down'];

(function render() {
  items.forEach((item) => {
    const list = createNavItem(item);
    navItem(list.icon);
  });
})();
