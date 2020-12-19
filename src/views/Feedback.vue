<template>
  <div id="feedback">
    <Banner :carousels="carousels" />
    <div class="container">
      <p class="rich-feedback-headlineImg">
        <img src="@/assets/image/feedback_headlineImg1.png" />
      </p>
      <div class="tms-flex-between">
        <router-link
          class="rich-feedback-item"
          :to="{ name: 'FeedbackDetail', params: { id: item.id } }"
          v-for="(item, key) in feedbacks"
          :key="key"
        >
          <div class="comment quto-blue triangle-gray">
            <p class="comment-title">{{ item.title }}</p>
            <p class="comment-content">{{ item.content }}</p>
          </div>
          <div class="person">
            <img class="person-headimg" :src="item.headimg" />
            <div class="person-info">
              <p>学员：{{ item.name }}</p>
              <p>{{ item.info }}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import Banner from "@/components/Banner.vue";

export default {
  name: "Feedback",
  data() {
    return {
      carousels: [
        { url: require("@/assets/image/banner2.png") },
        { url: require("@/assets/image/banner3.png") },
      ],
      feedbacks: [
        {
          id: 1,
          title: "思维方式改变",
          content:
            "本人近几年生完二胎就全职在家带孩子，做做微商啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦没挣到什么钱。",
          headimg: "",
          name: "水墨丹青",
          info: "水墨丹青",
        },
        {
          id: 2,
          title: "思维方式改变",
          content:
            "本人近几年生完二胎就全职在家带孩子，做做微商啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦没挣到什么钱。",
          headimg: "",
          name: "水墨丹青",
          info: "水墨丹青",
        },
        {
          id: 1,
          title: "思维方式改变",
          content:
            "本人近几年生完二胎就全职在家带孩子，做做微商啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦没挣到什么钱。",
          headimg: "",
          name: "水墨丹青",
          info: "水墨丹青",
        },
        {
          id: 2,
          title: "思维方式改变",
          content:
            "本人近几年生完二胎就全职在家带孩子，做做微商啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦没挣到什么钱。",
          headimg: "",
          name: "水墨丹青",
          info: "水墨丹青",
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
#feedback {
  .rich-feedback-headlineImg {
    margin-top: 1.3rem;
    text-align: center;
    margin-bottom: 0.9rem;
  }
  .rich-feedback-item {
    width: 4.76rem;
    .comment {
      margin-top: 0.96rem;
      padding: 0.6rem 0.46rem 0.56rem 0.46rem;
      background: #f2f2f2;
      border-radius: 0.12rem;
      position: relative;
      .comment-title {
        font-size: 0.28rem;
        color: #2d2f32;
        margin-bottom: 0.08rem;
      }
      .comment-content {
        font-size: 0.2rem;
        line-height: 0.44rem;
        color: #4d4e4c;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-break: break-all;
      }
    }
    .person {
      display: flex;
      align-items: center;
      margin-top: 0.48rem;
      .person-headimg {
        width: 1.4rem;
        height: 1.4rem;
        border-radius: 50%;
        border: 1px solid #979797;
        background-color: #d8d8d8;
        box-sizing: border-box;
      }
      .person-info {
        margin-left: 0.24rem;
        p:first-child {
          font-size: 0.24rem;
          color: #2d2f32;
        }
        p:last-child {
          font-size: 0.2rem;
          color: #4d4e4c;
        }
      }
    }
  }
}
</style>
