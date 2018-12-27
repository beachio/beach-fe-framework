<template>
  <div class="fe-label" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FeLabel",
  computed: {
    classes() {
      return [`fe-label--${this.$feStore.getters["application/theme"]}`];
    }
  }
};
</script>

<style scoped>
.fe-label {
  margin-bottom: 8px;
  font-size: 14px;
  width: 100%;
  color: #2c2c30;
  cursor: default;
}

.fe-label--light {
  color: white;
}
</style>
