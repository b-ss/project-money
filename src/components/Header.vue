<template>
  <div id="nav" class="hidden-md-and-down">
    <div class="container">
      <div class="rich-logo"><img src="@/assets/image/logo.png" /></div>
      <ul class="rich-menu">
        <router-link :to="{name: 'Home'}" tag="li" active-class class="rich-menu-item">首页</router-link>
        <router-link :to="{name: 'Course'}" tag="li" active-class class="rich-menu-item">课程中心</router-link>
        <router-link :to="{name: 'CourseExperience'}" tag="li" active-class class="rich-menu-item">课程体验</router-link>
        <router-link :to="{name: 'Feedback'}" tag="li" active-class class="rich-menu-item">学院感悟</router-link>
        <router-link :to="{name: 'AboutWe'}" tag="li" active-class class="rich-menu-item">关于我们</router-link>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header'
};
</script>
<style lang="less">
#nav {
  width: 100%;
  height: 86px;
  position: absolute;
  top: 0;
  z-index: 1000;
  .rich-logo {
    width: 180px;
    height: 50px;
    padding-top: 16px;
    margin-right: auto;
  }
  .rich-menu {
    margin-top: 24px;
    overflow: hidden;
    .rich-menu-item {
      float: left;
      font-size: 18px;
      margin-right: 30px;
      padding: 6px 20px;
      border-radius: 20px;
      cursor: pointer;
      &:last-child {
        margin-right: 0;
      }
      &.router-link-exact-active {
        color: #fff;
        background: #0089b7;
      }
    }
  }
}
</style>
