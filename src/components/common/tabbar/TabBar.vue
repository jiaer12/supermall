<template>
      <div id="tab-bar" class="tabbar">
        <slot></slot>
      </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
    .tabbar {
    /* 设置里面的布局为flex，就动态的对插入的数据进行排序 */
    display: flex;

    /* 设置一个温和的背景颜色，很多是使用f6 */
    background-color: #f6f6f6;

    /* 把这个导航栏放到最下面 */
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    /* 设置阴影，过渡 */
    box-shadow: 0 -2px 1px rgba(0,0,0,0.03);
  }

</style>
