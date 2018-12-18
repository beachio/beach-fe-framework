<template>
  <div class="fe-text-field">
    <FeLabel v-if="label">{{label}}</FeLabel>
    <input :type="type" :value="value" @input="input" :placeholder="placeholder">
  </div>
</template>

<script>
export default {
  name: "FeButton",
  props: {
    value: String,
    placeholder: String,
    type: {
      type: String,
      default: "text"
    },
    label: String
  },
  methods: {
    input(e) {
      this.$emit("input", e.target.value);
    }
  }
};
</script>

<style scoped>
.fe-text-field {
  width: 100%;
}
.fe-text-field input {
  border-radius: 20px;
  height: 40px;
  padding: 0 16px;
  border: none;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: inset 0 1px 10px rgba(0, 0, 0, 0.1);
  outline: none;
  font-size: 14px;
  color: #313133;
  width: 100%;
}
.fe-text-field input:focus {
  border-color: #dfebf9;
  color: #3e8bed;
  box-shadow: inset 0 1px 10px rgba(62, 139, 237, 0.1);
}
</style>
