import background from './images/background.jpg';
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

const renderWebsite = () => {
  const content = document.getElementById('content');

  const handleBody = (() => {
    const body = document.querySelector('body');

    body.style.backgroundImage = `url('${background}')`;
    body.style.backgroundSize = 'cover';
    body.style.backgroundRepeat = 'repeat';
    body.style.backgroundPosition = 'center';
  })();

  const createNavBar = (() => {
    const navContainer = document.createElement('div');
    navContainer.classList.add('container-fluid', 'pt-3');

    content.appendChild(navContainer);

    const restaurantName = document.createElement('h1');
    restaurantName.classList.add('restaurant-name');
    restaurantName.textContent = 'Luccinis';

    navContainer.appendChild(restaurantName);

    const navTabs = document.createElement('ul');
    navTabs.classList.add('nav', 'nav-tabs', 'justify-content-end');
    navContainer.appendChild(navTabs);

    const homeTab = document.createElement('li');
    homeTab.classList.add('nav-item');
    navTabs.appendChild(homeTab);

    const homeLink = document.createElement('a');
    homeLink.setAttribute('class', 'nav-link active');
    homeLink.setAttribute('id', 'home');
    homeLink.setAttribute('data-bs-toggle', 'tab');
    homeLink.setAttribute('href', '#content1');
    homeLink.textContent = 'Home';
    homeTab.appendChild(homeLink);

    homeLink.addEventListener('click', loadHome);

    const menuTab = document.createElement('li');
    menuTab.classList.add('nav-item');
    navTabs.appendChild(menuTab);

    const menuLink = document.createElement('a');
    menuLink.setAttribute('class', 'nav-link');
    menuLink.setAttribute('id', 'menu');
    menuLink.setAttribute('data-bs-toggle', 'tab');
    menuLink.setAttribute('href', '#content1');
    menuLink.textContent = 'Menu';
    menuTab.appendChild(menuLink);

    menuLink.addEventListener('click', loadMenu);

    const contactTab = document.createElement('li');
    contactTab.classList.add('nav-item');
    navTabs.appendChild(contactTab);

    const contactLink = document.createElement('a');
    contactLink.setAttribute('class', 'nav-link');
    contactLink.setAttribute('id', 'contact');
    contactLink.setAttribute('data-bs-toggle', 'tab');
    contactLink.setAttribute('href', '#content1');
    contactLink.textContent = 'Contact';
    contactTab.appendChild(contactLink);

    contactLink.addEventListener('click', loadContact);
  })();

  const createMain = (() => {
    const main = document.createElement('div');
    main.id = 'main';

    content.appendChild(main);
  })();

  const createFooter = (() => {
    const footer = document.createElement('footer');
    footer.id = 'footer';

    const copyright = document.createElement('p');
    copyright.textContent = `Copyright © ${new Date().getFullYear()} Samuel-Duncan`;

    const githubLink = document.createElement('a');
    githubLink.href = 'https://github.com/Samuel-Duncan';

    const githubIcon = document.createElement('i');
    githubIcon.classList.add('fab');
    githubIcon.classList.add('fa-github');

    githubLink.appendChild(githubIcon);
    footer.append(copyright, githubLink);

    content.appendChild(footer);
  })();

  loadHome();
};

export default renderWebsite;
