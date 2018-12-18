<template>
  <div class="fe-header" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FeHeader",
  computed: {
    classes() {
      return [`fe-header--${this.$feStore.getters["application/theme"]}`];
    }
  }
};
</script>


<style scoped>
.fe-header {
  height: 70px;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05);
  z-index: 6;
  position: absolute;
  left: 360px;
  top: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.fe-header--light {
  background: white;
}

.fe-header--dark {
  background: #44444a;
}
</style>
