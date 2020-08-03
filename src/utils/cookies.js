import cookies from 'vue-cookies';

const setAccessTokenCookie = (value, expired) => {
  if (expired) {
    cookies.set('access_token', value);
  } else {
    cookies.set('access_token', value, expired);
  }
};

const setRefreshTokenCookie = (value, expired) => {
  if (expired) {
    cookies.set('refresh_token', value);
  } else {
    cookies.set('refresh_token', value, expired);
  }
};

const setUserNameCookie = (value, expired) => {
  if (expired) {
    cookies.set('user_name', value);
  } else {
    cookies.set('user_name', value, expired);
  }
};
const setNameCookie = (value, expired) => {
  if (expired) {
    cookies.set('name', value);
  } else {
    cookies.set('name', value, expired);
  }
};

const getAccessTokenCookie = () => {
  // if (cookies.get('access_token') === null) {
  //   return '';
  // }
  return cookies.get('access_token');
};
const getRefreshTokenCookie = () => {
  // if (cookies.get('refresh_token') === null) {
  //   return '';
  // }
  return cookies.get('refresh_token');
};
const getUserNameCookie = () => {
  // if (cookies.get('user_name') === null) {
  //   return '';
  // }
  return cookies.get('user_name');
};
const getNameCookie = () => {
  // if (cookies.get('name') === null) {
  //   return '';
  // }
  return cookies.get('name');
};

const deleteCookie = value => {
  cookies.remove(value);
};

export {
  deleteCookie,
  getAccessTokenCookie,
  getRefreshTokenCookie,
  getUserNameCookie,
  getNameCookie,
  setAccessTokenCookie,
  setRefreshTokenCookie,
  setNameCookie,
  setUserNameCookie,
};
