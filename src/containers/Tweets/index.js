import TweetCard from '@components/TweetCard';
import {
  List, CellMeasurer, WindowScroller, CellMeasurerCache,
} from 'react-virtualized';
import { InfiniteScroll, PullToRefresh } from 'antd-mobile';
import { useState, useEffect } from 'react';
import { getFeeds } from '@services/tweet';

import style from './index.module.scss';

const tweet = {
  id: 1, // tweet id
  user: {
    id: 2, // The user id of the user who sent the tweet
    username: 'TesterForTweet1', // The username of the user who sent the tweet
    nickname: 'TFT1', // The nickname of the user who sent the tweet
    avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt5wunazzu83CsNiaTIs7iXiGCrzk00_loyw&usqp=CAU.jpg', // The avatar address of the user who sent the tweet
  }, // Information about the user who sent the tweet
  comments: [
    {
      id: 1, // comment id
      tweet_id: 1,
      user: {
        id: 1, // the user's id that sent the comment
        username: 'Mewadmin',
        nickname: 'Mew',
        avatar_url: 'https://www.pokemon.cn/play/resources/pokedex/img/pm/3373da1ae6e9a429e7fc8dbad72bf5f4726eb13b.png', // The avatar address of the user who sent the comment
      },
      content: 'Test!', // The text content of this comment
      created_at: '2021-12-22T15:03:52.662052Z', // when the comment was created
      likes_count: 0,
      has_liked: false, //  Whether the currently logged-in user has liked the comment, true: the currently logged-in user has liked the comment, false: the currently logged-in user has not liked the comment
    },
  ],
  created_at: '2021-12-18T07:38:01.699129Z',
  content: 'Id values are not mutable. Any id value in the body of your PUT or PATCH request will be ignored. Only a value set in a POST request will be respected, but only if not already taken.', // 该推文的文本内容
  likes: [],
  likes_count: 10,
  comments_count: 122,
  has_liked: false,
  photo_urls: ['https://i.pinimg.com/originals/12/dc/90/12dc90c7703c43981e60fbada8f9f0b2.gif',
    'https://i.pinimg.com/originals/94/2b/91/942b9161e94d16a86a958b4d50d094fd.gif',
    'https://thumbs.gfycat.com/TastyBrokenArachnid-size_restricted.gif',
    'https://thumbs.gfycat.com/AridUncomfortableAnnashummingbird-size_restricted.gif',
  ], // The set of image addresses for this tweet
};

const tweet1 = {
  id: 1, // tweet id
  user: {
    id: 2, // The user id of the user who sent the tweet
    username: 'TesterForTweet1', // The username of the user who sent the tweet
    nickname: 'TFT1', // The nickname of the user who sent the tweet
    avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt5wunazzu83CsNiaTIs7iXiGCrzk00_loyw&usqp=CAU.jpg', // The avatar address of the user who sent the tweet
  }, // Information about the user who sent the tweet
  comments: [
    {
      id: 1,
      tweet_id: 1,
      user: {
        id: 1,
        username: 'Mewtwoadmin',
        nickname: 'Mewtwo',
        avatar_url: null,
      },
      content: 'Test2!',
      created_at: '2021-12-22T15:03:52.662052Z',
      likes_count: 0,
      has_liked: false,
    },
  ],
  created_at: '2021-12-18T07:38:01.699129Z',
  content: 'It is what you do with the gift of life that determines who you are.',
  likes: [],
  likes_count: 10,
  comments_count: 122,
  has_liked: false,
  photo_urls: [
    'https://images.twgreatdaily.com/images/image/_tV/_tVk3nEBnkjnB-0zz829.jpg',
    'https://cdn.vox-cdn.com/thumbor/CJaRzQSNR_0TysD9YM6GN68XZdo=/0x0:1750x941/920x613/filters:focal(878x316:1158x596):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/63823444/original.0.jpg',
  ],
};

const defaultData = [];

for (let i = 0; i < 100; i += 1) {
  if (Math.random() < 0.5) {
    defaultData.push(tweet1);
  } else {
    defaultData.push(tweet);
  }
}
const cache = new CellMeasurerCache({
  fixedWidth: true,
  minHeight: 200,
});

const noRowsRenderer = () => 'Loading...';

/**
* tweet page
*/
const Tweets = () => {
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    const init = async () => {
      const res = await getFeeds();
      setData(res);
    };
    init();
  }, []);

  const rowRenderer = ({
    key, style: sy, index, parent,
  }) => (
    <CellMeasurer
      cache={cache}
      columnIndex={0}
      key={key}
      rowIndex={index}
      parent={parent}
    >
      {({ registerChild }) => (
        <div style={sy} key={key} ref={registerChild}>
          <TweetCard dataSource={data[index]} />
        </div>
      )}
    </CellMeasurer>
  );
  const handleLoadMore = async () => {
    const res = await getFeeds();
    setData((d) => [...d, ...res]);
    if (res.length === 0) {
      setHasMore(false);
    }
  };

  return (
    <div className={style.container}>
      <PullToRefresh
        onRefresh={async () => {
          const res = await getFeeds();
          setData((d) => [...d, ...res]);
        }}
      >
        <WindowScroller>
          {({
            height, width, isScrolling, registerChild, onChildScroll, scrollTop,
          }) => (
            <div ref={registerChild}>
              <List
                isScrolling={isScrolling}
                onScroll={onChildScroll}
                scrollTop={scrollTop}
                autoHeight
                height={height}
                deferredMeasurementCache={cache}
                rowHeight={cache.rowHeight}
                overscanRowCount={2}
                noRowsRenderer={noRowsRenderer}
                rowCount={data.length}
                rowRenderer={rowRenderer}
                width={width}
              />
            </div>
          )}
        </WindowScroller>
      </PullToRefresh>
      <InfiniteScroll loadMore={handleLoadMore} hasMore={hasMore} />
    </div>
  );
};

export default Tweets;
