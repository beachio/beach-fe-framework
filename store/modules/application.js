const store = {
  namespaced: true,
  state: {
    loaded: false,
    theme: "light"
  },
  mutations: {
    setTheme(state, theme) {
      state.theme = theme;
    },
    loaded(state) {
      state.loaded = true;
    }
  },
  actions: {
    setTheme({ commit }, theme) {
      commit("setTheme", theme);
    },
    loaded({ commit }) {
      commit("loaded");
    }
  },
  getters: {
    theme(state) {
      return state.theme;
    },
    loaded(state) {
      return state.loaded;
    }
  }
};

export default store;
