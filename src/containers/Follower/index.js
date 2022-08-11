import FollowerItem from '@components/FollowerItem';
import Header from '@components/Header';
import { getFollowers, getFollowings } from '@services/user';
import { useAppContext } from '@utils/context';
import { Tabs } from 'antd-mobile';
import { useState } from 'react';

import style from './index.module.scss';

const TYPE = {
  FOLLOWER: {
    key: 'follower',
    title: 'follower',
  },
  FOLLOWING: {
    key: 'following',
    title: 'following',
  },
};
/**
* My following and follower
*/
const Follower = () => {
  const [data, setData] = useState([]);
  const [store] = useAppContext();

  const handleFollow = () => {

  };
  const handleCancelFollow = () => {

  };

  const onTabsChange = async (key) => {
    if (key === TYPE.FOLLOWER.key) {
      const res = await getFollowers(store.user.id);
      setData(res.data);
    }
    if (key === TYPE.FOLLOWING.key) {
      const res = await getFollowings(store.user.id);
      setData(res.data);
    }
  };
  return (
    <div className={style.container}>
      <Header title={store.user?.nickname || 'unknown'} />
      <Tabs onChange={onTabsChange}>
        {Object.values(TYPE).map((item) => (
          <Tabs.Tab title={item.title} key={item.key}>
            {data.map((it) => (
              <FollowerItem
                avatarUrl={it.user.avatar_url}
                nickname={it.user.nickname}
                username={it.user.username}
                hasFollowed={it.has_followed}
                handleFollow={() => handleFollow(it.user.id)}
                handleCancelFollow={() => handleCancelFollow(it.user.id)}
              />
            ))}
          </Tabs.Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default Follower;
