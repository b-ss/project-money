<template>
  <div id="FeedbackDetail">
    <Banner :carousels="carousels" />
    <div class="container container-sm">
      <p class="rich-detail-guide">当前位置：首页 > 学员感悟 > 感悟详情</p>
      <p class="rich-detail-title">{{ article.title }}</p>
      <div class="rich-detail-author quto-blue">
        <img class="author-headImage" :src="article.headimg" />
        <span class="author-name">学员：{{ article.name }}</span>
        <span class="author-reference">文章出处：优睿驰商学院</span>
      </div>
      <div class="rich-detail-content" v-html="article.content"></div>
    </div>
  </div>
</template>
<script>
import Banner from "@/components/Banner.vue";
import apis from "../apis/index";

export default {
  name: "FeedbackDetail",
  props: {},
  data() {
    return {
      carousels: [
        { url: require("@/assets/image/banner2.png") },
        { url: require("@/assets/image/banner3.png") },
      ],
      article: {},
    };
  },
  components: {
    Banner,
  },
  mounted() {
    apis.getFeedback(this.$route.params.id).then((data) => {
      this.article = data;
    });
  },
};
</script>
<style lang="less">
.rich-detail-guide {
  font-size: 0.22rem;
  line-height: 0.44rem;
  color: #4d4e4c;
  margin-top: 0.74rem;
}
.rich-detail-title {
  font-size: 0.38rem;
  line-height: 0.53rem;
  text-align: center;
  color: #2d2f32;
  margin-top: 0.9rem;
}
.rich-detail-author {
  margin-left: -0.46rem;
  margin-right: -0.46rem;
  background-image: linear-gradient(185deg, #f2fafd 0%, #e0f4fa 100%);
  border-radius: 0.12rem;
  font-size: 0.2rem;
  color: #747474;
  display: flex;
  align-items: center;
  padding: 0.22rem 0.6rem 0.22rem 1rem;
  margin-top: 0.9rem;
  position: relative;
  .author-headImage {
    width: 0.6rem;
    height: 0.6rem;
    background: #d8d8d8;
    border: 1px solid #979797;
    border-radius: 50%;
  }
  .author-name {
    margin-left: 0.18rem;
  }
  .author-reference {
    margin-left: auto;
  }
}
.rich-detail-content {
  margin-top: 0.52rem;
  font-size: 0.2rem;
  color: #4d4e4c;
  letter-spacing: 0.002rem;
  line-height: 0.44rem;
  text-indent: 2em;
}
</style>