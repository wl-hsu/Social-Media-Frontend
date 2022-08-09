import cycleSvg from '@assets/cycle.svg';
import starSvg from '@assets/star.svg';
import likeRedSvg from '@assets/likeRed.svg';
import upSvg from '@assets/up.svg';
import msgSvg from '@assets/msg.svg';

import { LinkOutline } from 'antd-mobile-icons';
import style from './index.module.scss';

/**
 * Define constant of bar key
*/
export const BAR_KEYS = {
  STAR: 'star',
  MSG: 'msg',
  CYCLE: 'cycle',
  UP: 'up',
};
/**
 * get bar configuration
 */
export const getBars = ({
  commentsCount,
  likesCount,
  nav,
  id,
  onlyStar,
  liked,
}) => {
  if (onlyStar) {
    return [{
      key: BAR_KEYS.STAR,
      icon: (
        <div>
          {liked ? <img className={style.icon} src={likeRedSvg} alt="" />
            : <img className={style.icon} src={starSvg} alt="" />}
          {likesCount > 0 && <span className={style.count}>{likesCount}</span>}
        </div>),
    }];
  }

  return [{
    key: BAR_KEYS.MSG,
    icon: (
      <div onClick={() => nav(`/comment/${id}`)}>
        <img className={style.icon} src={msgSvg} alt="" />
        {commentsCount > 0 && <span className={style.count}>{commentsCount}</span>}
      </div>),
  },
  {
    key: BAR_KEYS.CYCLE,
    icon: <img className={style.icon} src={cycleSvg} alt="" />,
  },
  {
    key: BAR_KEYS.STAR,
    icon: (
      <div>
        {liked ? <img className={style.icon} src={likeRedSvg} alt="" />
          : <img className={style.icon} src={starSvg} alt="" />}
        {likesCount > 0 && <span className={style.count}>{likesCount}</span>}
      </div>),
  },
  {
    key: BAR_KEYS.UP,
    icon: <img className={style.icon} src={upSvg} alt="" />,
  }];
};

/**
 * define the contants of action buttons
 */
export const ACTION_KEYS = {
  COPY: 'copy',
  CANCEL: 'cancel',
};

export const ACTIONS = [
  {
    text:
  <div className={style.copyButton}>
    <LinkOutline style={{ marginRight: 10 }} />
    Copy tweet link
  </div>,
    key: ACTION_KEYS.COPY,
  },
  {
    text: <div className={style.cancelButton}>Cancel</div>,
    key: ACTION_KEYS.CANCEL,
  },
];

export const OBJECT_KEYS = {
  TWEET: 'tweet',
  COMMENT: 'comment',
};
