
import main from '../components/Main';
import render from '../lib/renderHtml';


export default (users) => {
  
  const inputSearch = document.querySelector('#search');
  
  inputSearch.addEventListener('input', (e) => {
    let mainElement = document.querySelector('.main');
    document.getElementById('app').removeChild(mainElement);
    let str = inputSearch.value;
    let arr = searchUsers(users, str);
    render('app', main(arr));
    if (e.keyCode == 13) {
      event.preventDefault();
    }
  });
  inputSearch.addEventListener('keypress', (e) => {
    if (e.keyCode == 13) {
      event.preventDefault();
    }
  });
};

function searchUsers(users, str) {

  let usersList = [];
  if (str === '') {    
    return users;
  };
  users.map((el) => {
    let name = el.name.first.toLowerCase();
    if (~name.indexOf(str.toLowerCase())) {
      usersList.push(el);
    };
  });
  return usersList;
};