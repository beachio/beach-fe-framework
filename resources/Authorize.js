import Vue from "vue";

export default ({ headers = {} }) => {
  const { RESOURCES_URL } = Vue.prototype.$feCreadentials

  return Vue.resource(
    `${RESOURCES_URL}/v1/users`,
    {},
    {
      login: {
        method: "POST",
        url: `${RESOURCES_URL}/v1/auth`,
        headers
      },
      register: {
        method: "POST",
        url: "v1/users",
        headers
      }
    }
  );
}
