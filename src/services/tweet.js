import { post } from '../utils/request';

// create comment
export const createTweet = (params) => post('/api/tweets', params);
