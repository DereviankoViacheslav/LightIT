
import getHtmlObject from '../../lib/FactoryHtml';

import usersList from './usersList';
import usersListHeader from './usersListHeader';

const main = getHtmlObject('main');

export default (users) => {
    
    return main.createHtmlElement(
        'container main',
        null,
        [usersListHeader, ...usersList(users)]
    );
};