<template>
  <el-carousel trigger="click" style="width: 100%" height="7rem">
    <el-carousel-item v-for="(carousel, key) in carousels" :key="key">
      <img :src="carousel.url" />
    </el-carousel-item>
  </el-carousel>
</template>
<script>
import Vue from "vue";
import { Carousel, CarouselItem } from "element-ui";
Vue.use(Carousel).use(CarouselItem);

export default {
  name: "Banner",
  props: {
    carousels: Array,
  },
};
</script>