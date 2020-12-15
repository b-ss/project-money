<template>
  <div id="home">
    <el-carousel trigger="click" height="600px">
      <el-carousel-item v-for="(carousel,key) in carousels" :key="key">
        <img :src="carousel.url" />
      </el-carousel-item>
    </el-carousel>
    <div class="container">
      <el-row class="rich-top">
        <el-col :span="24"><img class="headlines" src="@/assets/image/top.png" /></el-col>
        <el-row :gutter="20">
          <el-col :span="8" v-for="(item, key) in topItems" :key="key">
            <img :src="item.url" />
            <p>{{item.title}}</p>
          </el-col>
        </el-row>
      </el-row>
      <div class="rich-advantage "></div>
      <div class="rich-teachers"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      carousels: [
        { url: require('@/assets/image/carousel1.png') },
        { url: require('@/assets/image/carousel2.png') },
        { url: require('@/assets/image/carousel3.png') }
      ],
      topItems: [
        { url: require('@/assets/image/top1.png'), title: '投资小白' },
        { url: require('@/assets/image/top2.png'), title: '投资基础' },
        { url: require('@/assets/image/top3.png'), title: '投资进阶实践' }
      ]
    };
  }
};
</script>
<style lang="less">
#home {
  .rich-top {
    width: 100%;
    text-align: center;
  }
}
</style>
