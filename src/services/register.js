import { post, put } from '@utils/request';

// eslint-disable-next-line import/prefer-default-export
export const registerUser = (params) => post('/api/accounts/signup', params);

export const editUser = (userId, params) => put(`/api/profiles/${userId}`, params);
