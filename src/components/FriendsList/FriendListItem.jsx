import PropTypes from 'prop-types';
import {  Status, Item } from './FriendsList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (<>
        <Item>
        <Status isActive={isOnline === true}>{isOnline}</Status>
        <img className="avatar" src={avatar} alt="User avatar" width="70"  />
        <p className="name">{name}</p>
        </Item>
      </>
        
    )
};
FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}