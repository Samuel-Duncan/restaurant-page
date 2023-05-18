import pizza_menu from './images/oxq_pizza_menu_template_edit_online.jpg';

const createMenu = () => {
  const menu = document.createElement('div');
  menu.classList.add('menu');

  const menuImage = document.createElement('img');
  menuImage.src = pizza_menu;
  menuImage.alt = 'Menu';

  menu.appendChild(menuImage);

  return menu;
};

function loadMenu() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createMenu());
}

export default loadMenu;
