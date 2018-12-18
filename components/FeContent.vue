<template>
  <div class="fe-content" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FeContent",
  computed: {
    classes() {
      return [`fe-content--${this.$feStore.getters["application/theme"]}`];
    }
  }
};
</script>


<style scoped>
.fe-content {
  position: absolute;
  top: 70px;
  left: 360px;
  right: 0;
  bottom: 0;
  z-index: 5;
  padding: 20px;
  overflow: auto;
}

.fe-content--light {
  background: #f8f8f8;
  color: black;
}

.fe-content--dark {
  background: #2c2c30;
  color: white;
}
</style>
