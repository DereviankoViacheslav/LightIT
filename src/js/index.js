
import '../sass/style.scss'
import '../img/minus.svg'
import '../img/plus.svg'
import '../img/masculine-user.svg'
import '../img/woman-with-skirt.svg'

import render from './lib/renderHtml';
import header from './components/Header';
import main from './components/Main';
import modal from './components/ModalWindow';
import search from './actions/search';

import fetchUsers from './actions/fetchUsers'

let users = [];

document.body.addEventListener('click', (e) => {
  let target = e.target;
  let currentElement;
  while (target !== document.body) {
    currentElement = target.nextElementSibling;
    if (target.classList.contains('userItem')) {
      closeOtherUsers(currentElement);
      if (currentElement.classList.contains('d-none')) {
        target.lastChild.innerHTML = '<img src="./img/minus.svg" alt="minus">';
        currentElement.classList.remove('d-none');
      } else {
        target.lastChild.innerHTML = '<img src="./img/plus.svg" alt="plus">';
        currentElement.classList.add('d-none');
      };
      return;
    }
    target = target.parentNode;
  };
});

function fillModal(users) {

  let cntMale = 0;
  let cntFemale = 0;
  let allUsers = 0;
  let percentMale = 0;
  let percentFemale = 0;
  let popCanvas = document.getElementById('popChart');

  users.map(el => {
    if (el.gender === 'male') {
      cntMale++;
    } else {
      cntFemale++;
    };
  });

  allUsers = cntMale + cntFemale;
  percentMale = ((cntMale * 100) / allUsers).toFixed(2);
  percentFemale = ((cntFemale * 100) / allUsers).toFixed(2);
  
  new Chart(popCanvas, {
    type: 'pie',
    data: {
      labels: ['Male: ' + percentMale + '%', 'Female: ' + percentFemale + '%'],
      datasets: [{
        label: 'Population',
        data: [cntMale, cntFemale],
        backgroundColor: [
          '#434348',
          '#7cb5ec'
        ]
      }]
    },
    options: {
      tooltips: {
        caretSize: 0,
        xPadding: 16,
        yPadding: 10,
        titleMarginBottom: 15
      }
    }
  });
};

function closeOtherUsers(currentElement) {
  [...document.querySelectorAll('.fullData')].map(el => {
    if (el !== currentElement) {
      el.previousElementSibling.lastChild.innerHTML = '<img src="./img/plus.svg" alt="plus">';
      el.classList.toggle('d-none', true);
    };
  });
};

fetchUsers()
  .then(data => {
    const {
      results
    } = data;
    users = results;
    render('app', modal);
    render('app', header());
    render('app', main(users));
    search(users);
    fillModal(users);
    return results;
  })
  .catch(err => console.log(err));