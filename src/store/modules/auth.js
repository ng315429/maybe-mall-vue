import {
  getAccessTokenCookie,
  getRefreshTokenCookie,
  getUserNameCookie,
  getNameCookie,
  setAccessTokenCookie,
  setRefreshTokenCookie,
  setUserNameCookie,
  setNameCookie,
} from '../../utils/cookies';

import { apiRefreshToken, apiAccessToken } from '../../api/auth';

const auth = {
  state: {
    accessToken: '',
    refreshToken: '',
    userName: '',
    name: '',
  },
  getters: {
    getAccessToken(state) {
      return state.accessToken || getAccessTokenCookie();
    },
    getRefreshToken(state) {
      return state.refreshToken || getRefreshTokenCookie();
    },
    getUserName(state) {
      return state.userName || getUserNameCookie();
    },
    getName(state) {
      return state.name || getNameCookie();
    },
  },
  mutations: {
    SET_ACCESS_TOKEN(state, token) {
      state.accessToken = token;
      setAccessTokenCookie(token);
    },
    SET_REFRESH_TOKEN(state, token) {
      state.refreshToken = token;
      setRefreshTokenCookie(token);
    },
    SET_USER_NAME(state, userName) {
      state.userName = userName;
      setUserNameCookie(userName);
    },
    SET_NAME(state, name) {
      state.name = name;
      setNameCookie(name);
    },
  },
  actions: {
    NEW_TOKEN({ state, commit }) {
      return apiRefreshToken().then(res => {
        if (res.data) {
          commit('SET_ACCESS_TOKEN', res.data.access_token);
          commit('SET_REFRESH_TOKEN', res.data.refresh_token);
          commit('SET_USER_NAME', res.data.username);
          commit('SET_NAME', res.data.name);
        }
        return res;
      });
    },
    ACCESS_TOKEN({ state, commit }, payLoad) {
      return apiAccessToken(payLoad).then(res => {
        if (res.data) {
          commit('SET_ACCESS_TOKEN', res.data.access_token);
          commit('SET_REFRESH_TOKEN', res.data.refresh_token);
          commit('SET_USER_NAME', res.data.username);
          commit('SET_NAME', res.data.name);
        }
        return res;
      });
    },
  },
};

export default auth;
