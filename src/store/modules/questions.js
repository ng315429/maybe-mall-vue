import { apiFetchQuestions, apiFetchAuthQuestions } from '../../api/questions';

const questions = {
  state: {
    questions: [],
    authQuestions: [],
  },
  getters: {
    getQuestions(state) {
      return state.questions;
    },
    getAuthQuestions(state) {
      return state.authQuestions;
    },
  },
  mutations: {
    SET_QUESTIONS(state, { questions, init }) {
      if (init) {
        state.questions = questions;
      } else {
        state.questions.push(...questions);
      }
    },
    SET_AUTH_QUESTIONS(state, { questions, init }) {
      if (init) {
        state.authQuestions = questions;
      } else {
        state.authQuestions.push(...questions);
      }
    },
  },
  actions: {
    FETCH_QUESTIONS({ commit }, { page, init }) {
      return apiFetchQuestions(page).then(res => {
        const { data } = res;
        commit('SET_QUESTIONS', { questions: data.questions, init: init });
        return res;
      });
    },
    FETCH_QUESTIONS_AUTH({ commit }, { page, init }) {
      return apiFetchAuthQuestions(page).then(res => {
        const { data } = res;
        commit('SET_AUTH_QUESTIONS', { questions: data.questions, init: init });
        return res;
      });
    },
  },
};

export default questions;
