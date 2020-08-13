import { apiFetchCategories } from '@/api/common';

const categories = {
  state: {
    categories: [],
  },
  getters: {
    getCategories(state) {
      return state.categories;
    },
  },
  mutations: {
    SET_CATEGORIES(state, { categories }) {
      state.categories = categories;
    },
  },
  actions: {
    FETCH_CATEGORIES({ commit }) {
      return apiFetchCategories().then(res => {
        const { data } = res;
        const { categories } = data;
        commit('SET_CATEGORIES', { categories });
        return res;
      });
    },
  },
};

export default categories;
