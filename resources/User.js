import Vue from "vue";

const User = () =>
  Vue.resource(
    "v1/users",
    {},
    {
      current: { method: "GET", url: "v1/user", bearer: true }
    }
  );

export default User;
