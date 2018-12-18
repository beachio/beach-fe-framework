<template>
  <div class="fe-sidebar-nav">
    <FeSidebarNavItem :item="item" v-for="(item, index) in items" :key="index"/>
  </div>
</template>

<script>
import FeSidebarNavItem from "./FeSidebarNavItem";
export default {
  name: "FeSidebarNav",
  components: {
    FeSidebarNavItem
  },
  props: {
    items: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.fe-sidebar-nav {
  padding: 40px;
  color: white;
}
</style>
