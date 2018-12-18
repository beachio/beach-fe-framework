<template>
  <div class="fe-header-action-dropdown-item" :class="classes" @click="click">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FeHeaderActionDropdownItem",
  props: {
    to: [Object, String]
  },
  computed: {
    classes() {
      return [
        `fe-header-action-dropdown-item--${
          this.$feStore.getters["application/theme"]
        }`
      ];
    }
  },
  methods: {
    click() {
      if (this.to) {
        this.$router.push(this.to);
        this.$emit("click");
      }
    }
  }
};
</script>


<style scoped>
.fe-header-action-dropdown-item {
  display: flex;
  align-items: center;
  padding: 10px;
  white-space: nowrap;
}

.fe-header-action-dropdown-item:hover {
  background: #e7e7e7;
  color: black;
  cursor: pointer;
}
</style>
