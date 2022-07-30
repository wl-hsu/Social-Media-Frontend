import { useAppContext } from '@utils/context';
import { Steps, TextArea } from 'antd-mobile';
import moment from 'moment';
import { useState, useEffect } from 'react';

import style from './index.module.scss';

const { Step } = Steps;

// default data
const defaultTweet = {
  id: 1,
  user: {
    id: 2,
    username: 'BulbasaurForTesting',
    nickname: 'Bulbasaur',
    avatar_url: 'https://upload.wikimedia.org/wikipedia/en/2/28/Pok%C3%A9mon_Bulbasaur_art.png',
  },
  comments: [
    {
      id: 1,
      tweet_id: 1,
      user: {
        id: 1,
        username: 'admin',
        nickname: null,
        avatar_url: null,
      },
      content: 'Test!',
      created_at: '2022-07-22T15:03:52.662052Z',
      likes_count: 0,
      has_liked: false,
    },
  ],
  created_at: '2022-07-18T07:38:01.699129Z',
  content: 'Pokémon Pokémon Pokémon Pokémon Pokémon Pokémon Pokémon Pokémon Pokémon Pokémon Pokémon Pokémon Pokémon Pokémon Pokémon Pokémon',
  likes: [],
  likes_count: 0,
  comments_count: 1,
  has_liked: false,
  photo_urls: [],
};
/**
* comment function
*/
const Comment = () => {
  const [store] = useAppContext();
  const [data, setDate] = useState(defaultTweet);
  useEffect(() => {
    setDate(defaultTweet);
  }, []);
  return (
    <div className={style.container}>
      <Steps
        direction="vertical"
      >
        <Step
          icon={<img className={style.icon} src={data.user.avatar_url} alt="" />}
          title={(
            <div className={style.stepContent}>
              <div className={style.header}>
                <span className={style.nickname}>{data.user.nickname}</span>
                @
                <span className={style.username}>
                  {data.user.username}
                  &nbsp;·&nbsp;
                  {moment(data.created_at).format('MMM DD')}
                </span>
              </div>
              <div className={style.content}>
                {data.content}
              </div>
              <div className={style.recommit}>
                Reply
                <span className={style.commitName}>
                  @
                  {data.user.username}
                </span>
              </div>
            </div>
          )}
        />
        <Step
          icon={
            <img className={style.icon} src={store.user?.avatar_url} alt="" />
          }
          title={(
            <div>
              <TextArea className={style.text} placeholder="Tweet your reply" />
            </div>
          )}
        />
      </Steps>
    </div>
  );
};

export default Comment;
