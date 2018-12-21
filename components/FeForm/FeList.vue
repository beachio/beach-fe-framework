<template>
  <div class="fe-list">
    <div
      :class="{selected: selected(item)}"
      class="fe-list__item"
      v-for="item in list"
      :key="item.id"
      @click="select(item)"
    >
      <div class="fe-list__item-label">{{item.text}}</div>
      <div class="fe-list__item-selected">
        <i class="icon-Check"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeList",
  props: {
    value: {
      type: Array,
      default() {
        return [];
      }
    },
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    select(item) {
      if (this.value.includes(item.id)) {
        const items = this.value.filter(val => val != item.id);
        this.$emit("input", items);
      } else {
        const items = [...this.value, item.id];
        this.$emit("input", items);
      }
    },
    selected(item) {
      return this.value.includes(item.id);
    }
  }
};
</script>

<style scoped>
.fe-list {
  border-radius: 20px;
  background: white;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05), 0 1px 10px rgba(0, 0, 0, 0.05);
}
.fe-list__item {
  font-size: 14px;
  color: #313133;
  padding: 0 16px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 250px;
  cursor: pointer;
  border-radius: 20px;
}
.fe-list__item:hover {
  color: #297ad6;
  background: white;
}

.fe-list__item.selected >>> .fe-list__item-selected {
  display: block;
}

.fe-list__item-selected {
  color: #297ad6;
  font-size: 20px;
  display: none;
}
</style>
