const store = {
  namespaced: true,
  state: {
    theme: "light"
  },
  mutations: {
    setTheme(state, theme) {
      state.theme = theme;
    }
  },
  actions: {
    setTheme({ commit }, theme) {
      commit("setTheme", theme);
    }
  },
  getters: {
    theme(state) {
      return state.theme;
    }
  }
};

export default store;
