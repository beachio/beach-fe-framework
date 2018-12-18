<template>
  <div class="fe-header-nav">
    <div v-for="(item, index) in items" :key="index">
      <FeHeaderNavItem :item="item"/>
    </div>
  </div>
</template>

<script>
import FeHeaderNavItem from "./FeHeaderNavItem";

export default {
  name: "FeHeaderNav",
  components: {
    FeHeaderNavItem
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
.fe-header-nav {
  height: 70px;
  display: flex;
  flex-direction: row;
}
</style>
