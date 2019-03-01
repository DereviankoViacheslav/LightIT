
import getHtmlObject from '../../lib/FactoryHtml';

const input = getHtmlObject('input');
const headerInput = input.createHtmlElement(
  'form-control mr-sm-2',
  [{
      name: 'id',
      value: 'search'
    },
    {
      name: 'type',
      value: 'search'
    },
    {
      name: 'placeholder',
      value: 'Search'
    },
    {
      name: 'aria-label',
      value: 'Search'
    },
  ],
  null
);
export default headerInput;