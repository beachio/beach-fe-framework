import Vue from "vue";

export default function(creadentials = {}) {
  const { APPLICATION_ID, APPLICATION_SECRET } =
    Vue.prototype.$feCreadentials || creadentials;

  return Vue.resource(
    "v1/users",
    {},
    {
      login: {
        method: "POST",
        url: "v1/auth",
        headers: {
          AUTHORIZATION: `application_id ${APPLICATION_ID}, client_secret ${APPLICATION_SECRET}`
        }
      },
      register: {
        method: "POST",
        url: "v1/users",
        headers: {
          AUTHORIZATION: `application_id ${APPLICATION_ID}, client_secret ${APPLICATION_SECRET}`
        }
      }
    }
  );
}
