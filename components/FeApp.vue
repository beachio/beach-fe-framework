<template>
  <div class="fe-app" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FeApp",
  computed: {
    classes() {
      return {
        "with-sidebar": this.$feStore.getters["sidebar/opened"]
      };
    }
  }
};
</script>


<style scoped>
.fe-app {
  font-family: "Inter UI";
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  left: -360px;
  transition: 0.3s;
  overflow: hidden;
}

.fe-app.with-sidebar {
  left: 0;
}
</style>

<style>
* {
  box-sizing: border-box;
}

.fe-sidebar .fe-sidebar-toggle {
  display: none;
}

@media only screen and (max-width: 1100px) {
  .fe-app {
    left: 0 !important;
  }
  .fe-header,
  .fe-content {
    left: 0 !important;
  }

  .fe-app.with-sidebar .fe-sidebar {
    left: 0;
  }

  .fe-app:not(.with-sidebar) .fe-sidebar {
    left: -360px;
  }

  .fe-sidebar {
    box-shadow: 5px 0 10px rgba(0, 0, 0, 0.2);
  }
  .fe-sidebar .fe-sidebar-toggle {
    display: block;
  }
}
</style>
