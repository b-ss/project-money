<template>
  <div id="course">
    <Banner :carousels="carousels" />
    <div class="container">
      <img class="rich-course-go" src="@/assets/image/course_go.png" />
      <div class="tms-align-center">
        <img
          class="rich-course-headlineImg"
          src="@/assets/image/course_headlineImg1.png"
        />
        <div class="tms-flex-between">
          <div
            class="rich-course-content"
            v-for="(item, key) in elementaryCourses"
            :key="key"
          >
            <p class="title tms-align-center">{{ item.title }}</p>
            <p class="content">{{ item.content }}</p>
          </div>
        </div>
      </div>
      <div class="tms-align-center">
        <img
          class="rich-course-headlineImg"
          src="@/assets/image/course_headlineImg2.png"
        />
        <div class="tms-flex-between">
          <div
            class="rich-course-content"
            v-for="(item, key) in advancedCourses"
            :key="key"
          >
            <p class="title tms-align-center">{{ item.title }}</p>
            <p class="content">{{ item.content }}</p>
          </div>
        </div>
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
      elementaryCourses: [
        {
          title: "思维方式改变",
          content:
            "本人近几年生完二胎就全职在家带孩子，做做微商没挣到什么钱，第一次做的时候还被上家忽悠囤货亏损好几万，近两年微商不好做了也慢慢退出。",
        },
        {
          title: "思维方式改变",
          content:
            "本人近几年生完二胎就全职在家带孩子，做做微商没挣到什么钱，第一次做的时候还被上家忽悠囤货亏损好几万，近两年微商不好做了也慢慢退出。",
        },
        {
          title: "思维方式改变",
          content:
            "本人近几年生完二胎就全职在家带孩子，做做微商没挣到什么钱，第一次做的时候还被上家忽悠囤货亏损好几万，近两年微商不好做了也慢慢退出。",
        },
      ],
      advancedCourses: [
        {
          title: "思维方式改变",
          content:
            "本人近几年生完二胎就全职在家带孩子，做做微商没挣到什么钱，第一次做的时候还被上家忽悠囤货亏损好几万，近两年微商不好做了也慢慢退出。",
        },
        {
          title: "思维方式改变",
          content:
            "本人近几年生完二胎就全职在家带孩子，做做微商没挣到什么钱，第一次做的时候还被上家忽悠囤货亏损好几万，近两年微商不好做了也慢慢退出。",
        },
        {
          title: "思维方式改变",
          content:
            "本人近几年生完二胎就全职在家带孩子，做做微商没挣到什么钱，第一次做的时候还被上家忽悠囤货亏损好几万，近两年微商不好做了也慢慢退出。",
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
#course {
  .container {
    position: relative;
    .rich-course-go {
      position: absolute;
      top: -1.06rem;
      z-index: 1000;
    }
    .tms-align-center {
      .rich-course-headlineImg {
        margin-top: 2.4rem;
        margin-bottom: 1rem;
        text-align: center;
        &:nth-child(2) {
          margin-top: 1.5rem;
        }
      }
      .tms-flex-between {
        flex-wrap: wrap;
        .rich-course-content {
          width: 4.76rem;
          height: 3.46rem;
          padding: 0.5rem 0.46rem;
          background: #f2f2f2;
          border-radius: 0.12rem;
          box-sizing: border-box;
          margin-bottom: 0.38rem;
          .title {
            font-size: 0.28rem;
            color: #2d2f32;
            margin-bottom: 0.23rem;
          }
          .content {
            font-size: 0.2rem;
            color: #4d4e4c;
            line-height: 0.44rem;
            text-align: left;
          }
        }
      }
    }
  }
}
</style>
