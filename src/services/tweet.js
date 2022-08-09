import { post, get } from '../utils/request';

// create comment
export const createTweet = (params) => post('/api/tweets', params);

// get feeds data
export const getFeeds = () => get('/api/newsfeeds').then((res) => {
  if (res.data && res.data.length > 0) {
    return res.data.map((item) => ({ ...item.tweet }));
  }
  return [];
});
