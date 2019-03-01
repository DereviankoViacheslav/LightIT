
import getHtmlObject from '../../lib/FactoryHtml';

import headerInput from './headerInput';

const form = getHtmlObject('form');

const headerForm = form.createHtmlElement(
  'form-inline',
  null,
  [headerInput]
);
export default headerForm;