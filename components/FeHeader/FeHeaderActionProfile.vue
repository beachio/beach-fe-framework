<template>
  <FeHeaderActionDropdown position="right">
    <template slot="main">
      <div>{{username}}</div>
      <div class="fe-header-action-profile__icon" :style="{backgroundImage: `url(${avatar})`}"></div>
      <FeIcon name="Arrow---Down" size="12"></FeIcon>
    </template>
    <slot></slot>
  </FeHeaderActionDropdown>
</template>

<script>
export default {
  name: "FeHeaderActionProfile",
  created() {
    this.$on("setOpened", value => {
      this.$parent.$emit("setOpened", value);
    });
  },
  props: {
    username: {
      type: String,
      default: "Username"
    },
    avatar: {
      type: String,
      default: ""
    }
  }
};
</script>


<style scoped>
.fe-header-action-profile__icon {
  height: 40px;
  width: 40px;
  background: #a4a4ae;
  border-radius: 40px;
  margin: 0 10px;
  background-size: cover;
  background-position: center center;
}
</style>
