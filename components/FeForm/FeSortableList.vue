<template>
  <div class="fe-sortable-list">
    <draggable v-model="localValue">
      <div class="fe-sortable-list__item" v-for="item in localValue" :key="item.id">
        <div class="fe-sortable-list__item-label">{{item.text}}</div>
        <FeIcon size="18" name="Grabber"/>
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  name: "FeSortableList",
  components: {
    draggable
  },
  props: {
    value: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      localValue: this.value
    };
  },
  watch: {
    localValue: {
      handler() {
        this.$emit("input", this.localValue);
      },
      deep: true
    },
    value: {
      handler() {
        if (JSON.stringify(this.localValue) != JSON.stringify(this.value)) {
          this.localValue = this.value;
        }
      },
      deep: true
    }
  }
};
</script>

<style scoped>
.fe-sortable-list {
  border-radius: 20px;
  background: white;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05), 0 1px 10px rgba(0, 0, 0, 0.05);
}
.fe-sortable-list__item {
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
  cursor: move;
}
.fe-sortable-list__item:hover {
  color: #297ad6;
  background: white;
}
</style>
