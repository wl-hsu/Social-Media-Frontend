import Header from '@components/Header';
import TweetCard from '@components/TweetCard';
import { getTweets } from '@services/tweet';
import { useAppContext } from '@utils/context';
import { useGoTo } from '@utils/hooks';
import { Button } from 'antd-mobile';
import { Tabs } from 'antd-mobile/es/components/tabs/tabs';
import { useState, useEffect } from 'react';

import style from './index.module.scss';

/**
* profile
*/
const My = () => {
  const [store] = useAppContext();
  const [data, setDate] = useState([]);
  const go = useGoTo();

  useEffect(() => {
    const init = async () => {
      const res = await getTweets();
      setDate(res.data);
    };
    init();
  }, []);
  return (
    <div className={style.container}>
      <Header title={store.user?.nickname || 'unknown'} />
      <div className={style.header} />
      <img className={style.avatar} src={store.user?.avatar_url} alt="" />
      <Button className={style.edit}>Edit profile</Button>
      <div className={style.nickname}>
        {store.user?.nickname || 'unknown'}
      </div>
      <div className={style.username}>
        @
        {store.user?.username}
      </div>
      <div className={style.follower}>
        <span className={style.number1}>
          100
        </span>
        <span onClick={() => go('follow')}>following</span>
        <span className={style.number2}>
          200
        </span>
        <span onClick={() => go('follow')}>follower</span>
      </div>
      <Tabs>
        <Tabs.Tab title="Tweets" key="tweet">
          {data.map((item) => <TweetCard dataSource={item} />)}
        </Tabs.Tab>
        <Tabs.Tab title="Tweets & replies" key="reply">
          reply
        </Tabs.Tab>
      </Tabs>
    </div>
  );
};

export default My;
