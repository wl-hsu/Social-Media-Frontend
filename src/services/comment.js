import { post } from '../utils/request';

// create comment
export const createComment = (params) => post('/api/comments', params);

// like interface
export const likes = (params) => post('/api/likes', params);

// unlike interface
export const cancelLike = (params) => post('/api/likes/cancel', params);
