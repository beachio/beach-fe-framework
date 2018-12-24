<template>
  <div class="fe-select" :class="{opened: opened}">
    <div class="fe-select__label" @click.stop="opened = !opened">
      <div>{{selectedItems.join('; ') || placeholder}}</div>
      <i class="icon-Disclosure-Down"></i>
    </div>
    <div class="fe-select__list" v-if="opened">
      <div
        :class="{selected: selected(item)}"
        class="fe-select__item"
        v-for="item in options"
        :key="item.id"
        @click="select(item)"
      >
        <div class="fe-select__item-label">{{item.text || item.name || item.title}}</div>
        <div class="fe-select__item-selected">
          <i class="icon-Check"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeSelect",
  props: {
    value: {
      type: Array,
      default() {
        return [];
      }
    },
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    multiple: {
      type: Boolean,
      default: false
    },
    placeholder: String
  },
  data() {
    return {
      opened: false
    };
  },
  created() {
    document.body.addEventListener("click", () => {
      this.opened = false;
    });
  },
  methods: {
    select(item) {
      if (this.value.includes(item.id)) {
        const items = this.value.filter(val => val != item.id);
        this.$emit("input", items);
      } else {
        if (this.multiple) {
          const items = [...this.value, item.id];
          this.$emit("input", items);
        } else {
          this.$emit("input", [item.id]);
        }
      }
    },
    selected(item) {
      return this.value.includes(item.id);
    }
  },
  computed: {
    selectedItems() {
      return this.options
        .filter(item => this.value.includes(item.id))
        .map(item => item.text);
    }
  }
};
</script>

<style scoped>
.fe-select {
  position: relative;
}
.fe-select__list {
  margin-top: 10px;
  position: absolute;
}
.fe-select__list,
.fe-select__label {
  border: 1px solid white;
  border-radius: 20px;
  background: white;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05), 0 1px 10px rgba(0, 0, 0, 0.05);
}
.fe-select__item,
.fe-select__label {
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
.fe-select__item:hover,
.fe-select__label:hover {
  color: #297ad6;
  background: white;
}

.fe-select__item.selected >>> .fe-select__item-selected {
  display: block;
}

.fe-select__item-selected {
  color: #297ad6;
  font-size: 20px;
  display: none;
}

.fe-select__label >>> i {
  font-size: 20px;
}

.fe-select.opened >>> .fe-select__label {
  border-color: #dfeaf8;
  color: #3e8bed;
  /* box-shadow: inset 0 1px 10px rgba(62, 139, 237, 0.1); */
}
</style>
