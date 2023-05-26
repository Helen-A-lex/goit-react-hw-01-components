import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { FriendList, Item} from './FriendsList.styled';

export const FriendsList = ({ friends }) => {
    return (
    <FriendList>
            {friends.map(friend => (<Item key={friend.id}> <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} /> </Item>) )}
</FriendList>
    )
}
FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape(
        { id: PropTypes.number.isRequired },
    )).isRequired
}