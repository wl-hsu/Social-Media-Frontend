import Header from '@components/Header';
import TButton from '@components/TButton';
import { useAppContext } from '@utils/context';
import { Steps, TextArea, Toast } from 'antd-mobile';
import moment from 'moment';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { createComment } from '@services/comment';

import { useGoTo } from '@utils/hooks';
import style from './index.module.scss';

const { Step } = Steps;

// default data
const defaultTweet = {
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
* comment function
*/
const Comment = () => {
  const [store] = useAppContext();
  const [data, setDate] = useState(defaultTweet);
  const [text, setText] = useState('');
  const params = useParams();
  const go = useGoTo();
  useEffect(() => {
    setDate(defaultTweet);
  }, []);
  const onClickReply = () => {
    createComment({
      content: text,
      tweet_id: params.id,
    }).then((res) => {
      if (res?.success) {
        Toast.show('reply successfully');
        go();
        return;
      }
      Toast.show('reply unsuccessfully');
    });
  };
  const onChangeText = (v) => {
    setText(v);
  };

  return (
    <div className={style.container}>
      <Header>
        <TButton disabled={text.length === 0} onClick={onClickReply}>Reply</TButton>
      </Header>
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
              <TextArea value={text} onChange={onChangeText} className={style.text} placeholder="Tweet your reply" />
            </div>
          )}
        />
      </Steps>
    </div>
  );
};

export default Comment;
