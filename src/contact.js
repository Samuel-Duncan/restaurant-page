import luccinis_location from './images/luccinis_location.jpg';

const createContact = () => {
  const contact = document.createElement('div');
  contact.classList.add('tab-content', 'home');

  const lucLocation = document.createElement('img');
  lucLocation.src = luccinis_location;
  lucLocation.alt = 'Chef';

  function createDiv(text) {
    const div = document.createElement('div');
    div.classList.add('main-content');
    div.textContent = text;
    return div;
  }

  contact.append(
    createDiv('📞 123 456 789'),
    createDiv('🏠 Clearwater, 3944 E 82nd St, Indianapolis, IN 46240'),
    lucLocation,
  );

  return contact;
};

function loadContact() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createContact());
}

export default loadContact;
