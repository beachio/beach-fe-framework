<template>
  <div style="display: inline-block">
    <div class="fe-switch">
      <PrettySwitch class="p-switch p-fill" v-model="localValue" color="primary">
        <slot></slot>
      </PrettySwitch>
    </div>
  </div>
</template>

<script>
import PrettySwitch from "pretty-checkbox-vue/check";
export default {
  name: "FeSwitch",
  components: {
    PrettySwitch
  },
  props: {
    value: Boolean,
    name: String
  },
  data() {
    return {
      localValue: this.value
    };
  },
  watch: {
    localValue() {
      this.$emit("input", this.localValue);
    },
    value() {
      if (this.localValue != this.value) {
        this.localValue = this.value;
      }
    }
  }
};
</script>

<style scoped>
.fe-radio {
}
</style>
