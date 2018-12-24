import Vue from "vue";

const Organisation = () =>
  Vue.resource(
    "v1/organisations",
    {},
    {
      setCurrent: {
        method: "PUT",
        url: "v1/organisations{/id}/current"
      },
      getCurrent: {
        method: "GET",
        url: "v1/organisations/get_current"
      }
    }
  );

export default Organisation;
