import { Authorize } from "../../resources";
import Vue from "vue";

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
    login({ commit }, { email, password, creadentials }) {
      const { APPLICATION_ID, APPLICATION_SECRET } =
        Vue.prototype.$feCreadentials || creadentials;

      return new Promise((resolve, reject) => {
        const params = {
          session: {
            email,
            password
          }
        };
        Authorize({
          headers: {
            AUTHORIZATION: `application_id ${APPLICATION_ID}, client_secret ${APPLICATION_SECRET}`
          }
        })
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
    register({ commit }, { email, password, username, creadentials }) {
      const { APPLICATION_ID, APPLICATION_SECRET } =
        Vue.prototype.$feCreadentials || creadentials;

      return new Promise((resolve, reject) => {
        const params = {
          user: {
            email,
            password,
            username
          }
        };

        Authorize({
          headers: {
            AUTHORIZATION: `application_id ${APPLICATION_ID}, client_secret ${APPLICATION_SECRET}`
          }
        })
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
