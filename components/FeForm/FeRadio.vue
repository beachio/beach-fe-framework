<template>
  <div style="display: inline-block">
    <div class="fe-radio">
      <PrettyRadio
        v-model="localValue"
        :name="name"
        class="p-default p-round p-thick"
        :value="currentValue"
        color="primary-o"
      >
        <slot></slot>
      </PrettyRadio>
    </div>
  </div>
</template>

<script>
import PrettyRadio from "pretty-checkbox-vue/radio";
export default {
  name: "FeRadio",
  components: {
    PrettyRadio
  },
  props: {
    value: {},
    name: String
  },
  created() {
    this.currentValue = this.$attrs.value;
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
  margin-bottom: 10px;
}
</style>
