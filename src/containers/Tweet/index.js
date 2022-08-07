import Header from '@components/Header';
import ImageCard from '@components/ImageCard';
import Bar from '@components/Bar';
import moment from 'moment';
import { useState, useEffect } from 'react';

import style from './index.module.scss';

const tweet = {
  id: 1, // tweet id
  user: {
    id: 2, // The user id of the user who sent the tweet
    username: 'TesterForTweet1', // The username of the user who sent the tweet
    nickname: 'TFT1', // The nickname of the user who sent the tweet
    avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt5wunazzu83CsNiaTIs7iXiGCrzk00_loyw&usqp=CAU.jpg', // 发送该推文的用户头像地址
  }, // Information about the user who sent the tweet
  comments: [
    {
      id: 1, // comment id
      tweet_id: 1,
      user: {
        id: 1, // the user's id that sent the comment
        username: 'admin', // The username that sent this comment
        nickname: null, // The nickname that sent this comment
        avatar_url: null, // The avatar address of the user who sent the comment
      }, // Information of the user who sent this comment
      content: 'Test!', // The text content of this comment
      created_at: '2022-07-22T15:03:52.662052Z', // when the comment was created
      likes_count: 0, // Likes for this comment
      has_liked: false, // Whether the currently logged-in user has liked the comment, true: the currently logged-in user has liked the comment, false: the currently logged-in user has not liked the comment
    },
  ], // A collection of comments for this tweet
  created_at: '2022-07-20T07:38:01.699129Z', // when the tweet was created
  content: 'Id values are not mutable. Any id value in the body of your PUT or PATCH request will be ignored. Only a value set in a POST request will be respected, but only if not already taken.', // The text content of the tweet
  likes: [], // who liked the tweet
  likes_count: 10, // Likes count for this tweet
  comments_count: 122, // comment counts for this tweet
  has_liked: false, // Whether the currently logged-in user has liked the tweet, true: the currently logged-in user has liked the tweet, false: the currently logged-in user has not liked the tweet
  photo_urls: ['https://i.pinimg.com/originals/12/dc/90/12dc90c7703c43981e60fbada8f9f0b2.gif',
    'https://i.pinimg.com/originals/94/2b/91/942b9161e94d16a86a958b4d50d094fd.gif',
    'https://thumbs.gfycat.com/TastyBrokenArachnid-size_restricted.gif',
    'https://thumbs.gfycat.com/AridUncomfortableAnnashummingbird-size_restricted.gif',
  ], // The set of image addresses for this tweet
};

/**
* 单个推文
*/
const Tweet = () => {
  const [data, setDate] = useState(tweet);
  useEffect(() => {
    setDate(tweet);
  }, []);
  return (
    <div className={style.container}>
      <Header />
      <div className={style.contentContainer}>
        <div className={style.header}>
          <img src={data.user.avatar_url} alt="" className={style.avatar} />
          <div className={style.right}>
            <div className={style.nickname}>
              {data.user.nickname}
            </div>
            <div className={style.username}>
              @
              {data.user.username}
            </div>
          </div>
        </div>
        <div className={style.content}>
          {data.content}
        </div>
        <div className={style.photo}>
          <ImageCard
            imgs={data.photo_urls}
            likesCount={data.likes_count}
            commentsCount={data.comments_count}
          />
        </div>

        <div className={style.time}>
          {moment(data.created_at).format('A h:m · YYYY MMM D')}
        &nbsp;· Twitter for iPhone
        </div>
        <div className={style.bar}>
          <Bar
            id={data.id}
            likesCount={data.likes_count}
            commentsCount={data.comments_count}
          />
        </div>
      </div>
    </div>
  );
};

export default Tweet;
