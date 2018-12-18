<template>
  <div class="fe-header-action-dropdown" @click.stop="toggle" :class="classes">
    <div class="fe-header-action-dropdown__main">
      <slot name="main"></slot>
    </div>
    <div class="fe-header-action-dropdown__list" v-if="opened">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeHeaderActionDropdown",
  props: {
    position: {
      type: String,
      default: "left"
    }
  },
  mounted() {
    document.body.addEventListener("click", () => {
      this.opened = false;
    });

    this.$root.$on("closeHeaderDropdowns", uid => {
      if (this._uid != uid) {
        this.opened = false;
      }
    });
  },
  data() {
    return {
      opened: false
    };
  },
  computed: {
    classes() {
      return [
        `fe-header-action-dropdown--${
          this.$feStore.getters["application/theme"]
        }`,
        `fe-header-action-dropdown--${this.position}`,
        {
          opened: this.opened
        }
      ];
    }
  },
  methods: {
    toggle() {
      this.$root.$emit("closeHeaderDropdowns", this._uid);
      this.opened = !this.opened;
    }
  },
  watch: {
    opened() {
      this.$parent.$emit("setOpened", this.opened);
    }
  }
};
</script>


<style scoped>
.fe-header-action-dropdown {
  height: 100%;
  width: 100%;
}

.fe-header-action-dropdown__main {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.fe-header-action-dropdown__list {
  position: absolute;
  background: white;
  min-width: calc(100% + 1px);
  top: 100%;
  box-shadow: -3px 3px 5px rgba(0, 0, 0, 0.08);
}

.fe-header-action-dropdown--light .fe-header-action-dropdown__list {
  background: white;
}

.fe-header-action-dropdown--dark .fe-header-action-dropdown__list {
  background: #535358;
}

.fe-header-action-dropdown--left .fe-header-action-dropdown__list {
  left: 0;
}

.fe-header-action-dropdown--right .fe-header-action-dropdown__list {
  right: 0;
}

.fe-header-action-dropdown--center .fe-header-action-dropdown__list {
  left: 50%;
  transform: translate(-50%);
}
</style>
