import Vue from "vue";

export default ({ headers = {} }) =>
  Vue.resource(
    "v1/users",
    {},
    {
      login: {
        method: "POST",
        url: "v1/auth",
        headers
      },
      register: {
        method: "POST",
        url: "v1/users",
        headers
      }
    }
  );
