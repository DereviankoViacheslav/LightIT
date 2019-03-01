
import getHtmlObject from '../../lib/FactoryHtml';

const div = getHtmlObject('div');

function createTitle(className, title) {
  return div.createHtmlElement(
    className,
    null,
    title
  );
};

const userListTitle = div.createHtmlElement(
  'row textCapitalize font-weight-bold py-2',
  null,
  [
    createTitle('col-1', ''),
    createTitle('col-2', 'Last'),
    createTitle('col-2', 'First'),
    createTitle('col-2', 'Username'),
    createTitle('col-2', 'Phone'),
    createTitle('col-2', 'Location'),
    createTitle('col-1', '')
  ]
);

export default userListTitle;