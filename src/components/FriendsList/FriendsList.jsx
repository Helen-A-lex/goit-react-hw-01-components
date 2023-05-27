import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { FriendList} from './FriendsList.styled';

export const FriendsList = ({ friends }) => {
    return (
<FriendList>
{friends.map(friend => (<FriendListItem key={friend.id} avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} />) )}
</FriendList>
    )
}
FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape(
        { id: PropTypes.number.isRequired },
    )).isRequired
}