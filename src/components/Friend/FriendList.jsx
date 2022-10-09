import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  <ul className="friend-list">
    {friends.map(friend => {
      return (
        <li key={friend.id} className="item">
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      );
    })}
  </ul>;
};

export default FriendList;
