// import { apiAddQuestion } from '../../api/question';

const auth = {
  state: {
    questions: [],
  },
  getters: {
    getQuestions(state) {
      return state.questions;
    },
  },
  mutations: {
    SET_QUESTIONS(state, questins) {
      state.questins = questins;
    },
  },
  actions: {},
};

export default auth;
