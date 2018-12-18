<template>
  <div class="fe-textarea">
    <FeLabel v-if="label">{{label}}</FeLabel>
    <textarea autosize :value="value" @input="input" :placeholder="placeholder"></textarea>
  </div>
</template>

<script>
import autosize from "autosize";
export default {
  name: "FeButton",
  props: {
    value: String,
    placeholder: String,
    label: String
  },
  methods: {
    input(e) {
      this.$emit("input", e.target.value);
      autosize(e.target);
    }
  }
};
</script>

<style scoped>
.fe-textarea {
  width: 100%;
}
.fe-textarea textarea {
  border-radius: 20px;
  padding: 16px;
  border: none;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: inset 0 1px 10px rgba(0, 0, 0, 0.1);
  outline: none;
  font-size: 14px;
  color: #313133;
  width: 100%;
}
.fe-textarea textarea:focus {
  border-color: #dfebf9;
  color: #3e8bed;
  box-shadow: inset 0 1px 10px rgba(62, 139, 237, 0.1);
}
</style>
