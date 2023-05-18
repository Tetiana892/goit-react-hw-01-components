import PropTypes from 'prop-types';
import {
  CartFriend,
  FriendName,
  StatusFriend,
  AvatarName,
} from './friendlist.styled';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <CartFriend>
      <StatusFriend statusType={isOnline}></StatusFriend>
      <AvatarName src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
    </CartFriend>
  );
}
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
