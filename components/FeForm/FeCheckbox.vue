<template>
  <div style="display: inline-block">
    <div class="fe-checkbox">
      <PrettyCheck class="p-icon p-curve" v-model="localValue" color="primary">
        <i slot="extra" class="icon icon-Check"></i>
        <slot></slot>
      </PrettyCheck>
    </div>
  </div>
</template>

<script>
import PrettyCheck from "pretty-checkbox-vue/check";
export default {
  name: "FeCheckbox",
  components: {
    PrettyCheck
  },
  props: {
    value: Boolean
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
.fe-checkbox {
  margin-bottom: 10px;
}
</style>
