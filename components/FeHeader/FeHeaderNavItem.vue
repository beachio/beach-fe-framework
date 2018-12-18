<template>
  <div class="fe-header-nav-item" :class="classes" @click="setRoute">
    <div>{{item.title}}</div>
  </div>
</template>
<script>
export default {
  name: "FeHeaderNavItem",
  props: {
    item: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      active: false
    };
  },
  watch: {
    $route: {
      handler(to, from) {
        if (typeof this.item.route == "string") {
          this.active = this.$router.currentRoute.matched[0].regex.test(
            this.item.route
          );
        } else if (typeof this.item.route == "object") {
          this.active = this.$router.currentRoute.name == this.item.route.name;
        }
      },
      immediate: true
    }
  },
  computed: {
    classes() {
      return [
        `fe-header-nav-item--${this.$feStore.getters["application/theme"]}`,
        {
          active: this.active
        }
      ];
    }
  },
  methods: {
    setRoute() {
      this.$router.push(this.item.route);
    }
  }
};
</script>


<style scoped>
.fe-header-nav-item {
  height: 100%;
  padding: 0 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.2s;
  position: relative;
  color: #a4a4ae;
  font-size: 14px;
}

.fe-header-nav-item--light:hover,
.fe-header-nav-item--light.active {
  color: #000;
}

.fe-header-nav-item--dark:hover,
.fe-header-nav-item--dark.active {
  color: white;
}

.fe-header-nav-item:after {
  content: "";
  position: absolute;
  bottom: 0;
  height: 2px;
  left: 0;
  right: 0;
}

.fe-header-nav-item--light.active:after {
  background: black;
}

.fe-header-nav-item--dark.active:after {
  background: white;
}
</style>
