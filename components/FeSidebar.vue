<template>
  <div class="fe-sidebar">
    <FeSidebarToggle></FeSidebarToggle>
    <div class="fe-sidebar__header-sep"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>

<style scoped>
.fe-sidebar {
  width: 360px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  background: #1a1a1c;
  z-index: 6;
  transition: 0.3s;
}

.fe-sidebar__header-sep {
  position: absolute;
  top: 70px;
  left: 0;
  right: 0;
  border-bottom: 1px solid #313133;
}

.fe-sidebar :global(.fe-sidebar-toggle) {
  position: absolute;
  right: 0;
  top: 25px;
  color: white !important;
}
</style>
