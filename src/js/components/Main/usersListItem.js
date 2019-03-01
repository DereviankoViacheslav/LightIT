
import getHtmlObject from '../../lib/FactoryHtml';

const ul = getHtmlObject("ul");
const li = getHtmlObject("li");
const div = getHtmlObject("div");
const span = getHtmlObject("span");
const img = getHtmlObject("img");

function createRow(tagName, className, content) {
  switch (tagName) {
    case 'div':
      return div.createHtmlElement(className, null, content);
    case 'span':
      return span.createHtmlElement(className, null, content);
    case 'ul':
      return ul.createHtmlElement(className, null, content);
    case 'li':
      return li.createHtmlElement(className, null, content);
  };
};

function createImg(className, url, alt) {

  return img.createHtmlElement(
    className,
    [{
        name: 'src',
        value: url
      },
      {
        name: 'alt',
        value: alt
      }
    ],
    ''
  );
};

function getIconGender(gender) {
  if (gender === 'male') {
    return createImg('', './img/masculine-user.svg', `gender ${gender}`);
  } else {
    return createImg('', './img/woman-with-skirt.svg', `gender ${gender}`);
  };
};

function createTableRow(dataUser) {

  const thumbnail = createImg('img', dataUser.picture.thumbnail, 'User photo');
  const avatar = createRow('div', 'col-1', [thumbnail]);
  const lastname = createRow('div', 'col-2 text-capitalize', dataUser.name.last);
  const firstname = createRow('div', 'col-2 text-capitalize', dataUser.name.first);
  const username = createRow('div', 'col-2', dataUser.login.username);
  const phone = createRow('div', 'col-2', dataUser.phone);
  const location = createRow('div', 'col-2', dataUser.location.state);
  const iconPlus = createImg('', './img/plus.svg', 'plus');
  const icon = createRow('div', 'col-1', [iconPlus]);
  const title = createRow('span', 'h3 text-capitalize font-weight-bold', `${dataUser.name.first} `);
  const titleIcon = createRow('span', '', [getIconGender(dataUser.gender)]);
  const titleContainer = createRow('div', 'col-12', [title, titleIcon]);

  const titleUserName = createRow('span', 'text-capitalize font-weight-bold', 'Username ');
  const liUserName = createRow('span', 'text-capitalize', `${dataUser.login.username}`);
  const liItemUserName = createRow('li', '', [titleUserName, liUserName]);

  const titleRegistered = createRow('span', 'text-capitalize font-weight-bold', 'Registered ');
  const liRegistered = createRow('span', 'text-capitalize', `${dataUser.registered.date}`);
  const liItemRegistered = createRow('li', '', [titleRegistered, liRegistered]);

  const titleEmail = createRow('span', 'text-capitalize font-weight-bold', 'Email ');
  const liEmail = createRow('span', 'text-capitalize', `${dataUser.email}`);
  const liItemEmail = createRow('li', '', [titleEmail, liEmail]);

  const listFirst = createRow('ul', 'list-unstyled', [liItemUserName, liItemRegistered, liItemEmail]);
  const listFirstData = createRow('div', 'col', [listFirst]);

  const titleAdress = createRow('span', 'text-capitalize font-weight-bold', 'Adress ');
  const liAdress = createRow('span', 'text-capitalize', `${dataUser.location.street}`);
  const liItemAdress = createRow('li', '', [titleAdress, liAdress]);

  const titleCity = createRow('span', 'text-capitalize font-weight-bold', 'City ');
  const liCity = createRow('span', 'text-capitalize', `${dataUser.location.city}`);
  const liItemCity = createRow('li', '', [titleCity, liCity]);

  const titleZipCode = createRow('span', 'text-capitalize font-weight-bold', 'Zip Code ');
  const liZipCode = createRow('span', 'text-capitalize', `${dataUser.location.postcode}`);
  const liItemZipCode = createRow('li', '', [titleZipCode, liZipCode]);

  const listSecond = createRow('ul', 'list-unstyled', [liItemAdress, liItemCity, liItemZipCode]);
  const listSecondData = createRow('div', 'col', [listSecond]);

  const titleBirthday = createRow('span', 'text-capitalize font-weight-bold', 'Birthday ');
  const liBirthday = createRow('span', 'text-capitalize', `${dataUser.dob.date}`);
  const liItemBirthday = createRow('li', '', [titleBirthday, liBirthday]);

  const titlePhone = createRow('span', 'text-capitalize font-weight-bold', 'Phone ');
  const liPhone = createRow('span', 'text-capitalize', `${dataUser.phone}`);
  const liItemPhone = createRow('li', '', [titlePhone, liPhone]);

  const titleCell = createRow('span', 'text-capitalize font-weight-bold', 'Cell ');
  const liCell = createRow('span', 'text-capitalize', `${dataUser.cell}`);
  const liItemCell = createRow('li', '', [titleCell, liCell]);

  const listThird = createRow('ul', 'list-unstyled', [liItemBirthday, liItemPhone, liItemCell]);
  const listThirdData = createRow('div', 'col', [listThird]);

  const large = createImg('img', dataUser.picture.large, '');
  const avatarLarge = createRow('div', 'col-2', [large]);

  const firstRow = createRow(
    'div',
    'col-12 userItem align-items-center py-3 d-flex',
    [avatar, lastname, firstname, username, phone, location, icon]
  );

  const secondRow = createRow(
    'div',
    'row fullData justify-content-around p-5 w-100 d-none',
    [titleContainer, listFirstData, listSecondData, listThirdData, avatarLarge]
  );

  const listItem = createRow(
    'div',
    'row itemUsersList',
    [firstRow, secondRow]
  );

  return listItem;
};

export default (dataUsers) => {
  return createTableRow(dataUsers);
};