import store from '../../store/index';
import {
  getAccessTokenCookie,
  getRefreshTokenCookie,
} from '../../utils/cookies';

const setInterceptor = instance => {
  instance.interceptors.request.use(
    config => {
      config.headers.Authorization =
        store.getters.getAccessToken || getAccessTokenCookie();

      config.headers.refresh_token =
        store.getters.getRefreshToken || getRefreshTokenCookie();
      return config;
    },
    error => Promise.reject(error),
  );
  instance.interceptors.response.use(
    config => {
      return config;
    },
    async error => {
      if (
        error.response.status === 401 &&
        error.response.data.code === '10004'
      ) {
        try {
          await store.dispatch('NEW_TOKEN');
        } catch (error) {
          if (error.response) {
            console.log(error.response);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log(error.message);
          }
          console.log(error.config);
          store.commit('SET_INIT');
        }
      }

      return Promise.reject(error);
    },
  );
  return instance;
};

export default setInterceptor;
