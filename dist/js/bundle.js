/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/masculine-user.svg":
/*!************************************!*\
  !*** ./src/img/masculine-user.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/masculine-user.svg";

/***/ }),

/***/ "./src/img/minus.svg":
/*!***************************!*\
  !*** ./src/img/minus.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/minus.svg";

/***/ }),

/***/ "./src/img/plus.svg":
/*!**************************!*\
  !*** ./src/img/plus.svg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/plus.svg";

/***/ }),

/***/ "./src/img/woman-with-skirt.svg":
/*!**************************************!*\
  !*** ./src/img/woman-with-skirt.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/woman-with-skirt.svg";

/***/ }),

/***/ "./src/js/actions/fetchUsers.js":
/*!**************************************!*\
  !*** ./src/js/actions/fetchUsers.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return fetch("https://randomuser.me/api/?results=100").then(function (res) {
    return res.json();
  });
});

/***/ }),

/***/ "./src/js/actions/search.js":
/*!**********************************!*\
  !*** ./src/js/actions/search.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Main */ "./src/js/components/Main/index.js");
/* harmony import */ var _lib_renderHtml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/renderHtml */ "./src/js/lib/renderHtml.js");


/* harmony default export */ __webpack_exports__["default"] = (function (users) {
  var inputSearch = document.querySelector('#search');
  inputSearch.addEventListener('input', function (e) {
    var mainElement = document.querySelector('.main');
    document.getElementById('app').removeChild(mainElement);
    var str = inputSearch.value;
    var arr = searchUsers(users, str);
    Object(_lib_renderHtml__WEBPACK_IMPORTED_MODULE_1__["default"])('app', Object(_components_Main__WEBPACK_IMPORTED_MODULE_0__["default"])(arr));

    if (e.keyCode == 13) {
      event.preventDefault();
    }
  });
  inputSearch.addEventListener('keypress', function (e) {
    if (e.keyCode == 13) {
      event.preventDefault();
    }
  });
});

function searchUsers(users, str) {
  var usersList = [];

  if (str === '') {
    return users;
  }

  ;
  users.map(function (el) {
    var name = el.name.first.toLowerCase();

    if (~name.indexOf(str.toLowerCase())) {
      usersList.push(el);
    }

    ;
  });
  return usersList;
}

;

/***/ }),

/***/ "./src/js/components/Header/headerButton.js":
/*!**************************************************!*\
  !*** ./src/js/components/Header/headerButton.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_FactoryHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/FactoryHtml */ "./src/js/lib/FactoryHtml.js");

var button = Object(_lib_FactoryHtml__WEBPACK_IMPORTED_MODULE_0__["default"])('button');
var headerButton = button.createHtmlElement('btn btn-outline-success', [{
  name: 'id',
  value: 'ShowChart'
}, {
  name: 'data-toggle',
  value: 'modal'
}, {
  name: 'type',
  value: 'button'
}, {
  name: 'data-target',
  value: '.bd-modal-lg'
}], 'Show chart');
/* harmony default export */ __webpack_exports__["default"] = (headerButton);

/***/ }),

/***/ "./src/js/components/Header/headerForm.js":
/*!************************************************!*\
  !*** ./src/js/components/Header/headerForm.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_FactoryHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/FactoryHtml */ "./src/js/lib/FactoryHtml.js");
/* harmony import */ var _headerInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./headerInput */ "./src/js/components/Header/headerInput.js");


var form = Object(_lib_FactoryHtml__WEBPACK_IMPORTED_MODULE_0__["default"])('form');
var headerForm = form.createHtmlElement('form-inline', null, [_headerInput__WEBPACK_IMPORTED_MODULE_1__["default"]]);
/* harmony default export */ __webpack_exports__["default"] = (headerForm);

/***/ }),

/***/ "./src/js/components/Header/headerInput.js":
/*!*************************************************!*\
  !*** ./src/js/components/Header/headerInput.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_FactoryHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/FactoryHtml */ "./src/js/lib/FactoryHtml.js");

var input = Object(_lib_FactoryHtml__WEBPACK_IMPORTED_MODULE_0__["default"])('input');
var headerInput = input.createHtmlElement('form-control mr-sm-2', [{
  name: 'id',
  value: 'search'
}, {
  name: 'type',
  value: 'search'
}, {
  name: 'placeholder',
  value: 'Search'
}, {
  name: 'aria-label',
  value: 'Search'
}], null);
/* harmony default export */ __webpack_exports__["default"] = (headerInput);

/***/ }),

/***/ "./src/js/components/Header/index.js":
/*!*******************************************!*\
  !*** ./src/js/components/Header/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_FactoryHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/FactoryHtml */ "./src/js/lib/FactoryHtml.js");
/* harmony import */ var _headerButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./headerButton */ "./src/js/components/Header/headerButton.js");
/* harmony import */ var _headerForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./headerForm */ "./src/js/components/Header/headerForm.js");



var nav = Object(_lib_FactoryHtml__WEBPACK_IMPORTED_MODULE_0__["default"])('nav');
var header = Object(_lib_FactoryHtml__WEBPACK_IMPORTED_MODULE_0__["default"])('header');
var navBar = nav.createHtmlElement('navbar navbar-light justify-content-between', null, [_headerButton__WEBPACK_IMPORTED_MODULE_1__["default"], _headerForm__WEBPACK_IMPORTED_MODULE_2__["default"]]);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return header.createHtmlElement('container', null, [navBar]);
});

/***/ }),

/***/ "./src/js/components/Main/index.js":
/*!*****************************************!*\
  !*** ./src/js/components/Main/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_FactoryHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/FactoryHtml */ "./src/js/lib/FactoryHtml.js");
/* harmony import */ var _usersList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usersList */ "./src/js/components/Main/usersList.js");
/* harmony import */ var _usersListHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usersListHeader */ "./src/js/components/Main/usersListHeader.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }




var main = Object(_lib_FactoryHtml__WEBPACK_IMPORTED_MODULE_0__["default"])('main');
/* harmony default export */ __webpack_exports__["default"] = (function (users) {
  return main.createHtmlElement('container main', null, [_usersListHeader__WEBPACK_IMPORTED_MODULE_2__["default"]].concat(_toConsumableArray(Object(_usersList__WEBPACK_IMPORTED_MODULE_1__["default"])(users))));
});

/***/ }),

/***/ "./src/js/components/Main/usersList.js":
/*!*********************************************!*\
  !*** ./src/js/components/Main/usersList.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _usersListItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usersListItem */ "./src/js/components/Main/usersListItem.js");

/* harmony default export */ __webpack_exports__["default"] = (function (users) {
  var listItemsUsers = [];

  if (users) {
    users.map(function (el) {
      listItemsUsers.push(Object(_usersListItem__WEBPACK_IMPORTED_MODULE_0__["default"])(el));
    });
  }

  ;
  return listItemsUsers;
});

/***/ }),

/***/ "./src/js/components/Main/usersListHeader.js":
/*!***************************************************!*\
  !*** ./src/js/components/Main/usersListHeader.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_FactoryHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/FactoryHtml */ "./src/js/lib/FactoryHtml.js");

var div = Object(_lib_FactoryHtml__WEBPACK_IMPORTED_MODULE_0__["default"])('div');

function createTitle(className, title) {
  return div.createHtmlElement(className, null, title);
}

;
var userListTitle = div.createHtmlElement('row textCapitalize font-weight-bold py-2', null, [createTitle('col-1', ''), createTitle('col-2', 'Last'), createTitle('col-2', 'First'), createTitle('col-2', 'Username'), createTitle('col-2', 'Phone'), createTitle('col-2', 'Location'), createTitle('col-1', '')]);
/* harmony default export */ __webpack_exports__["default"] = (userListTitle);

/***/ }),

/***/ "./src/js/components/Main/usersListItem.js":
/*!*************************************************!*\
  !*** ./src/js/components/Main/usersListItem.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_FactoryHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/FactoryHtml */ "./src/js/lib/FactoryHtml.js");

var ul = Object(_lib_FactoryHtml__WEBPACK_IMPORTED_MODULE_0__["default"])("ul");
var li = Object(_lib_FactoryHtml__WEBPACK_IMPORTED_MODULE_0__["default"])("li");
var div = Object(_lib_FactoryHtml__WEBPACK_IMPORTED_MODULE_0__["default"])("div");
var span = Object(_lib_FactoryHtml__WEBPACK_IMPORTED_MODULE_0__["default"])("span");
var img = Object(_lib_FactoryHtml__WEBPACK_IMPORTED_MODULE_0__["default"])("img");

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
  }

  ;
}

;

function createImg(className, url, alt) {
  return img.createHtmlElement(className, [{
    name: 'src',
    value: url
  }, {
    name: 'alt',
    value: alt
  }], '');
}

;

function getIconGender(gender) {
  if (gender === 'male') {
    return createImg('', './img/masculine-user.svg', "gender ".concat(gender));
  } else {
    return createImg('', './img/woman-with-skirt.svg', "gender ".concat(gender));
  }

  ;
}

;

function createTableRow(dataUser) {
  var thumbnail = createImg('img', dataUser.picture.thumbnail, 'User photo');
  var avatar = createRow('div', 'col-1', [thumbnail]);
  var lastname = createRow('div', 'col-2 text-capitalize', dataUser.name.last);
  var firstname = createRow('div', 'col-2 text-capitalize', dataUser.name.first);
  var username = createRow('div', 'col-2', dataUser.login.username);
  var phone = createRow('div', 'col-2', dataUser.phone);
  var location = createRow('div', 'col-2', dataUser.location.state);
  var iconPlus = createImg('', './img/plus.svg', 'plus');
  var icon = createRow('div', 'col-1', [iconPlus]);
  var title = createRow('span', 'h3 text-capitalize font-weight-bold', "".concat(dataUser.name.first, " "));
  var titleIcon = createRow('span', '', [getIconGender(dataUser.gender)]);
  var titleContainer = createRow('div', 'col-12', [title, titleIcon]);
  var titleUserName = createRow('span', 'text-capitalize font-weight-bold', 'Username ');
  var liUserName = createRow('span', 'text-capitalize', "".concat(dataUser.login.username));
  var liItemUserName = createRow('li', '', [titleUserName, liUserName]);
  var titleRegistered = createRow('span', 'text-capitalize font-weight-bold', 'Registered ');
  var liRegistered = createRow('span', 'text-capitalize', "".concat(dataUser.registered.date));
  var liItemRegistered = createRow('li', '', [titleRegistered, liRegistered]);
  var titleEmail = createRow('span', 'text-capitalize font-weight-bold', 'Email ');
  var liEmail = createRow('span', 'text-capitalize', "".concat(dataUser.email));
  var liItemEmail = createRow('li', '', [titleEmail, liEmail]);
  var listFirst = createRow('ul', 'list-unstyled', [liItemUserName, liItemRegistered, liItemEmail]);
  var listFirstData = createRow('div', 'col', [listFirst]);
  var titleAdress = createRow('span', 'text-capitalize font-weight-bold', 'Adress ');
  var liAdress = createRow('span', 'text-capitalize', "".concat(dataUser.location.street));
  var liItemAdress = createRow('li', '', [titleAdress, liAdress]);
  var titleCity = createRow('span', 'text-capitalize font-weight-bold', 'City ');
  var liCity = createRow('span', 'text-capitalize', "".concat(dataUser.location.city));
  var liItemCity = createRow('li', '', [titleCity, liCity]);
  var titleZipCode = createRow('span', 'text-capitalize font-weight-bold', 'Zip Code ');
  var liZipCode = createRow('span', 'text-capitalize', "".concat(dataUser.location.postcode));
  var liItemZipCode = createRow('li', '', [titleZipCode, liZipCode]);
  var listSecond = createRow('ul', 'list-unstyled', [liItemAdress, liItemCity, liItemZipCode]);
  var listSecondData = createRow('div', 'col', [listSecond]);
  var titleBirthday = createRow('span', 'text-capitalize font-weight-bold', 'Birthday ');
  var liBirthday = createRow('span', 'text-capitalize', "".concat(dataUser.dob.date));
  var liItemBirthday = createRow('li', '', [titleBirthday, liBirthday]);
  var titlePhone = createRow('span', 'text-capitalize font-weight-bold', 'Phone ');
  var liPhone = createRow('span', 'text-capitalize', "".concat(dataUser.phone));
  var liItemPhone = createRow('li', '', [titlePhone, liPhone]);
  var titleCell = createRow('span', 'text-capitalize font-weight-bold', 'Cell ');
  var liCell = createRow('span', 'text-capitalize', "".concat(dataUser.cell));
  var liItemCell = createRow('li', '', [titleCell, liCell]);
  var listThird = createRow('ul', 'list-unstyled', [liItemBirthday, liItemPhone, liItemCell]);
  var listThirdData = createRow('div', 'col', [listThird]);
  var large = createImg('img', dataUser.picture.large, '');
  var avatarLarge = createRow('div', 'col-2', [large]);
  var firstRow = createRow('div', 'col-12 userItem align-items-center py-3 d-flex', [avatar, lastname, firstname, username, phone, location, icon]);
  var secondRow = createRow('div', 'row fullData justify-content-around p-5 w-100 d-none', [titleContainer, listFirstData, listSecondData, listThirdData, avatarLarge]);
  var listItem = createRow('div', 'row itemUsersList', [firstRow, secondRow]);
  return listItem;
}

;
/* harmony default export */ __webpack_exports__["default"] = (function (dataUsers) {
  return createTableRow(dataUsers);
});

/***/ }),

/***/ "./src/js/components/ModalWindow/index.js":
/*!************************************************!*\
  !*** ./src/js/components/ModalWindow/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_FactoryHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/FactoryHtml */ "./src/js/lib/FactoryHtml.js");

var div = Object(_lib_FactoryHtml__WEBPACK_IMPORTED_MODULE_0__["default"])('div');
var canvas = Object(_lib_FactoryHtml__WEBPACK_IMPORTED_MODULE_0__["default"])('canvas');
var chart = canvas.createHtmlElement('chart', [{
  name: 'id',
  value: 'popChart'
}], 'null');
var modalTitle = div.createHtmlElement('modal-title h3 text-center font-weight-bold', null, 'Gender users');
var modalContent = div.createHtmlElement('modal-content p-5', null, [modalTitle, chart]);
var modalDialog = div.createHtmlElement('modal-dialog modal-lg', [{
  name: 'role',
  value: 'document'
}], [modalContent]);
/* harmony default export */ __webpack_exports__["default"] = (div.createHtmlElement('modal fade bd-modal-lg', [{
  name: 'id',
  value: 'modal'
}, {
  name: 'tabindex',
  value: '-1'
}, {
  name: 'role',
  value: 'dialog'
}, {
  name: 'aria-labelledby',
  value: 'myLargeModalLabel'
}, {
  name: 'aria-hidden',
  value: 'true'
}], [modalDialog]));

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style.scss */ "./src/sass/style.scss");
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_minus_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/minus.svg */ "./src/img/minus.svg");
/* harmony import */ var _img_minus_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_minus_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_plus_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/plus.svg */ "./src/img/plus.svg");
/* harmony import */ var _img_plus_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_plus_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_masculine_user_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/masculine-user.svg */ "./src/img/masculine-user.svg");
/* harmony import */ var _img_masculine_user_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_masculine_user_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_woman_with_skirt_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/woman-with-skirt.svg */ "./src/img/woman-with-skirt.svg");
/* harmony import */ var _img_woman_with_skirt_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_woman_with_skirt_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_renderHtml__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/renderHtml */ "./src/js/lib/renderHtml.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Header */ "./src/js/components/Header/index.js");
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Main */ "./src/js/components/Main/index.js");
/* harmony import */ var _components_ModalWindow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/ModalWindow */ "./src/js/components/ModalWindow/index.js");
/* harmony import */ var _actions_search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./actions/search */ "./src/js/actions/search.js");
/* harmony import */ var _actions_fetchUsers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./actions/fetchUsers */ "./src/js/actions/fetchUsers.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }












var users = [];
document.body.addEventListener('click', function (e) {
  var target = e.target;
  var currentElement;

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
      }

      ;
      return;
    }

    target = target.parentNode;
  }

  ;
});

function fillModal(users) {
  var cntMale = 0;
  var cntFemale = 0;
  var allUsers = 0;
  var percentMale = 0;
  var percentFemale = 0;
  var popCanvas = document.getElementById('popChart');
  users.map(function (el) {
    if (el.gender === 'male') {
      cntMale++;
    } else {
      cntFemale++;
    }

    ;
  });
  allUsers = cntMale + cntFemale;
  percentMale = (cntMale * 100 / allUsers).toFixed(2);
  percentFemale = (cntFemale * 100 / allUsers).toFixed(2);
  new Chart(popCanvas, {
    type: 'pie',
    data: {
      labels: ['Male: ' + percentMale + '%', 'Female: ' + percentFemale + '%'],
      datasets: [{
        label: 'Population',
        data: [cntMale, cntFemale],
        backgroundColor: ['#434348', '#7cb5ec']
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
}

;

function closeOtherUsers(currentElement) {
  _toConsumableArray(document.querySelectorAll('.fullData')).map(function (el) {
    if (el !== currentElement) {
      el.previousElementSibling.lastChild.innerHTML = '<img src="./img/plus.svg" alt="plus">';
      el.classList.toggle('d-none', true);
    }

    ;
  });
}

;
Object(_actions_fetchUsers__WEBPACK_IMPORTED_MODULE_10__["default"])().then(function (data) {
  var results = data.results;
  users = results;
  Object(_lib_renderHtml__WEBPACK_IMPORTED_MODULE_5__["default"])('app', _components_ModalWindow__WEBPACK_IMPORTED_MODULE_8__["default"]);
  Object(_lib_renderHtml__WEBPACK_IMPORTED_MODULE_5__["default"])('app', Object(_components_Header__WEBPACK_IMPORTED_MODULE_6__["default"])());
  Object(_lib_renderHtml__WEBPACK_IMPORTED_MODULE_5__["default"])('app', Object(_components_Main__WEBPACK_IMPORTED_MODULE_7__["default"])(users));
  Object(_actions_search__WEBPACK_IMPORTED_MODULE_9__["default"])(users);
  fillModal(users);
  return results;
}).catch(function (err) {
  return console.log(err);
});

/***/ }),

/***/ "./src/js/lib/BuilderHtml.js":
/*!***********************************!*\
  !*** ./src/js/lib/BuilderHtml.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BuilderHtml; });
function BuilderHtml(tag) {
  this.createHtmlElement = function (className, attr, content) {
    var html = document.createElement(tag);
    html.className = className || '';

    if (Array.isArray(attr)) {
      attr.map(function (el) {
        return html.setAttribute(el.name, el.value);
      });
    }

    if (typeof content === 'string') {
      html.innerHTML = content;
    } else if (Array.isArray(content)) {
      content.map(function (el) {
        return el instanceof Node ? html.appendChild(el) : '';
      });
    }

    return html;
  };
}

/***/ }),

/***/ "./src/js/lib/Button.js":
/*!******************************!*\
  !*** ./src/js/lib/Button.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
/* harmony import */ var _BuilderHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BuilderHtml */ "./src/js/lib/BuilderHtml.js");

function Button() {
  var tag = 'button';
  _BuilderHtml__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, tag);
}

/***/ }),

/***/ "./src/js/lib/Canvas.js":
/*!******************************!*\
  !*** ./src/js/lib/Canvas.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Canvas; });
/* harmony import */ var _BuilderHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BuilderHtml */ "./src/js/lib/BuilderHtml.js");

function Canvas() {
  var tag = 'canvas';
  _BuilderHtml__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, tag);
}

/***/ }),

/***/ "./src/js/lib/Div.js":
/*!***************************!*\
  !*** ./src/js/lib/Div.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Div; });
/* harmony import */ var _BuilderHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BuilderHtml */ "./src/js/lib/BuilderHtml.js");

function Div() {
  var tag = 'div';
  _BuilderHtml__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, tag);
}

/***/ }),

/***/ "./src/js/lib/FactoryHtml.js":
/*!***********************************!*\
  !*** ./src/js/lib/FactoryHtml.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./src/js/lib/Button.js");
/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Canvas */ "./src/js/lib/Canvas.js");
/* harmony import */ var _Div__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Div */ "./src/js/lib/Div.js");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Form */ "./src/js/lib/Form.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ "./src/js/lib/Header.js");
/* harmony import */ var _Img__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Img */ "./src/js/lib/Img.js");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Input */ "./src/js/lib/Input.js");
/* harmony import */ var _Li__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Li */ "./src/js/lib/Li.js");
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Main */ "./src/js/lib/Main.js");
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Nav */ "./src/js/lib/Nav.js");
/* harmony import */ var _Span__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Span */ "./src/js/lib/Span.js");
/* harmony import */ var _Ul__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Ul */ "./src/js/lib/Ul.js");












/* harmony default export */ __webpack_exports__["default"] = (function (tag) {
  switch (tag) {
    case 'button':
      return new _Button__WEBPACK_IMPORTED_MODULE_0__["default"]();

    case 'canvas':
      return new _Canvas__WEBPACK_IMPORTED_MODULE_1__["default"]();

    case 'form':
      return new _Form__WEBPACK_IMPORTED_MODULE_3__["default"]();

    case 'header':
      return new _Header__WEBPACK_IMPORTED_MODULE_4__["default"]();

    case 'img':
      return new _Img__WEBPACK_IMPORTED_MODULE_5__["default"]();

    case 'input':
      return new _Input__WEBPACK_IMPORTED_MODULE_6__["default"]();

    case 'li':
      return new _Li__WEBPACK_IMPORTED_MODULE_7__["default"]();

    case 'main':
      return new _Main__WEBPACK_IMPORTED_MODULE_8__["default"]();

    case 'nav':
      return new _Nav__WEBPACK_IMPORTED_MODULE_9__["default"]();

    case 'span':
      return new _Span__WEBPACK_IMPORTED_MODULE_10__["default"]();

    case 'ul':
      return new _Ul__WEBPACK_IMPORTED_MODULE_11__["default"]();

    default:
      return new _Div__WEBPACK_IMPORTED_MODULE_2__["default"]();
  }
});

/***/ }),

/***/ "./src/js/lib/Form.js":
/*!****************************!*\
  !*** ./src/js/lib/Form.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Form; });
/* harmony import */ var _BuilderHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BuilderHtml */ "./src/js/lib/BuilderHtml.js");

function Form() {
  var tag = 'form';
  _BuilderHtml__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, tag);
}

/***/ }),

/***/ "./src/js/lib/Header.js":
/*!******************************!*\
  !*** ./src/js/lib/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var _BuilderHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BuilderHtml */ "./src/js/lib/BuilderHtml.js");

function Header() {
  var tag = 'header';
  _BuilderHtml__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, tag);
}

/***/ }),

/***/ "./src/js/lib/Img.js":
/*!***************************!*\
  !*** ./src/js/lib/Img.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Div; });
/* harmony import */ var _BuilderHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BuilderHtml */ "./src/js/lib/BuilderHtml.js");

function Div() {
  var tag = 'img';
  _BuilderHtml__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, tag);
}

/***/ }),

/***/ "./src/js/lib/Input.js":
/*!*****************************!*\
  !*** ./src/js/lib/Input.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Input; });
/* harmony import */ var _BuilderHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BuilderHtml */ "./src/js/lib/BuilderHtml.js");

function Input() {
  var tag = 'input';
  _BuilderHtml__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, tag);
}

/***/ }),

/***/ "./src/js/lib/Li.js":
/*!**************************!*\
  !*** ./src/js/lib/Li.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Div; });
/* harmony import */ var _BuilderHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BuilderHtml */ "./src/js/lib/BuilderHtml.js");

function Div() {
  var tag = 'li';
  _BuilderHtml__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, tag);
}

/***/ }),

/***/ "./src/js/lib/Main.js":
/*!****************************!*\
  !*** ./src/js/lib/Main.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Main; });
/* harmony import */ var _BuilderHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BuilderHtml */ "./src/js/lib/BuilderHtml.js");

function Main() {
  var tag = 'main';
  _BuilderHtml__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, tag);
}

/***/ }),

/***/ "./src/js/lib/Nav.js":
/*!***************************!*\
  !*** ./src/js/lib/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Nav; });
/* harmony import */ var _BuilderHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BuilderHtml */ "./src/js/lib/BuilderHtml.js");

function Nav() {
  var tag = 'nav';
  _BuilderHtml__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, tag);
}

/***/ }),

/***/ "./src/js/lib/Span.js":
/*!****************************!*\
  !*** ./src/js/lib/Span.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Div; });
/* harmony import */ var _BuilderHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BuilderHtml */ "./src/js/lib/BuilderHtml.js");

function Div() {
  var tag = 'span';
  _BuilderHtml__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, tag);
}

/***/ }),

/***/ "./src/js/lib/Ul.js":
/*!**************************!*\
  !*** ./src/js/lib/Ul.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Div; });
/* harmony import */ var _BuilderHtml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BuilderHtml */ "./src/js/lib/BuilderHtml.js");

function Div() {
  var tag = 'ul';
  _BuilderHtml__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, tag);
}

/***/ }),

/***/ "./src/js/lib/renderHtml.js":
/*!**********************************!*\
  !*** ./src/js/lib/renderHtml.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (place, Html) {
  var element = document.getElementById(place);
  element.appendChild(Html);
});

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9tYXNjdWxpbmUtdXNlci5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9taW51cy5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9wbHVzLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL3dvbWFuLXdpdGgtc2tpcnQuc3ZnIiwid2VicGFjazovLy8uL3NyYy9qcy9hY3Rpb25zL2ZldGNoVXNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FjdGlvbnMvc2VhcmNoLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL0hlYWRlci9oZWFkZXJCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvSGVhZGVyL2hlYWRlckZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvSGVhZGVyL2hlYWRlcklucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL0hlYWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9NYWluL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL01haW4vdXNlcnNMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL01haW4vdXNlcnNMaXN0SGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL01haW4vdXNlcnNMaXN0SXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9Nb2RhbFdpbmRvdy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2xpYi9CdWlsZGVySHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbGliL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbGliL0NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbGliL0Rpdi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbGliL0ZhY3RvcnlIdG1sLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9saWIvRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbGliL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbGliL0ltZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbGliL0lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9saWIvTGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2xpYi9NYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9saWIvTmF2LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9saWIvU3Bhbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbGliL1VsLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9saWIvcmVuZGVySHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy9zdHlsZS5zY3NzIl0sIm5hbWVzIjpbImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJ1c2VycyIsImlucHV0U2VhcmNoIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJtYWluRWxlbWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVtb3ZlQ2hpbGQiLCJzdHIiLCJ2YWx1ZSIsImFyciIsInNlYXJjaFVzZXJzIiwicmVuZGVyIiwibWFpbiIsImtleUNvZGUiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidXNlcnNMaXN0IiwibWFwIiwiZWwiLCJuYW1lIiwiZmlyc3QiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJwdXNoIiwiYnV0dG9uIiwiZ2V0SHRtbE9iamVjdCIsImhlYWRlckJ1dHRvbiIsImNyZWF0ZUh0bWxFbGVtZW50IiwiZm9ybSIsImhlYWRlckZvcm0iLCJoZWFkZXJJbnB1dCIsImlucHV0IiwibmF2IiwiaGVhZGVyIiwibmF2QmFyIiwidXNlcnNMaXN0SGVhZGVyIiwibGlzdEl0ZW1zVXNlcnMiLCJ1c2Vyc0xpc3RJdGVtIiwiZGl2IiwiY3JlYXRlVGl0bGUiLCJjbGFzc05hbWUiLCJ0aXRsZSIsInVzZXJMaXN0VGl0bGUiLCJ1bCIsImxpIiwic3BhbiIsImltZyIsImNyZWF0ZVJvdyIsInRhZ05hbWUiLCJjb250ZW50IiwiY3JlYXRlSW1nIiwidXJsIiwiYWx0IiwiZ2V0SWNvbkdlbmRlciIsImdlbmRlciIsImNyZWF0ZVRhYmxlUm93IiwiZGF0YVVzZXIiLCJ0aHVtYm5haWwiLCJwaWN0dXJlIiwiYXZhdGFyIiwibGFzdG5hbWUiLCJsYXN0IiwiZmlyc3RuYW1lIiwidXNlcm5hbWUiLCJsb2dpbiIsInBob25lIiwibG9jYXRpb24iLCJzdGF0ZSIsImljb25QbHVzIiwiaWNvbiIsInRpdGxlSWNvbiIsInRpdGxlQ29udGFpbmVyIiwidGl0bGVVc2VyTmFtZSIsImxpVXNlck5hbWUiLCJsaUl0ZW1Vc2VyTmFtZSIsInRpdGxlUmVnaXN0ZXJlZCIsImxpUmVnaXN0ZXJlZCIsInJlZ2lzdGVyZWQiLCJkYXRlIiwibGlJdGVtUmVnaXN0ZXJlZCIsInRpdGxlRW1haWwiLCJsaUVtYWlsIiwiZW1haWwiLCJsaUl0ZW1FbWFpbCIsImxpc3RGaXJzdCIsImxpc3RGaXJzdERhdGEiLCJ0aXRsZUFkcmVzcyIsImxpQWRyZXNzIiwic3RyZWV0IiwibGlJdGVtQWRyZXNzIiwidGl0bGVDaXR5IiwibGlDaXR5IiwiY2l0eSIsImxpSXRlbUNpdHkiLCJ0aXRsZVppcENvZGUiLCJsaVppcENvZGUiLCJwb3N0Y29kZSIsImxpSXRlbVppcENvZGUiLCJsaXN0U2Vjb25kIiwibGlzdFNlY29uZERhdGEiLCJ0aXRsZUJpcnRoZGF5IiwibGlCaXJ0aGRheSIsImRvYiIsImxpSXRlbUJpcnRoZGF5IiwidGl0bGVQaG9uZSIsImxpUGhvbmUiLCJsaUl0ZW1QaG9uZSIsInRpdGxlQ2VsbCIsImxpQ2VsbCIsImNlbGwiLCJsaUl0ZW1DZWxsIiwibGlzdFRoaXJkIiwibGlzdFRoaXJkRGF0YSIsImxhcmdlIiwiYXZhdGFyTGFyZ2UiLCJmaXJzdFJvdyIsInNlY29uZFJvdyIsImxpc3RJdGVtIiwiZGF0YVVzZXJzIiwiY2FudmFzIiwiY2hhcnQiLCJtb2RhbFRpdGxlIiwibW9kYWxDb250ZW50IiwibW9kYWxEaWFsb2ciLCJib2R5IiwidGFyZ2V0IiwiY3VycmVudEVsZW1lbnQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImNsb3NlT3RoZXJVc2VycyIsImxhc3RDaGlsZCIsImlubmVySFRNTCIsInJlbW92ZSIsImFkZCIsInBhcmVudE5vZGUiLCJmaWxsTW9kYWwiLCJjbnRNYWxlIiwiY250RmVtYWxlIiwiYWxsVXNlcnMiLCJwZXJjZW50TWFsZSIsInBlcmNlbnRGZW1hbGUiLCJwb3BDYW52YXMiLCJ0b0ZpeGVkIiwiQ2hhcnQiLCJ0eXBlIiwiZGF0YSIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvcHRpb25zIiwidG9vbHRpcHMiLCJjYXJldFNpemUiLCJ4UGFkZGluZyIsInlQYWRkaW5nIiwidGl0bGVNYXJnaW5Cb3R0b20iLCJxdWVyeVNlbGVjdG9yQWxsIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsInRvZ2dsZSIsImZldGNoVXNlcnMiLCJyZXN1bHRzIiwibW9kYWwiLCJzZWFyY2giLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJCdWlsZGVySHRtbCIsInRhZyIsImF0dHIiLCJodG1sIiwiY3JlYXRlRWxlbWVudCIsIkFycmF5IiwiaXNBcnJheSIsInNldEF0dHJpYnV0ZSIsIk5vZGUiLCJhcHBlbmRDaGlsZCIsIkJ1dHRvbiIsImNhbGwiLCJDYW52YXMiLCJEaXYiLCJGb3JtIiwiSGVhZGVyIiwiSW1nIiwiSW5wdXQiLCJMaSIsIk1haW4iLCJOYXYiLCJTcGFuIiwiVWwiLCJwbGFjZSIsIkh0bWwiLCJlbGVtZW50Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFF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QUNXLElBQVosQ0FBaUIsSUFBakIsRUFBdUJWLEdBQXZCO0FBQ0gsQzs7Ozs7Ozs7Ozs7O0FDTEQ7QUFBZSx5RUFBQ3NCLEtBQUQsRUFBUUMsSUFBUixFQUFpQjtBQUM1QixNQUFNQyxPQUFPLEdBQUdqTSxRQUFRLENBQUNLLGNBQVQsQ0FBd0IwTCxLQUF4QixDQUFoQjtBQUNBRSxTQUFPLENBQUNoQixXQUFSLENBQW9CZSxJQUFwQjtBQUNILENBSEQsRTs7Ozs7Ozs7Ozs7QUNEQSx1QyIsImZpbGUiOiJqcy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9tYXNjdWxpbmUtdXNlci5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvbWludXMuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL3BsdXMuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL3dvbWFuLXdpdGgtc2tpcnQuc3ZnXCI7IiwiXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cbiAgICByZXR1cm4gZmV0Y2goXCJodHRwczovL3JhbmRvbXVzZXIubWUvYXBpLz9yZXN1bHRzPTEwMFwiKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgfSk7XG59IiwiXG5pbXBvcnQgbWFpbiBmcm9tICcuLi9jb21wb25lbnRzL01haW4nO1xuaW1wb3J0IHJlbmRlciBmcm9tICcuLi9saWIvcmVuZGVySHRtbCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgKHVzZXJzKSA9PiB7XG4gIFxuICBjb25zdCBpbnB1dFNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gnKTtcbiAgXG4gIGlucHV0U2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcbiAgICBsZXQgbWFpbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKS5yZW1vdmVDaGlsZChtYWluRWxlbWVudCk7XG4gICAgbGV0IHN0ciA9IGlucHV0U2VhcmNoLnZhbHVlO1xuICAgIGxldCBhcnIgPSBzZWFyY2hVc2Vycyh1c2Vycywgc3RyKTtcbiAgICByZW5kZXIoJ2FwcCcsIG1haW4oYXJyKSk7XG4gICAgaWYgKGUua2V5Q29kZSA9PSAxMykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH0pO1xuICBpbnB1dFNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7XG4gICAgaWYgKGUua2V5Q29kZSA9PSAxMykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH0pO1xufTtcblxuZnVuY3Rpb24gc2VhcmNoVXNlcnModXNlcnMsIHN0cikge1xuXG4gIGxldCB1c2Vyc0xpc3QgPSBbXTtcbiAgaWYgKHN0ciA9PT0gJycpIHsgICAgXG4gICAgcmV0dXJuIHVzZXJzO1xuICB9O1xuICB1c2Vycy5tYXAoKGVsKSA9PiB7XG4gICAgbGV0IG5hbWUgPSBlbC5uYW1lLmZpcnN0LnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKH5uYW1lLmluZGV4T2Yoc3RyLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICB1c2Vyc0xpc3QucHVzaChlbCk7XG4gICAgfTtcbiAgfSk7XG4gIHJldHVybiB1c2Vyc0xpc3Q7XG59OyIsIlxuaW1wb3J0IGdldEh0bWxPYmplY3QgZnJvbSAnLi4vLi4vbGliL0ZhY3RvcnlIdG1sJztcblxuY29uc3QgYnV0dG9uID0gZ2V0SHRtbE9iamVjdCgnYnV0dG9uJyk7XG5jb25zdCBoZWFkZXJCdXR0b24gPSBidXR0b24uY3JlYXRlSHRtbEVsZW1lbnQoXG4gICdidG4gYnRuLW91dGxpbmUtc3VjY2VzcycsXG4gIFt7XG4gICAgICBuYW1lOiAnaWQnLFxuICAgICAgdmFsdWU6ICdTaG93Q2hhcnQnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnZGF0YS10b2dnbGUnLFxuICAgICAgdmFsdWU6ICdtb2RhbCdcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICd0eXBlJyxcbiAgICAgIHZhbHVlOiAnYnV0dG9uJ1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2RhdGEtdGFyZ2V0JyxcbiAgICAgIHZhbHVlOiAnLmJkLW1vZGFsLWxnJ1xuICAgIH1cbiAgXSxcbiAgJ1Nob3cgY2hhcnQnXG4pO1xuZXhwb3J0IGRlZmF1bHQgaGVhZGVyQnV0dG9uOyIsIlxuaW1wb3J0IGdldEh0bWxPYmplY3QgZnJvbSAnLi4vLi4vbGliL0ZhY3RvcnlIdG1sJztcblxuaW1wb3J0IGhlYWRlcklucHV0IGZyb20gJy4vaGVhZGVySW5wdXQnO1xuXG5jb25zdCBmb3JtID0gZ2V0SHRtbE9iamVjdCgnZm9ybScpO1xuXG5jb25zdCBoZWFkZXJGb3JtID0gZm9ybS5jcmVhdGVIdG1sRWxlbWVudChcbiAgJ2Zvcm0taW5saW5lJyxcbiAgbnVsbCxcbiAgW2hlYWRlcklucHV0XVxuKTtcbmV4cG9ydCBkZWZhdWx0IGhlYWRlckZvcm07IiwiXG5pbXBvcnQgZ2V0SHRtbE9iamVjdCBmcm9tICcuLi8uLi9saWIvRmFjdG9yeUh0bWwnO1xuXG5jb25zdCBpbnB1dCA9IGdldEh0bWxPYmplY3QoJ2lucHV0Jyk7XG5jb25zdCBoZWFkZXJJbnB1dCA9IGlucHV0LmNyZWF0ZUh0bWxFbGVtZW50KFxuICAnZm9ybS1jb250cm9sIG1yLXNtLTInLFxuICBbe1xuICAgICAgbmFtZTogJ2lkJyxcbiAgICAgIHZhbHVlOiAnc2VhcmNoJ1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ3R5cGUnLFxuICAgICAgdmFsdWU6ICdzZWFyY2gnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAncGxhY2Vob2xkZXInLFxuICAgICAgdmFsdWU6ICdTZWFyY2gnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnYXJpYS1sYWJlbCcsXG4gICAgICB2YWx1ZTogJ1NlYXJjaCdcbiAgICB9LFxuICBdLFxuICBudWxsXG4pO1xuZXhwb3J0IGRlZmF1bHQgaGVhZGVySW5wdXQ7IiwiXG5pbXBvcnQgZ2V0SHRtbE9iamVjdCBmcm9tICcuLi8uLi9saWIvRmFjdG9yeUh0bWwnO1xuXG5pbXBvcnQgaGVhZGVyQnV0dG9uIGZyb20gJy4vaGVhZGVyQnV0dG9uJztcbmltcG9ydCBoZWFkZXJGb3JtIGZyb20gJy4vaGVhZGVyRm9ybSc7XG5cbmNvbnN0IG5hdiA9IGdldEh0bWxPYmplY3QoJ25hdicpO1xuY29uc3QgaGVhZGVyID0gZ2V0SHRtbE9iamVjdCgnaGVhZGVyJyk7XG5cbmNvbnN0IG5hdkJhciA9IG5hdi5jcmVhdGVIdG1sRWxlbWVudChcbiAgJ25hdmJhciBuYXZiYXItbGlnaHQganVzdGlmeS1jb250ZW50LWJldHdlZW4nLFxuICBudWxsLFxuICBbaGVhZGVyQnV0dG9uLCBoZWFkZXJGb3JtXVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gaGVhZGVyLmNyZWF0ZUh0bWxFbGVtZW50KFxuICAnY29udGFpbmVyJyxcbiAgbnVsbCxcbiAgW25hdkJhcl1cbik7IiwiXHJcbmltcG9ydCBnZXRIdG1sT2JqZWN0IGZyb20gJy4uLy4uL2xpYi9GYWN0b3J5SHRtbCc7XHJcblxyXG5pbXBvcnQgdXNlcnNMaXN0IGZyb20gJy4vdXNlcnNMaXN0JztcclxuaW1wb3J0IHVzZXJzTGlzdEhlYWRlciBmcm9tICcuL3VzZXJzTGlzdEhlYWRlcic7XHJcblxyXG5jb25zdCBtYWluID0gZ2V0SHRtbE9iamVjdCgnbWFpbicpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHVzZXJzKSA9PiB7XHJcbiAgICBcclxuICAgIHJldHVybiBtYWluLmNyZWF0ZUh0bWxFbGVtZW50KFxyXG4gICAgICAgICdjb250YWluZXIgbWFpbicsXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICBbdXNlcnNMaXN0SGVhZGVyLCAuLi51c2Vyc0xpc3QodXNlcnMpXVxyXG4gICAgKTtcclxufTsiLCJcbmltcG9ydCB1c2Vyc0xpc3RJdGVtIGZyb20gJy4vdXNlcnNMaXN0SXRlbSc7XG5cbmV4cG9ydCBkZWZhdWx0ICh1c2VycykgPT4ge1xuICBcbiAgY29uc3QgbGlzdEl0ZW1zVXNlcnMgPSBbXTtcbiAgaWYgKHVzZXJzKSB7XG4gICAgdXNlcnMubWFwKGVsID0+IHtcbiAgICAgIGxpc3RJdGVtc1VzZXJzLnB1c2godXNlcnNMaXN0SXRlbShlbCkpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBsaXN0SXRlbXNVc2Vycztcbn07IiwiXG5pbXBvcnQgZ2V0SHRtbE9iamVjdCBmcm9tICcuLi8uLi9saWIvRmFjdG9yeUh0bWwnO1xuXG5jb25zdCBkaXYgPSBnZXRIdG1sT2JqZWN0KCdkaXYnKTtcblxuZnVuY3Rpb24gY3JlYXRlVGl0bGUoY2xhc3NOYW1lLCB0aXRsZSkge1xuICByZXR1cm4gZGl2LmNyZWF0ZUh0bWxFbGVtZW50KFxuICAgIGNsYXNzTmFtZSxcbiAgICBudWxsLFxuICAgIHRpdGxlXG4gICk7XG59O1xuXG5jb25zdCB1c2VyTGlzdFRpdGxlID0gZGl2LmNyZWF0ZUh0bWxFbGVtZW50KFxuICAncm93IHRleHRDYXBpdGFsaXplIGZvbnQtd2VpZ2h0LWJvbGQgcHktMicsXG4gIG51bGwsXG4gIFtcbiAgICBjcmVhdGVUaXRsZSgnY29sLTEnLCAnJyksXG4gICAgY3JlYXRlVGl0bGUoJ2NvbC0yJywgJ0xhc3QnKSxcbiAgICBjcmVhdGVUaXRsZSgnY29sLTInLCAnRmlyc3QnKSxcbiAgICBjcmVhdGVUaXRsZSgnY29sLTInLCAnVXNlcm5hbWUnKSxcbiAgICBjcmVhdGVUaXRsZSgnY29sLTInLCAnUGhvbmUnKSxcbiAgICBjcmVhdGVUaXRsZSgnY29sLTInLCAnTG9jYXRpb24nKSxcbiAgICBjcmVhdGVUaXRsZSgnY29sLTEnLCAnJylcbiAgXVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlckxpc3RUaXRsZTsiLCJcbmltcG9ydCBnZXRIdG1sT2JqZWN0IGZyb20gJy4uLy4uL2xpYi9GYWN0b3J5SHRtbCc7XG5cbmNvbnN0IHVsID0gZ2V0SHRtbE9iamVjdChcInVsXCIpO1xuY29uc3QgbGkgPSBnZXRIdG1sT2JqZWN0KFwibGlcIik7XG5jb25zdCBkaXYgPSBnZXRIdG1sT2JqZWN0KFwiZGl2XCIpO1xuY29uc3Qgc3BhbiA9IGdldEh0bWxPYmplY3QoXCJzcGFuXCIpO1xuY29uc3QgaW1nID0gZ2V0SHRtbE9iamVjdChcImltZ1wiKTtcblxuZnVuY3Rpb24gY3JlYXRlUm93KHRhZ05hbWUsIGNsYXNzTmFtZSwgY29udGVudCkge1xuICBzd2l0Y2ggKHRhZ05hbWUpIHtcbiAgICBjYXNlICdkaXYnOlxuICAgICAgcmV0dXJuIGRpdi5jcmVhdGVIdG1sRWxlbWVudChjbGFzc05hbWUsIG51bGwsIGNvbnRlbnQpO1xuICAgIGNhc2UgJ3NwYW4nOlxuICAgICAgcmV0dXJuIHNwYW4uY3JlYXRlSHRtbEVsZW1lbnQoY2xhc3NOYW1lLCBudWxsLCBjb250ZW50KTtcbiAgICBjYXNlICd1bCc6XG4gICAgICByZXR1cm4gdWwuY3JlYXRlSHRtbEVsZW1lbnQoY2xhc3NOYW1lLCBudWxsLCBjb250ZW50KTtcbiAgICBjYXNlICdsaSc6XG4gICAgICByZXR1cm4gbGkuY3JlYXRlSHRtbEVsZW1lbnQoY2xhc3NOYW1lLCBudWxsLCBjb250ZW50KTtcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUltZyhjbGFzc05hbWUsIHVybCwgYWx0KSB7XG5cbiAgcmV0dXJuIGltZy5jcmVhdGVIdG1sRWxlbWVudChcbiAgICBjbGFzc05hbWUsXG4gICAgW3tcbiAgICAgICAgbmFtZTogJ3NyYycsXG4gICAgICAgIHZhbHVlOiB1cmxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdhbHQnLFxuICAgICAgICB2YWx1ZTogYWx0XG4gICAgICB9XG4gICAgXSxcbiAgICAnJ1xuICApO1xufTtcblxuZnVuY3Rpb24gZ2V0SWNvbkdlbmRlcihnZW5kZXIpIHtcbiAgaWYgKGdlbmRlciA9PT0gJ21hbGUnKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUltZygnJywgJy4vaW1nL21hc2N1bGluZS11c2VyLnN2ZycsIGBnZW5kZXIgJHtnZW5kZXJ9YCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGNyZWF0ZUltZygnJywgJy4vaW1nL3dvbWFuLXdpdGgtc2tpcnQuc3ZnJywgYGdlbmRlciAke2dlbmRlcn1gKTtcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhYmxlUm93KGRhdGFVc2VyKSB7XG5cbiAgY29uc3QgdGh1bWJuYWlsID0gY3JlYXRlSW1nKCdpbWcnLCBkYXRhVXNlci5waWN0dXJlLnRodW1ibmFpbCwgJ1VzZXIgcGhvdG8nKTtcbiAgY29uc3QgYXZhdGFyID0gY3JlYXRlUm93KCdkaXYnLCAnY29sLTEnLCBbdGh1bWJuYWlsXSk7XG4gIGNvbnN0IGxhc3RuYW1lID0gY3JlYXRlUm93KCdkaXYnLCAnY29sLTIgdGV4dC1jYXBpdGFsaXplJywgZGF0YVVzZXIubmFtZS5sYXN0KTtcbiAgY29uc3QgZmlyc3RuYW1lID0gY3JlYXRlUm93KCdkaXYnLCAnY29sLTIgdGV4dC1jYXBpdGFsaXplJywgZGF0YVVzZXIubmFtZS5maXJzdCk7XG4gIGNvbnN0IHVzZXJuYW1lID0gY3JlYXRlUm93KCdkaXYnLCAnY29sLTInLCBkYXRhVXNlci5sb2dpbi51c2VybmFtZSk7XG4gIGNvbnN0IHBob25lID0gY3JlYXRlUm93KCdkaXYnLCAnY29sLTInLCBkYXRhVXNlci5waG9uZSk7XG4gIGNvbnN0IGxvY2F0aW9uID0gY3JlYXRlUm93KCdkaXYnLCAnY29sLTInLCBkYXRhVXNlci5sb2NhdGlvbi5zdGF0ZSk7XG4gIGNvbnN0IGljb25QbHVzID0gY3JlYXRlSW1nKCcnLCAnLi9pbWcvcGx1cy5zdmcnLCAncGx1cycpO1xuICBjb25zdCBpY29uID0gY3JlYXRlUm93KCdkaXYnLCAnY29sLTEnLCBbaWNvblBsdXNdKTtcbiAgY29uc3QgdGl0bGUgPSBjcmVhdGVSb3coJ3NwYW4nLCAnaDMgdGV4dC1jYXBpdGFsaXplIGZvbnQtd2VpZ2h0LWJvbGQnLCBgJHtkYXRhVXNlci5uYW1lLmZpcnN0fSBgKTtcbiAgY29uc3QgdGl0bGVJY29uID0gY3JlYXRlUm93KCdzcGFuJywgJycsIFtnZXRJY29uR2VuZGVyKGRhdGFVc2VyLmdlbmRlcildKTtcbiAgY29uc3QgdGl0bGVDb250YWluZXIgPSBjcmVhdGVSb3coJ2RpdicsICdjb2wtMTInLCBbdGl0bGUsIHRpdGxlSWNvbl0pO1xuXG4gIGNvbnN0IHRpdGxlVXNlck5hbWUgPSBjcmVhdGVSb3coJ3NwYW4nLCAndGV4dC1jYXBpdGFsaXplIGZvbnQtd2VpZ2h0LWJvbGQnLCAnVXNlcm5hbWUgJyk7XG4gIGNvbnN0IGxpVXNlck5hbWUgPSBjcmVhdGVSb3coJ3NwYW4nLCAndGV4dC1jYXBpdGFsaXplJywgYCR7ZGF0YVVzZXIubG9naW4udXNlcm5hbWV9YCk7XG4gIGNvbnN0IGxpSXRlbVVzZXJOYW1lID0gY3JlYXRlUm93KCdsaScsICcnLCBbdGl0bGVVc2VyTmFtZSwgbGlVc2VyTmFtZV0pO1xuXG4gIGNvbnN0IHRpdGxlUmVnaXN0ZXJlZCA9IGNyZWF0ZVJvdygnc3BhbicsICd0ZXh0LWNhcGl0YWxpemUgZm9udC13ZWlnaHQtYm9sZCcsICdSZWdpc3RlcmVkICcpO1xuICBjb25zdCBsaVJlZ2lzdGVyZWQgPSBjcmVhdGVSb3coJ3NwYW4nLCAndGV4dC1jYXBpdGFsaXplJywgYCR7ZGF0YVVzZXIucmVnaXN0ZXJlZC5kYXRlfWApO1xuICBjb25zdCBsaUl0ZW1SZWdpc3RlcmVkID0gY3JlYXRlUm93KCdsaScsICcnLCBbdGl0bGVSZWdpc3RlcmVkLCBsaVJlZ2lzdGVyZWRdKTtcblxuICBjb25zdCB0aXRsZUVtYWlsID0gY3JlYXRlUm93KCdzcGFuJywgJ3RleHQtY2FwaXRhbGl6ZSBmb250LXdlaWdodC1ib2xkJywgJ0VtYWlsICcpO1xuICBjb25zdCBsaUVtYWlsID0gY3JlYXRlUm93KCdzcGFuJywgJ3RleHQtY2FwaXRhbGl6ZScsIGAke2RhdGFVc2VyLmVtYWlsfWApO1xuICBjb25zdCBsaUl0ZW1FbWFpbCA9IGNyZWF0ZVJvdygnbGknLCAnJywgW3RpdGxlRW1haWwsIGxpRW1haWxdKTtcblxuICBjb25zdCBsaXN0Rmlyc3QgPSBjcmVhdGVSb3coJ3VsJywgJ2xpc3QtdW5zdHlsZWQnLCBbbGlJdGVtVXNlck5hbWUsIGxpSXRlbVJlZ2lzdGVyZWQsIGxpSXRlbUVtYWlsXSk7XG4gIGNvbnN0IGxpc3RGaXJzdERhdGEgPSBjcmVhdGVSb3coJ2RpdicsICdjb2wnLCBbbGlzdEZpcnN0XSk7XG5cbiAgY29uc3QgdGl0bGVBZHJlc3MgPSBjcmVhdGVSb3coJ3NwYW4nLCAndGV4dC1jYXBpdGFsaXplIGZvbnQtd2VpZ2h0LWJvbGQnLCAnQWRyZXNzICcpO1xuICBjb25zdCBsaUFkcmVzcyA9IGNyZWF0ZVJvdygnc3BhbicsICd0ZXh0LWNhcGl0YWxpemUnLCBgJHtkYXRhVXNlci5sb2NhdGlvbi5zdHJlZXR9YCk7XG4gIGNvbnN0IGxpSXRlbUFkcmVzcyA9IGNyZWF0ZVJvdygnbGknLCAnJywgW3RpdGxlQWRyZXNzLCBsaUFkcmVzc10pO1xuXG4gIGNvbnN0IHRpdGxlQ2l0eSA9IGNyZWF0ZVJvdygnc3BhbicsICd0ZXh0LWNhcGl0YWxpemUgZm9udC13ZWlnaHQtYm9sZCcsICdDaXR5ICcpO1xuICBjb25zdCBsaUNpdHkgPSBjcmVhdGVSb3coJ3NwYW4nLCAndGV4dC1jYXBpdGFsaXplJywgYCR7ZGF0YVVzZXIubG9jYXRpb24uY2l0eX1gKTtcbiAgY29uc3QgbGlJdGVtQ2l0eSA9IGNyZWF0ZVJvdygnbGknLCAnJywgW3RpdGxlQ2l0eSwgbGlDaXR5XSk7XG5cbiAgY29uc3QgdGl0bGVaaXBDb2RlID0gY3JlYXRlUm93KCdzcGFuJywgJ3RleHQtY2FwaXRhbGl6ZSBmb250LXdlaWdodC1ib2xkJywgJ1ppcCBDb2RlICcpO1xuICBjb25zdCBsaVppcENvZGUgPSBjcmVhdGVSb3coJ3NwYW4nLCAndGV4dC1jYXBpdGFsaXplJywgYCR7ZGF0YVVzZXIubG9jYXRpb24ucG9zdGNvZGV9YCk7XG4gIGNvbnN0IGxpSXRlbVppcENvZGUgPSBjcmVhdGVSb3coJ2xpJywgJycsIFt0aXRsZVppcENvZGUsIGxpWmlwQ29kZV0pO1xuXG4gIGNvbnN0IGxpc3RTZWNvbmQgPSBjcmVhdGVSb3coJ3VsJywgJ2xpc3QtdW5zdHlsZWQnLCBbbGlJdGVtQWRyZXNzLCBsaUl0ZW1DaXR5LCBsaUl0ZW1aaXBDb2RlXSk7XG4gIGNvbnN0IGxpc3RTZWNvbmREYXRhID0gY3JlYXRlUm93KCdkaXYnLCAnY29sJywgW2xpc3RTZWNvbmRdKTtcblxuICBjb25zdCB0aXRsZUJpcnRoZGF5ID0gY3JlYXRlUm93KCdzcGFuJywgJ3RleHQtY2FwaXRhbGl6ZSBmb250LXdlaWdodC1ib2xkJywgJ0JpcnRoZGF5ICcpO1xuICBjb25zdCBsaUJpcnRoZGF5ID0gY3JlYXRlUm93KCdzcGFuJywgJ3RleHQtY2FwaXRhbGl6ZScsIGAke2RhdGFVc2VyLmRvYi5kYXRlfWApO1xuICBjb25zdCBsaUl0ZW1CaXJ0aGRheSA9IGNyZWF0ZVJvdygnbGknLCAnJywgW3RpdGxlQmlydGhkYXksIGxpQmlydGhkYXldKTtcblxuICBjb25zdCB0aXRsZVBob25lID0gY3JlYXRlUm93KCdzcGFuJywgJ3RleHQtY2FwaXRhbGl6ZSBmb250LXdlaWdodC1ib2xkJywgJ1Bob25lICcpO1xuICBjb25zdCBsaVBob25lID0gY3JlYXRlUm93KCdzcGFuJywgJ3RleHQtY2FwaXRhbGl6ZScsIGAke2RhdGFVc2VyLnBob25lfWApO1xuICBjb25zdCBsaUl0ZW1QaG9uZSA9IGNyZWF0ZVJvdygnbGknLCAnJywgW3RpdGxlUGhvbmUsIGxpUGhvbmVdKTtcblxuICBjb25zdCB0aXRsZUNlbGwgPSBjcmVhdGVSb3coJ3NwYW4nLCAndGV4dC1jYXBpdGFsaXplIGZvbnQtd2VpZ2h0LWJvbGQnLCAnQ2VsbCAnKTtcbiAgY29uc3QgbGlDZWxsID0gY3JlYXRlUm93KCdzcGFuJywgJ3RleHQtY2FwaXRhbGl6ZScsIGAke2RhdGFVc2VyLmNlbGx9YCk7XG4gIGNvbnN0IGxpSXRlbUNlbGwgPSBjcmVhdGVSb3coJ2xpJywgJycsIFt0aXRsZUNlbGwsIGxpQ2VsbF0pO1xuXG4gIGNvbnN0IGxpc3RUaGlyZCA9IGNyZWF0ZVJvdygndWwnLCAnbGlzdC11bnN0eWxlZCcsIFtsaUl0ZW1CaXJ0aGRheSwgbGlJdGVtUGhvbmUsIGxpSXRlbUNlbGxdKTtcbiAgY29uc3QgbGlzdFRoaXJkRGF0YSA9IGNyZWF0ZVJvdygnZGl2JywgJ2NvbCcsIFtsaXN0VGhpcmRdKTtcblxuICBjb25zdCBsYXJnZSA9IGNyZWF0ZUltZygnaW1nJywgZGF0YVVzZXIucGljdHVyZS5sYXJnZSwgJycpO1xuICBjb25zdCBhdmF0YXJMYXJnZSA9IGNyZWF0ZVJvdygnZGl2JywgJ2NvbC0yJywgW2xhcmdlXSk7XG5cbiAgY29uc3QgZmlyc3RSb3cgPSBjcmVhdGVSb3coXG4gICAgJ2RpdicsXG4gICAgJ2NvbC0xMiB1c2VySXRlbSBhbGlnbi1pdGVtcy1jZW50ZXIgcHktMyBkLWZsZXgnLFxuICAgIFthdmF0YXIsIGxhc3RuYW1lLCBmaXJzdG5hbWUsIHVzZXJuYW1lLCBwaG9uZSwgbG9jYXRpb24sIGljb25dXG4gICk7XG5cbiAgY29uc3Qgc2Vjb25kUm93ID0gY3JlYXRlUm93KFxuICAgICdkaXYnLFxuICAgICdyb3cgZnVsbERhdGEganVzdGlmeS1jb250ZW50LWFyb3VuZCBwLTUgdy0xMDAgZC1ub25lJyxcbiAgICBbdGl0bGVDb250YWluZXIsIGxpc3RGaXJzdERhdGEsIGxpc3RTZWNvbmREYXRhLCBsaXN0VGhpcmREYXRhLCBhdmF0YXJMYXJnZV1cbiAgKTtcblxuICBjb25zdCBsaXN0SXRlbSA9IGNyZWF0ZVJvdyhcbiAgICAnZGl2JyxcbiAgICAncm93IGl0ZW1Vc2Vyc0xpc3QnLFxuICAgIFtmaXJzdFJvdywgc2Vjb25kUm93XVxuICApO1xuXG4gIHJldHVybiBsaXN0SXRlbTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IChkYXRhVXNlcnMpID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVRhYmxlUm93KGRhdGFVc2Vycyk7XG59OyIsIlxyXG5pbXBvcnQgZ2V0SHRtbE9iamVjdCBmcm9tICcuLi8uLi9saWIvRmFjdG9yeUh0bWwnO1xyXG5cclxuY29uc3QgZGl2ID0gZ2V0SHRtbE9iamVjdCgnZGl2Jyk7XHJcbmNvbnN0IGNhbnZhcyA9IGdldEh0bWxPYmplY3QoJ2NhbnZhcycpO1xyXG5cclxuY29uc3QgY2hhcnQgPSBjYW52YXMuY3JlYXRlSHRtbEVsZW1lbnQoXHJcbiAgICAnY2hhcnQnLFxyXG4gICAgW3tcclxuICAgICAgICBuYW1lOiAnaWQnLFxyXG4gICAgICAgIHZhbHVlOiAncG9wQ2hhcnQnXHJcbiAgICB9XSxcclxuICAgICdudWxsJ1xyXG4pO1xyXG5cclxuY29uc3QgbW9kYWxUaXRsZSA9IGRpdi5jcmVhdGVIdG1sRWxlbWVudChcclxuICAgICdtb2RhbC10aXRsZSBoMyB0ZXh0LWNlbnRlciBmb250LXdlaWdodC1ib2xkJyxcclxuICAgIG51bGwsXHJcbiAgICAnR2VuZGVyIHVzZXJzJ1xyXG4pO1xyXG5cclxuY29uc3QgbW9kYWxDb250ZW50ID0gZGl2LmNyZWF0ZUh0bWxFbGVtZW50KFxyXG4gICAgJ21vZGFsLWNvbnRlbnQgcC01JyxcclxuICAgIG51bGwsXHJcbiAgICBbbW9kYWxUaXRsZSwgY2hhcnRdXHJcbik7XHJcblxyXG5jb25zdCBtb2RhbERpYWxvZyA9IGRpdi5jcmVhdGVIdG1sRWxlbWVudChcclxuICAgICdtb2RhbC1kaWFsb2cgbW9kYWwtbGcnLFxyXG4gICAgW3tcclxuICAgICAgICBuYW1lOiAncm9sZScsXHJcbiAgICAgICAgdmFsdWU6ICdkb2N1bWVudCdcclxuICAgIH1dLFxyXG4gICAgW21vZGFsQ29udGVudF1cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpdi5jcmVhdGVIdG1sRWxlbWVudChcclxuICAgICdtb2RhbCBmYWRlIGJkLW1vZGFsLWxnJyxcclxuICAgIFt7XHJcbiAgICAgICAgICAgIG5hbWU6ICdpZCcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnbW9kYWwnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICd0YWJpbmRleCcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnLTEnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdyb2xlJyxcclxuICAgICAgICAgICAgdmFsdWU6ICdkaWFsb2cnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdhcmlhLWxhYmVsbGVkYnknLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ215TGFyZ2VNb2RhbExhYmVsJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnYXJpYS1oaWRkZW4nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ3RydWUnXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIFttb2RhbERpYWxvZ11cclxuKTsiLCJcbmltcG9ydCAnLi4vc2Fzcy9zdHlsZS5zY3NzJ1xuaW1wb3J0ICcuLi9pbWcvbWludXMuc3ZnJ1xuaW1wb3J0ICcuLi9pbWcvcGx1cy5zdmcnXG5pbXBvcnQgJy4uL2ltZy9tYXNjdWxpbmUtdXNlci5zdmcnXG5pbXBvcnQgJy4uL2ltZy93b21hbi13aXRoLXNraXJ0LnN2ZydcblxuaW1wb3J0IHJlbmRlciBmcm9tICcuL2xpYi9yZW5kZXJIdG1sJztcbmltcG9ydCBoZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgbWFpbiBmcm9tICcuL2NvbXBvbmVudHMvTWFpbic7XG5pbXBvcnQgbW9kYWwgZnJvbSAnLi9jb21wb25lbnRzL01vZGFsV2luZG93JztcbmltcG9ydCBzZWFyY2ggZnJvbSAnLi9hY3Rpb25zL3NlYXJjaCc7XG5cbmltcG9ydCBmZXRjaFVzZXJzIGZyb20gJy4vYWN0aW9ucy9mZXRjaFVzZXJzJ1xuXG5sZXQgdXNlcnMgPSBbXTtcblxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgbGV0IGN1cnJlbnRFbGVtZW50O1xuICB3aGlsZSAodGFyZ2V0ICE9PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgY3VycmVudEVsZW1lbnQgPSB0YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd1c2VySXRlbScpKSB7XG4gICAgICBjbG9zZU90aGVyVXNlcnMoY3VycmVudEVsZW1lbnQpO1xuICAgICAgaWYgKGN1cnJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZC1ub25lJykpIHtcbiAgICAgICAgdGFyZ2V0Lmxhc3RDaGlsZC5pbm5lckhUTUwgPSAnPGltZyBzcmM9XCIuL2ltZy9taW51cy5zdmdcIiBhbHQ9XCJtaW51c1wiPic7XG4gICAgICAgIGN1cnJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFyZ2V0Lmxhc3RDaGlsZC5pbm5lckhUTUwgPSAnPGltZyBzcmM9XCIuL2ltZy9wbHVzLnN2Z1wiIGFsdD1cInBsdXNcIj4nO1xuICAgICAgICBjdXJyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcbiAgICAgIH07XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlO1xuICB9O1xufSk7XG5cbmZ1bmN0aW9uIGZpbGxNb2RhbCh1c2Vycykge1xuXG4gIGxldCBjbnRNYWxlID0gMDtcbiAgbGV0IGNudEZlbWFsZSA9IDA7XG4gIGxldCBhbGxVc2VycyA9IDA7XG4gIGxldCBwZXJjZW50TWFsZSA9IDA7XG4gIGxldCBwZXJjZW50RmVtYWxlID0gMDtcbiAgbGV0IHBvcENhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3BDaGFydCcpO1xuXG4gIHVzZXJzLm1hcChlbCA9PiB7XG4gICAgaWYgKGVsLmdlbmRlciA9PT0gJ21hbGUnKSB7XG4gICAgICBjbnRNYWxlKys7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNudEZlbWFsZSsrO1xuICAgIH07XG4gIH0pO1xuXG4gIGFsbFVzZXJzID0gY250TWFsZSArIGNudEZlbWFsZTtcbiAgcGVyY2VudE1hbGUgPSAoKGNudE1hbGUgKiAxMDApIC8gYWxsVXNlcnMpLnRvRml4ZWQoMik7XG4gIHBlcmNlbnRGZW1hbGUgPSAoKGNudEZlbWFsZSAqIDEwMCkgLyBhbGxVc2VycykudG9GaXhlZCgyKTtcbiAgXG4gIG5ldyBDaGFydChwb3BDYW52YXMsIHtcbiAgICB0eXBlOiAncGllJyxcbiAgICBkYXRhOiB7XG4gICAgICBsYWJlbHM6IFsnTWFsZTogJyArIHBlcmNlbnRNYWxlICsgJyUnLCAnRmVtYWxlOiAnICsgcGVyY2VudEZlbWFsZSArICclJ10sXG4gICAgICBkYXRhc2V0czogW3tcbiAgICAgICAgbGFiZWw6ICdQb3B1bGF0aW9uJyxcbiAgICAgICAgZGF0YTogW2NudE1hbGUsIGNudEZlbWFsZV0sXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xuICAgICAgICAgICcjNDM0MzQ4JyxcbiAgICAgICAgICAnIzdjYjVlYydcbiAgICAgICAgXVxuICAgICAgfV1cbiAgICB9LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIHRvb2x0aXBzOiB7XG4gICAgICAgIGNhcmV0U2l6ZTogMCxcbiAgICAgICAgeFBhZGRpbmc6IDE2LFxuICAgICAgICB5UGFkZGluZzogMTAsXG4gICAgICAgIHRpdGxlTWFyZ2luQm90dG9tOiAxNVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG59O1xuXG5mdW5jdGlvbiBjbG9zZU90aGVyVXNlcnMoY3VycmVudEVsZW1lbnQpIHtcbiAgWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mdWxsRGF0YScpXS5tYXAoZWwgPT4ge1xuICAgIGlmIChlbCAhPT0gY3VycmVudEVsZW1lbnQpIHtcbiAgICAgIGVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmcubGFzdENoaWxkLmlubmVySFRNTCA9ICc8aW1nIHNyYz1cIi4vaW1nL3BsdXMuc3ZnXCIgYWx0PVwicGx1c1wiPic7XG4gICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdkLW5vbmUnLCB0cnVlKTtcbiAgICB9O1xuICB9KTtcbn07XG5cbmZldGNoVXNlcnMoKVxuICAudGhlbihkYXRhID0+IHtcbiAgICBjb25zdCB7XG4gICAgICByZXN1bHRzXG4gICAgfSA9IGRhdGE7XG4gICAgdXNlcnMgPSByZXN1bHRzO1xuICAgIHJlbmRlcignYXBwJywgbW9kYWwpO1xuICAgIHJlbmRlcignYXBwJywgaGVhZGVyKCkpO1xuICAgIHJlbmRlcignYXBwJywgbWFpbih1c2VycykpO1xuICAgIHNlYXJjaCh1c2Vycyk7XG4gICAgZmlsbE1vZGFsKHVzZXJzKTtcbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfSlcbiAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTsiLCJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnVpbGRlckh0bWwodGFnKSB7XHJcblxyXG4gICAgdGhpcy5jcmVhdGVIdG1sRWxlbWVudCA9IChjbGFzc05hbWUsIGF0dHIsIGNvbnRlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBodG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xyXG5cclxuICAgICAgICBodG1sLmNsYXNzTmFtZSA9IGNsYXNzTmFtZSB8fCAnJztcclxuXHJcbiAgICAgICAgaWYoQXJyYXkuaXNBcnJheShhdHRyKSl7XHJcbiAgICAgICAgICAgIGF0dHIubWFwKGVsID0+IGh0bWwuc2V0QXR0cmlidXRlKGVsLm5hbWUsIGVsLnZhbHVlKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpe1xyXG4gICAgICAgICAgICBodG1sLmlubmVySFRNTCA9IGNvbnRlbnQ7XHJcbiAgICAgICAgfWVsc2UgaWYoQXJyYXkuaXNBcnJheShjb250ZW50KSl7XHJcbiAgICAgICAgICAgIGNvbnRlbnQubWFwKGVsID0+IChlbCBpbnN0YW5jZW9mIE5vZGU/aHRtbC5hcHBlbmRDaGlsZChlbCk6JycpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBodG1sO1xyXG4gICAgfVxyXG59IiwiXHJcbmltcG9ydCBCdWlsZGVySHRtbCBmcm9tICcuL0J1aWxkZXJIdG1sJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbigpIHtcclxuICAgIGNvbnN0IHRhZyA9ICdidXR0b24nO1xyXG4gICAgQnVpbGRlckh0bWwuY2FsbCh0aGlzLCB0YWcpO1xyXG59IiwiXHJcbmltcG9ydCBCdWlsZGVySHRtbCBmcm9tICcuL0J1aWxkZXJIdG1sJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhbnZhcygpIHtcclxuICAgIGNvbnN0IHRhZyA9ICdjYW52YXMnO1xyXG4gICAgQnVpbGRlckh0bWwuY2FsbCh0aGlzLCB0YWcpO1xyXG59IiwiXHJcbmltcG9ydCBCdWlsZGVySHRtbCBmcm9tICcuL0J1aWxkZXJIdG1sJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERpdigpIHtcclxuICAgIGNvbnN0IHRhZyA9ICdkaXYnO1xyXG4gICAgQnVpbGRlckh0bWwuY2FsbCh0aGlzLCB0YWcpO1xyXG59IiwiXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nO1xyXG5pbXBvcnQgQ2FudmFzIGZyb20gJy4vQ2FudmFzJztcclxuaW1wb3J0IERpdiBmcm9tICcuL0Rpdic7XHJcbmltcG9ydCBGb3JtIGZyb20gJy4vRm9ybSc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xyXG5pbXBvcnQgSW1nIGZyb20gJy4vSW1nJztcclxuaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQnO1xyXG5pbXBvcnQgTGkgZnJvbSAnLi9MaSc7XHJcbmltcG9ydCBNYWluIGZyb20gJy4vTWFpbic7XHJcbmltcG9ydCBOYXYgZnJvbSAnLi9OYXYnO1xyXG5pbXBvcnQgU3BhbiBmcm9tICcuL1NwYW4nO1xyXG5pbXBvcnQgVWwgZnJvbSAnLi9VbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodGFnKSB7XHJcbiAgICBzd2l0Y2ggKHRhZykge1xyXG4gICAgICAgIGNhc2UgJ2J1dHRvbic6XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQnV0dG9uKCk7XHJcbiAgICAgICAgY2FzZSAnY2FudmFzJzpcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDYW52YXMoKTtcclxuICAgICAgICBjYXNlICdmb3JtJzpcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBGb3JtKCk7XHJcbiAgICAgICAgY2FzZSAnaGVhZGVyJzpcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBIZWFkZXIoKTtcclxuICAgICAgICBjYXNlICdpbWcnOlxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEltZygpO1xyXG4gICAgICAgIGNhc2UgJ2lucHV0JzpcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBJbnB1dCgpO1xyXG4gICAgICAgIGNhc2UgJ2xpJzpcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBMaSgpO1xyXG4gICAgICAgIGNhc2UgJ21haW4nOlxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE1haW4oKTtcclxuICAgICAgICBjYXNlICduYXYnOlxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE5hdigpO1xyXG4gICAgICAgIGNhc2UgJ3NwYW4nOlxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFNwYW4oKTtcclxuICAgICAgICBjYXNlICd1bCc6XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVWwoKTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IERpdigpO1xyXG4gICAgfVxyXG59IiwiXHJcbmltcG9ydCBCdWlsZGVySHRtbCBmcm9tICcuL0J1aWxkZXJIdG1sJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0oKSB7XHJcbiAgICBjb25zdCB0YWcgPSAnZm9ybSc7XHJcbiAgICBCdWlsZGVySHRtbC5jYWxsKHRoaXMsIHRhZyk7XHJcbn0iLCJcclxuaW1wb3J0IEJ1aWxkZXJIdG1sIGZyb20gJy4vQnVpbGRlckh0bWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gICAgY29uc3QgdGFnID0gJ2hlYWRlcic7XHJcbiAgICBCdWlsZGVySHRtbC5jYWxsKHRoaXMsIHRhZyk7XHJcbn0iLCJcclxuaW1wb3J0IEJ1aWxkZXJIdG1sIGZyb20gJy4vQnVpbGRlckh0bWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGl2KCkge1xyXG4gICAgY29uc3QgdGFnID0gJ2ltZyc7XHJcbiAgICBCdWlsZGVySHRtbC5jYWxsKHRoaXMsIHRhZyk7XHJcbn0iLCJcclxuaW1wb3J0IEJ1aWxkZXJIdG1sIGZyb20gJy4vQnVpbGRlckh0bWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5wdXQoKSB7XHJcbiAgICBjb25zdCB0YWcgPSAnaW5wdXQnO1xyXG4gICAgQnVpbGRlckh0bWwuY2FsbCh0aGlzLCB0YWcpO1xyXG59IiwiXHJcbmltcG9ydCBCdWlsZGVySHRtbCBmcm9tICcuL0J1aWxkZXJIdG1sJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERpdigpIHtcclxuICAgIGNvbnN0IHRhZyA9ICdsaSc7XHJcbiAgICBCdWlsZGVySHRtbC5jYWxsKHRoaXMsIHRhZyk7XHJcbn0iLCJcclxuaW1wb3J0IEJ1aWxkZXJIdG1sIGZyb20gJy4vQnVpbGRlckh0bWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbigpIHtcclxuICAgIGNvbnN0IHRhZyA9ICdtYWluJztcclxuICAgIEJ1aWxkZXJIdG1sLmNhbGwodGhpcywgdGFnKTtcclxufSIsIlxyXG5pbXBvcnQgQnVpbGRlckh0bWwgZnJvbSAnLi9CdWlsZGVySHRtbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXYoKSB7XHJcbiAgICBjb25zdCB0YWcgPSAnbmF2JztcclxuICAgIEJ1aWxkZXJIdG1sLmNhbGwodGhpcywgdGFnKTtcclxufSIsIlxyXG5pbXBvcnQgQnVpbGRlckh0bWwgZnJvbSAnLi9CdWlsZGVySHRtbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEaXYoKSB7XHJcbiAgICBjb25zdCB0YWcgPSAnc3Bhbic7XHJcbiAgICBCdWlsZGVySHRtbC5jYWxsKHRoaXMsIHRhZyk7XHJcbn0iLCJcclxuaW1wb3J0IEJ1aWxkZXJIdG1sIGZyb20gJy4vQnVpbGRlckh0bWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGl2KCkge1xyXG4gICAgY29uc3QgdGFnID0gJ3VsJztcclxuICAgIEJ1aWxkZXJIdG1sLmNhbGwodGhpcywgdGFnKTtcclxufSIsIlxyXG5leHBvcnQgZGVmYXVsdCAocGxhY2UsIEh0bWwpID0+IHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwbGFjZSk7XHJcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKEh0bWwpO1xyXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==