import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';
import css from './Friend.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend__list}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li key={id} className={css.item}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
