import { TabBar } from 'antd-mobile';
import { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import cycleSvg from '@assets/cycle.svg';
import starSvg from '@assets/star.svg';
import upSvg from '@assets/up.svg';
import msgSvg from '@assets/msg.svg';

import { useNavigate } from 'react-router-dom';
import style from './index.module.scss';

const getBars = ({
  commentsCount,
  likesCount,
  nav,
}) => [{
  key: 'msg',
  icon: (
    <div onClick={() => nav('/comment')}>
      <img className={style.icon} src={msgSvg} alt="" />
      {commentsCount > 0 && <span className={style.count}>{commentsCount}</span>}
    </div>),
},
{
  key: 'cycle',
  icon: <img className={style.icon} src={cycleSvg} alt="" />,
},
{
  key: 'star',
  icon: (
    <div>
      <img className={style.icon} src={starSvg} alt="" />
      {likesCount > 0 && <span className={style.count}>{likesCount}</span>}
    </div>),
},
{
  key: 'up',
  icon: <img className={style.icon} src={upSvg} alt="" />,
}];
/**
* bar for comment, Retweet, like, share
*/
const Bar = ({
  isBottom,
  likesCount,
  commentsCount,
}) => {
  const [activeKey, setActiveKey] = useState();
  const nav = useNavigate();
  const onChangeTabItem = (key) => {
    setActiveKey(key);
  };

  return (
    <div className={classNames({
      [style.container]: !isBottom,
      [style.containerBottom]: isBottom,
    })}
    >
      <TabBar activeKey={activeKey} onChange={onChangeTabItem}>
        {getBars({
          likesCount,
          commentsCount,
          nav,
        }).map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} />
        ))}
      </TabBar>
    </div>
  );
};

Bar.propTypes = {
  commentsCount: PropTypes.number.isRequired,
  likesCount: PropTypes.number.isRequired,
  isBottom: PropTypes.bool,
};

Bar.defaultProps = {
  isBottom: false,
};

export default Bar;
