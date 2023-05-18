import chef_icon from './images/chef_icon.jpg';

const createHome = () => {
  const home = document.createElement('div');
  home.classList.add('home');

  const chefIcon = document.createElement('img');
  chefIcon.src = chef_icon;
  chefIcon.alt = 'Chef';

  function createDiv(text) {
    const div = document.createElement('div');
    div.classList.add('main-content');
    div.textContent = text;
    return div;
  }

  home.append(
    createDiv('Quality hand made Pizza and other Italian Delicacies'),
    createDiv('Prepared with love since 1936'),
    chefIcon,
    createDiv('Order online or visit us in person!'),
  );

  return home;
};

function loadHome() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createHome());
}

export default loadHome;
