// import { apiAddQuestion } from '../../api/question';
import { apiFetchQuestions } from '../../api/questions';

const questions = {
  state: {
    questions: [],
  },
  getters: {
    getQuestions(state) {
      return state.questions;
    },
  },
  mutations: {
    SET_QUESTIONS(state, questions) {
      state.questions.push(...questions);
    },
  },
  actions: {
    FETCH_QUESTIONS({ commit }, page) {
      return apiFetchQuestions(page).then(res => {
        const { data } = res;
        commit('SET_QUESTIONS', data.questions);
        return res;
      });
    },
  },
};

export default questions;
