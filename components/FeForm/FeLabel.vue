<template>
  <div class="fe-label">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FeLabel"
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
</style>
