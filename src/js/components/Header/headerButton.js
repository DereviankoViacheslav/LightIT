
import getHtmlObject from '../../lib/FactoryHtml';

const button = getHtmlObject('button');
const headerButton = button.createHtmlElement(
  'btn btn-outline-success',
  [{
      name: 'id',
      value: 'ShowChart'
    },
    {
      name: 'data-toggle',
      value: 'modal'
    },
    {
      name: 'type',
      value: 'button'
    },
    {
      name: 'data-target',
      value: '.bd-modal-lg'
    }
  ],
  'Show chart'
);
export default headerButton;