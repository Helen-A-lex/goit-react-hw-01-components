import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';

export const FriendsList = ({ friends }) => {
    return (
    <ul className="friend-list">
            {friends.map(friend => (<li key={friend.id}> <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} /> </li>) )}
</ul>
    )
}
FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape(
        { id: PropTypes.number.isRequired },
    )).isRequired
}