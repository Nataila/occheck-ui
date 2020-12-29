/**
* @description
*   + description
# cc @ 2019-07-31 12:24:25
*/


export const BASE_URL = process.env.REACT_APP_API_URI;

export const API = {
  SIGNIN: '/account/signin/',
  SIGNUP: '/account/signup/',
  TASK_NEW: '/tasks/new/',
  TASK_LIST: '/tasks/list/',
  MY_PROFILE: '/account/me',
  COMMENTS: {
    LIST: '/comments/list/',
    NEW: '/comments/new/',
  },
  ACCOUNT_BUY: '/account/buy',
};
