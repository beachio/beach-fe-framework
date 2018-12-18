<template>
  <div style="display: inline-block">
    <div class="fe-button" :class="classes" @click="$emit('click')">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeButton",
  props: {
    color: {
      type: String,
      default: "white"
    },
    size: {
      type: String,
      default: "small"
    }
  },
  computed: {
    classes() {
      return [`fe-button--${this.color}`, `fe-button--${this.size}`];
    }
  }
};
</script>

<style scoped>
.fe-button {
  border-radius: 8px 20px 20px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  padding: 0 20px;
  cursor: pointer;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05), 0 1px 10px rgba(0, 0, 0, 0.05);
  transition: 0.2s;
  white-space: nowrap;
  min-width: 135px;
}

.fe-button--small {
  min-height: 32px;
}

.fe-button--large {
  min-height: 40px;
}

.fe-button--white {
  background: white;
  color: black;
}

.fe-button--white:hover {
  background: white;
  color: #3e8bed;
}

.fe-button--gray {
  background: #3b3b40;
  color: white;
}

.fe-button--gray:hover {
  background: #5d5d5d;
  color: white;
}

.fe-button--blue {
  background: #297ad6;
  color: white;
}

.fe-button--blue:hover {
  background: #3e8bed;
  color: white;
}
</style>
