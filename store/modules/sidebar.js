const store = {
  namespaced: true,
  state: {
    opened: true
  },
  mutations: {
    open(state) {
      state.opened = true;
    },
    close(state) {
      state.opened = false;
    },
    toggle(state) {
      state.opened = !state.opened;
    }
  },
  actions: {
    open({ commit }) {
      commit("open");
    },
    close({ commit }) {
      commit("close");
    },
    toggle({ commit }) {
      commit("toggle");
    }
  },
  getters: {
    opened(state) {
      return state.opened;
    }
  }
};

export default store;
