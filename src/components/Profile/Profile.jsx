import PropTypes from 'prop-types';
import {
  ContainerProfile,
  Description,
  Avatar,
  Name,
  TextInfo,
  ContainerStats,
  ListStats,
  SpanLabel,
  SpanQuantity,
} from './profile.styled.js';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <ContainerProfile>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <TextInfo>@{tag}</TextInfo>
        <TextInfo>{location}</TextInfo>
      </Description>

      <ContainerStats>
        <ListStats>
          <SpanLabel>Followers</SpanLabel>
          <SpanQuantity>{stats.followers}</SpanQuantity>
        </ListStats>
        <ListStats>
          <SpanLabel>Views</SpanLabel>
          <SpanQuantity>{stats.views}</SpanQuantity>
        </ListStats>
        <ListStats>
          <SpanLabel>Likes</SpanLabel>
          <SpanQuantity>{stats.likes}</SpanQuantity>
        </ListStats>
      </ContainerStats>
    </ContainerProfile>
  );
}
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
