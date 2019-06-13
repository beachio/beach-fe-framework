import Vue from "vue";

const User = () => {
  const { RESOURCES_URL } = Vue.prototype.$feCreadentials

  return Vue.resource(
    `${RESOURCES_URL}/v1/users`,
    {},
    {
      current: { method: "GET", url: `${RESOURCES_URL}/v1/user`, bearer: true }
    }
  );
}

export default User;
