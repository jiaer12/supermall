<template>
  <div class="tabbarItem" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
    <!-- 直接写<slot :class="{ active: isActive }" name="item-text"></slot>不起效果，因为slot是会被替换的 -->
    <!-- 所以有时候防止判断的一些东西被替换，就要用div先包裹住slot -->
  </div>
</template>


<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  computed:{
    isActive() {
      return this.$route.path.indexOf(this.path) !==-1
    },
    activeStyle() {
      return this.isActive ? {color:this.activeColor} :{}
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    },
  },
};
</script>


<style scoped>
.tabbarItem {
  flex: 1;
  text-align: center;
  height: 49px;
}
.tabbarItem img {
  width: 24px;
  height: 24px;
  vertical-align: top;
  margin-top: 3px;
}
</style>
