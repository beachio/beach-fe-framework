<template>
  <div class="fe-header-action" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FeHeaderAction",
  data() {
    return {
      active: false
    };
  },
  created() {
    this.$on("setOpened", value => {
      this.active = value;
    });
  },
  computed: {
    classes() {
      return [
        `fe-header-action--${this.$feStore.getters["application/theme"]}`,
        { active: this.active }
      ];
    }
  }
};
</script>


<style scoped>
.fe-header-action {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  cursor: pointer;
  font-size: 14px;
  position: relative;
  color: #a4a4ae;
}

.fe-header-action--light {
  border-left: 1px solid #f2f2f2;
}

.fe-header-action.active {
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.08);
}
.fe-header-action--dark {
  border-left: 1px solid #57575c;
}

.fe-header-action > :global(div) {
  padding: 0 20px;
}

.fe-header-action--light:hover,
.fe-header-action--light.active {
  background: #f8f8f8;
}

.fe-header-action--dark:hover,
.fe-header-action--dark.active {
  background: rgba(255, 255, 255, 0.08);
}

.fe-header-action--light:hover,
.fe-header-action--light.active,
.fe-header-action--light:hover >>> [class*="icon-"]:before,
.fe-header-action--light.active >>> [class*="icon-"]:before {
  color: #333;
}

.fe-header-action--dark:hover,
.fe-header-action--dark.active,
.fe-header-action--dark:hover >>> [class*="icon-"]:before,
.fe-header-action--dark.active >>> [class*="icon-"]:before {
  color: #fff;
}
</style>
