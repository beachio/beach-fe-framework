<template>
  <div class="fe-form-row">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FeFormRow"
};
</script>

<style scoped>
.fe-form-row {
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  width: 100%;
}

.fe-form-row > * + * {
  margin-left: 20px;
}
</style>
