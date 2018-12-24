import { Organisation } from "../../resources";

const store = {
  namespaced: true,
  state: {
    list: [],
    current: null
  },
  mutations: {
    setList(state, organisations) {
      state.list = organisations;
    },
    setCurrent(state, organisation) {
      state.current = organisation;
    },
    add(state, organisation) {
      state.list.push(organisation);
    }
  },
  actions: {
    setList({ commit }, organisations) {
      commit("setList", organisations);
    },
    fetchAll() {
      return new Promise((resolve, reject) => {
        Organisation.get().then(
          response => {
            const { organisations } = response.body;
            resolve(organisations);
          },
          errResponse => {
            resolve(errResponse.body);
          }
        );
      });
    },
    setCurrent({ commit }, organisation) {
      const { id } = organisation || { id: 0 };
      return new Promise((resolve, reject) => {
        Organisation.setCurrent({ id }, {}).then(response => {
          resolve(organisation);
          commit("setCurrent", organisation);
        });
      });
    },
    fetchCurrent() {
      return new Promise((resolve, reject) => {
        Organisation.getCurrent({ id }, {}).then(response => {
          resolve(response.organisation);
        });
      });
    },
    create({ commit, dispatch }, { name }) {
      return new Promise((resolve, reject) => {
        Organisation.save({ name }).then(
          response => {
            const { organisation } = response.body;
            commit("add", organisation);
            dispatch("setCurrent", organisation).then(() =>
              resolve(organisation)
            );
          },
          errResponse => {
            resolve(errResponse.body);
          }
        );
      });
    }
  },
  getters: {
    list(state) {
      return state.list;
    },
    current(state) {
      return state.current;
    }
  }
};

export default store;
