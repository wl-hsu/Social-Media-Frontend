import { Toast } from 'antd-mobile';
import axios from 'axios';

const domain = 'http://localhost:3333';

// To convert the parameters before the interface request
// mainly add a unified domain
axios.interceptors.request.use((config) => ({
  ...config,
  url: domain + config.url,
}));

// for intercepting the returned results
// 1. data conversion
// 2. error handling
axios.interceptors.response.use((response) => response.data, () => {
  Toast.show('service call failure');
});

// get
export const get = (url) => axios.get(url);

// post
export const post = (url, params) => axios.post(url, params);

// put
export const put = (url, params) => axios.put(url, params);

// delete
export const del = (url, params) => axios.del(url, params);
