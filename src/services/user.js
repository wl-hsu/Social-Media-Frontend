import { get, post, put } from '@utils/request';

/**
 * edit user information
 * @param {*} userId
 * @param {*} params
 */
export const editUser = (userId, params) => put(`/api/profiles/${userId}`, params);

// follow a user
export const followUser = (userId) => post(`/api/friendships/${userId}/follow`);

// unfollow a user
export const unFollowUser = (userId) => post(`/api/friendships/${userId}/unfollow`);

// get followers
export const getFollowers = (userId) => get(`/api/friendships/${userId}/followers`);

// get my follow
export const getFollowings = (userId) => get(`/api/friendships/${userId}/followings`);
