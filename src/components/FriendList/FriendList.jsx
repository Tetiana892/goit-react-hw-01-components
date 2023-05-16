import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import './friendlist.styled.css';

export default function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(({ id, name, isOnline, avatar }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
}
FriendList.protoTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
