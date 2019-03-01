
import getHtmlObject from '../../lib/FactoryHtml';

import headerButton from './headerButton';
import headerForm from './headerForm';

const nav = getHtmlObject('nav');
const header = getHtmlObject('header');

const navBar = nav.createHtmlElement(
  'navbar navbar-light justify-content-between',
  null,
  [headerButton, headerForm]
);

export default () => header.createHtmlElement(
  'container',
  null,
  [navBar]
);