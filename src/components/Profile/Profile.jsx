import PropTypes from 'prop-types';
import { Avatar, Description, Name, Tag, Location, Stats, Wrap, Quantity} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className="profile">
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@ {tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <Wrap>
          <span className="label">Followers </span>
          <Quantity>{stats.followers}</Quantity>
        </Wrap>
        <Wrap>
          <span className="label">Views </span>
          <Quantity>{stats.views}</Quantity>
        </Wrap>
        <Wrap>
          <span className="label">Likes </span>
          <Quantity>{stats.likes}</Quantity>
        </Wrap>
      </Stats>
    </div>
  );
};
Profile.propTypes = {
  username:PropTypes.string.isRequired,
  tag:PropTypes.string.isRequired,
  location:PropTypes.string.isRequired,
  avatar:PropTypes.string.isRequired,
  stats:PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    }),
  

}