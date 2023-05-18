import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { ItemFriend } from './friendlist.styled.js';

export default function FriendList({ friends }) {
  return (
    <ItemFriend>
      {friends.map(({ id, name, isOnline, avatar }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ItemFriend>
  );
}
FriendList.protoTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
