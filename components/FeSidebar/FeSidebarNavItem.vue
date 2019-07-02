<template>
  <div class="fe-sidebar-nav-item" :class="classes">
    <div class="fe-sidebar-nav-item__line" @click="click">
      <div class="fe-sidebar-nav-item__left">
        <div class="fe-sidebar-nav-item__left-side" v-if="item.leftSide" v-html="item.leftSide"></div>
        <div class="fe-sidebar-nav-item__wrapper">
          <div class="fe-sidebar-nav-item__title">{{ item.title }}</div>
          <div class="fe-sidebar-nam-item__delete-button" v-if="item.route" @click.stop.prevent="toggleDeleteModal(item.id, item.type)"></div>
          <!--<div class="fe-sidebar-nam-item__delete-button" v-if="item.route" @click.stop.prevent="deleteItem(item.id, item.type)"></div> -->
        </div>
      </div>
      <div class="fe-sidebar-nav-item__right-side" v-if="item.rightSide" v-html="item.rightSide"></div>
    </div>
    <div class="fe-sidebar-nav-item__list" v-show="opened">
      <div v-for="(item, index) in (item.items || [])" :key="index">
        <FeSidebarNabItem :item="item"/>
      </div>
    </div>
    <DeletePopUp @toggleDeleteModal="toggleDeleteModal" v-if="openDeleteModal"/>
  </div>
</template>

<script>
export default {
  name: "FeSidebarNabItem",
  props: {
    item: {
      type: Object,
      default() {
        return {
         openDeleteModal: false,
        };
      }
    }
  },

  components: {
     DeletePopUp: () => import('@/components/popup/DeletePopup'),
  },

  created() {
    this.$on("setActive", () => {
      this.setActive();
      this.$parent.$emit("setActive");
    });

    this.$on("setOpened", () => {
      this.setOpened();
      this.$parent.$emit("setOpened");
    });
  },
  data() {
    return {
      opened: this.item.opened,
      active: false,
      openDeleteModal: false
    };
  },
  methods: {
    click(e) {
      this.item.click ? this.item.click(e) : null;
      this.opened = !this.opened;
      if (this.item.route) {
        this.setRoute();
      }
    },
    setRoute() {
      this.$router.push(this.item.route);
    },
    setActive() {
      this.active = true;
    },
    setOpened() {
      this.opened = true;
    },
   // async deleteItem(id, type) {
   //   const resource = type == "project" ? this.$api.Project.delete : this.$api.Resource.delete
   //   const action = type == "project" ? 'currentProject' : 'currentResource'

   //   await this.$store.dispatch("entities/delete", {
   //     resource: resource,
   //     name: action,
   //     id: id 
   //   })

   //   if (type == "project") {
   //     this.setProjects()
   //   } else {
   //     this.setResources()
   //   }
   // },

    toggleDeleteModal (id, type) {
      this.$store.commit("entities/togglePopup", { id: id, type: type } )
      this.openDeleteModal = !this.openDeleteModal
    },


    setProjects () {
      this.$store.dispatch("entities/query", {
        name: "projects",
        resource: this.$api.Project.query
      })
    },
    
    setResources() {
      this.$store.dispatch("entities/query", {
        name: "resources",
        resource: this.$api.Resource.query
      })
    },
  },
  computed: {
    classes() {
      const active = this.item.active ? this.item.active() : this.active;
      if (active) {
        this.$parent.$emit("setActive");
        this.$parent.$emit("setOpened");
      }
      return {
        bold: this.item.bold,
        "no-margin": this.item.noMargin,
        active
      };
    }
  },
  watch: {
    $route: {
      handler(to, from) {
        if (typeof this.item.route == "string") {
          this.active = this.$router.currentRoute.matched[0].regex.test(
            this.item.route
          );
        } else if (typeof this.item.route == "object") {
          this.active = this.$router.currentRoute.name == this.item.route.name;
        }

        if (this.active) {
          this.$emit("setActive");
        }
      },
      immediate: true
    }
  }
};
</script>


<style scoped>
.fe-sidebar-nav-item {
  font-size: 16px;
  color: #6d7276;
  cursor: pointer;
}
.fe-sidebar-nav-item:hover,
.fe-sidebar-nav-item.active {
  color: white;
}

.fe-sidebar-nav-item__line {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}
.fe-sidebar-nav-item__left {
  display: flex;
}
.fe-sidebar-nav-item__left-side {
  padding-right: 5px;
  letter-spacing: 4px;
  font-size: 12px;
}

.fe-sidebar-nav-item.bold > .fe-sidebar-nav-item__line {
  font-weight: bold;
  font-size: 16px;
}
.fe-sidebar-nav-item:not(.bold) > .fe-sidebar-nav-item__line {
  font-weight: normal;
  font-size: 15px;
}

.fe-sidebar-nav-item:not(.no-margin) {
  margin-left: 23px;
}
</style>

<style>
.fe-sidebar-nav-item__baloon {
  color: #6d7276;
  background: #313133;
  padding: 5px 15px;
  border-radius: 30px;
  margin-top: -4px;
  font-size: 13px;
}

.fe-sidebar-nav-item__left-side [class*="icon-"] {
  font-size: 14px;
}
</style>
