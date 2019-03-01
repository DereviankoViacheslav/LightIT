
import usersListItem from './usersListItem';

export default (users) => {
  
  const listItemsUsers = [];
  if (users) {
    users.map(el => {
      listItemsUsers.push(usersListItem(el));
    });
  };

  return listItemsUsers;
};