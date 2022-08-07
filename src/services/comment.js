import { post } from '../utils/request';

// create comment
export const createComment = (params) => post('/api/comments', params);
