<template>
  <div :class="'icon-'+name" :style="{fontSize: size+'px'}"></div>
</template>

<script>
export default {
  name: "FeIcon",
  props: {
    size: {
      type: [Number, String],
      default: 16
    },
    name: String
  }
};
</script>
