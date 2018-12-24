import { User } from "../../resources";

const store = {
  namespaced: true,
  state: {
    current: null
  },
  mutations: {
    set(state, user) {
      state.current = user;
    }
  },
  actions: {
    fetch() {
      return new Promise((resolve, reject) => {
        User()
          .current()
          .then(
            response => resolve(response.body.user || response.body),
            errResponse => reject(errResponse.body)
          );
      });
    },
    set({ commit }, user) {
      commit("set", user);
    }
  },
  getters: {
    current(state) {
      return state.current;
    }
  }
};

export default store;
