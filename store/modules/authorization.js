import Authorize from "../../resources/Authorize";

const store = {
  namespaced: true,
  state: {
    token: localStorage["token"]
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage["token"] = token;
    },
    deleteToken(state) {
      state.token = null;
      delete localStorage["token"];
    }
  },
  actions: {
    login({ commit }, { email, password }) {
      return new Promise((resolve, reject) => {
        const params = {
          session: {
            email,
            password
          }
        };
        Authorize()
          .login(params)
          .then(
            response => {
              const token = response.body.access_token;
              commit("setToken", token);
              resolve(token);
            },
            errResponse => reject(errResponse)
          );
      });
    },
    register({ commit }, { email, password, username }) {
      return new Promise((resolve, reject) => {
        const params = {
          user: {
            email,
            password,
            username
          }
        };

        Authorize()
          .register(params)
          .then(
            response => {
              const token = response.body.access_token;
              commit("setToken", token);
              resolve(token);
            },
            errResponse => reject(errResponse)
          );
      });
    },
    signOut({ commit }) {
      commit("deleteToken");
    }
  },
  getters: {
    token(state) {
      return state.token;
    }
  }
};

export default store;
