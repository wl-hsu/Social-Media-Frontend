import PropTypes from 'prop-types';
import TButton from '@components/TButton';

import style from './index.module.scss';

/**
* Follower
*/
const FollowerItem = ({
  avatarUrl,
  nickname,
  username,
  hasFollowed,
  handleFollow,
  handleCancelFollow,
}) => (
  <div className={style.container}>
    <img className={style.avatar} src={avatarUrl} alt="" />
    <div className={style.content}>
      <div className={style.nickname}>{nickname}</div>
      <div className={style.username}>
        @
        {username}
        <span className={style.followYou}>
          Follow you
        </span>
      </div>
    </div>
    <div className={style.button}>
      {hasFollowed ? (
        <TButton
          onClick={handleCancelFollow}
          className={style.followingBtn}
        >
          Following
        </TButton>
      ) : (
        <TButton
          onClick={handleFollow}
          className={style.followBtn}
        >
          Follow
        </TButton>
      )}
    </div>
  </div>
);

FollowerItem.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  hasFollowed: PropTypes.bool.isRequired,
  handleFollow: PropTypes.func.isRequired,
  handleCancelFollow: PropTypes.func.isRequired,
};
export default FollowerItem;
