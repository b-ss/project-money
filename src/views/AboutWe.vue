<template>
  <div id="aboutwe">
    <Banner :carousels="carousels" />
    <div class="container container-sm">
      <div class="rich-about" v-for="(item, key) in infos" :key="key">
        <p class="rich-about-headlineImg">
          <img :src="item.url" />
        </p>
        <p class="rich-about-content">{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import Banner from "@/components/Banner.vue";

export default {
  data() {
    return {
      carousels: [
        { url: require("@/assets/image/banner2.png") },
        { url: require("@/assets/image/banner3.png") },
      ],
      infos: [
        {
          url: require("@/assets/image/about_headlineImg1.png"),
          content:
            "睿驰商学院是一家专注理财教育的公司，团队主要成员来自钜派投资、恒天财富、诺安基金等金融机构。作为投资教育领域的创新者，睿驰致力于提升全民财商，帮助投资小白建立正确的投资思维，掌握正确的投资方法。通过《投资技能基础课》、《投资技能进阶实践课》，全方位帮助每一位投资者理性投资，合理制定资产配置，实现睡后收入增长。",
        },
        {
          url: require("@/assets/image/about_headlineImg2.png"),
          content:
            "睿驰商学院是一家专注理财教育的公司，团队主要成员来自钜派投资、恒天财富、诺安基金等金融机构。作为投资教育领域的创新者，睿驰致力于提升全民财商，帮助投资小白建立正确的投资思维，掌握正确的投资方法。通过《投资技能基础课》、《投资技能进阶实践课》，全方位帮助每一位投资者理性投资，合理制定资产配置，实现睡后收入增长。",
        },
        {
          url: require("@/assets/image/about_headlineImg3.png"),
          content:
            "睿驰商学院是一家专注理财教育的公司，团队主要成员来自钜派投资、恒天财富、诺安基金等金融机构。作为投资教育领域的创新者，睿驰致力于提升全民财商，帮助投资小白建立正确的投资思维，掌握正确的投资方法。通过《投资技能基础课》、《投资技能进阶实践课》，全方位帮助每一位投资者理性投资，合理制定资产配置，实现睡后收入增长。",
        },
        {
          url: require("@/assets/image/about_headlineImg4.png"),
          content:
            "睿驰商学院是一家专注理财教育的公司，团队主要成员来自钜派投资、恒天财富、诺安基金等金融机构。作为投资教育领域的创新者，睿驰致力于提升全民财商，帮助投资小白建立正确的投资思维，掌握正确的投资方法。通过《投资技能基础课》、《投资技能进阶实践课》，全方位帮助每一位投资者理性投资，合理制定资产配置，实现睡后收入增长。",
        },
      ],
    };
  },
  components: {
    Banner,
  },
};
</script>
<style lang="less">
.rich-about {
  .rich-about-headlineImg {
    margin-top: 1.32rem;
    margin-bottom: 0.9rem;
    text-align: center;
  }
  .rich-about-content {
    font-size: 0.2rem;
    line-height: 0.42rem;
    color: #4d4e4c;
    letter-spacing: 0.002rem;
    text-indent: 2em;
  }
}
</style>
