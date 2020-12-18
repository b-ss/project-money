<template>
  <div id="home">
    <el-carousel trigger="click" height="6rem">
      <el-carousel-item v-for="(carousel, key) in carousels" :key="key">
        <img :src="carousel.url" />
      </el-carousel-item>
    </el-carousel>
    <div class="container">
      <div class="rich-top tms-align-center">
        <img class="headlineImg" src="@/assets/image/home_headlineImg1.png" />
        <div class="tms-flex-between">
          <div class="rich-top-item" v-for="(item, key) in topItems" :key="key">
            <img :src="item.url" />
            <p>{{ item.title }}</p>
          </div>
        </div>
      </div>
      <div class="rich-advantage tms-align-center">
        <img class="headlineImg" src="@/assets/image/home_headlineImg2.png" />
        <Card :advantages="advantages" />
      </div>
      <div class="rich-teachers tms-align-center">
        <img class="headlineImg" src="@/assets/image/home_headlineImg3.png" />
        <div>
          <img src="" />
          <div>
            <h1>赵锟</h1>
            <p>CFA持证人（特许注册金融分析师）</p>
            <p>
              十年投资实践经验，从草根学子到亿万身家<br />擅长A股、美股、港股、REITs等投资工具<br />曾负责中国建设银行上市等大型项目
            </p>
          </div>
        </div>
        <div>
          <div v-for="(item, key) in teachers" :key="key">
            <img :src="item.headimg" />
            <h6>{{ item.name }}</h6>
            <p>{{ item.info }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Carousel, CarouselItem } from "element-ui";
import Card from "@/components/Card.vue";

Vue.use(Carousel).use(CarouselItem);

export default {
  name: "Home",
  data() {
    return {
      carousels: [
        { url: require("@/assets/image/banner1.png") },
        // { url: require('@/assets/image/carousel2.png') },
        // { url: require('@/assets/image/carousel3.png') }
      ],
      topItems: [
        { url: require("@/assets/image/home_top1.png"), title: "投资小白" },
        { url: require("@/assets/image/home_top2.png"), title: "投资基础" },
        { url: require("@/assets/image/home_top3.png"), title: "投资进阶实践" },
      ],
      advantages: [
        {
          url: require("@/assets/image/home_card1.png"),
          title: "简单易懂",
          info: "公司优势",
        },
        {
          url: require("@/assets/image/home_card2.png"),
          title: "师资强大",
          info: "公司优势",
        },
        {
          url: require("@/assets/image/home_card1.png"),
          title: "可操作性强",
          info: "公司优势",
        },
        {
          url: require("@/assets/image/home_card2.png"),
          title: "师资强大",
          info: "公司优势",
        },
      ],
      teachers: [
        {
          headimg: require("@/assets/image/home_top1.png"),
          name: "人名",
          info: "特许注册分析快递及",
        },
        {
          headimg: require("@/assets/image/home_top1.png"),
          name: "人名",
          info: "特许注册分析快递及",
        },
        {
          headimg: require("@/assets/image/home_top1.png"),
          name: "人名",
          info: "特许注册分析快递及",
        },
      ],
    };
  },
  components: {
    Card,
  },
};
</script>
<style lang="less">
</style>
