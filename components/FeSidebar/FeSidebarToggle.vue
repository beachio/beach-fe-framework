<template>
  <div class="fe-sidebar-toggle" @click="click" :class="classes">
    <span class="icon-Sidebar"></span>
  </div>
</template>

<script>
export default {
  name: "FeSideBarToggle",
  methods: {
    click() {
      this.$feStore.dispatch("sidebar/toggle");
    }
  },
  computed: {
    classes() {
      return [
        `fe-sidebar-toggle--${this.$feStore.getters["application/theme"]}`,
        { active: this.$feStore.getters["sidebar/opened"] }
      ];
    }
  }
};
</script>


<style scoped>
.fe-sidebar-toggle {
  height: 20px;
  width: 20px;
  margin: 0 20px;
  cursor: pointer;
  font-size: 20px;
  transition: 0.2s;
}

.fe-sidebar-toggle--light {
  color: #a4a4ae;
}

.fe-sidebar-toggle--light.active,
.fe-sidebar-toggle--light:hover {
  color: black;
}

.fe-sidebar-toggle--dark {
  color: rgba(255, 255, 255, 0.5);
}

.fe-sidebar-toggle--dark.active,
.fe-sidebar-toggle--dark:hover {
  color: white;
}
</style>
