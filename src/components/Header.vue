<template>
  <div id="nav">
    <div class="navbar">
      <img :src="logoUrl" class="rich-logo" />
      <ul class="rich-menu">
        <router-link
          :to="{ name: 'Home' }"
          tag="li"
          active-class
          class="rich-menu-item"
          >首页</router-link
        >
        <router-link
          :to="{ name: 'Course' }"
          tag="li"
          active-class
          class="rich-menu-item"
          >课程中心</router-link
        >
        <router-link
          :to="{ name: 'CourseExperience' }"
          tag="li"
          active-class
          class="rich-menu-item"
          >课程体验</router-link
        >
        <router-link
          :to="{ name: 'Feedback' }"
          tag="li"
          active-class
          class="rich-menu-item"
          >学员感悟</router-link
        >
        <router-link
          :to="{ name: 'AboutWe' }"
          tag="li"
          active-class
          class="rich-menu-item"
          >关于我们</router-link
        >
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  computed: {
    logoUrl() {
      return this.$route.name === "Home"
        ? require("@/assets/image/logo0.png")
        : require("@/assets/image/logo1.png");
    },
  },
};
</script>
<style lang="less">
#nav {
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 1000;
  .navbar {
    width: 10.5rem;
    margin: 0 auto;
    display: flex;
    padding: 0.18rem 0;
    .rich-logo {
      width: 2.5rem;
      height: 0.5rem;
      margin-right: auto;
    }
    .rich-menu {
      display: flex;
      .rich-menu-item {
        color: #fff;
        font-size: 0.18rem;
        line-height: 0.5rem;
        padding: 0rem 0.3rem;
        border-radius: 0.5rem;
        cursor: pointer;
        &.router-link-exact-active {
          color: #fff;
          background: #0089b7;
        }
      }
    }
  }
}
</style>
