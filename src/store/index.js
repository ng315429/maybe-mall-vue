import Vue from 'vue';
import Vuex from 'vuex';

import auth from './modules/auth';
import questions from './modules/questions';
import { deleteCookie } from '../utils/cookies';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    questions,
  },
  state: {},
  mutations: {
    SET_INIT(state) {
      state.auth.accessToken = '';
      state.auth.refreshToken = '';
      state.auth.userName = '';
      state.auth.name = '';

      deleteCookie('access_token');
      deleteCookie('refresh_token');
      deleteCookie('user_name');
      deleteCookie('name');

      location.href = '/';
    },
  },
  actions: {},
});
