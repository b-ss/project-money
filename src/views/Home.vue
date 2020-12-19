<template>
  <div id="home">
    <Banner :carousels="carousels" />
    <div class="container">
      <div class="rich-top">
        <p class="tms-align-center">
          <img class="headlineImg" src="@/assets/image/home_headlineImg1.png" />
        </p>
        <div class="tms-flex-between">
          <div class="rich-top-item" v-for="(item, key) in topItems" :key="key">
            <img :src="item.url" />
            <p class="tms-align-center">{{ item.title }}</p>
          </div>
        </div>
      </div>
      <div class="rich-advantage">
        <p class="tms-align-center">
          <img class="headlineImg" src="@/assets/image/home_headlineImg2.png" />
        </p>
        <Card :cards="advantages" :pagename="'home'" />
      </div>
      <div class="rich-teachers">
        <p class="tms-align-center">
          <img class="headlineImg" src="@/assets/image/home_headlineImg3.png" />
        </p>
        <div class="rich-teacher-leader">
          <img class="pic" :src="leader.headimg" />
          <div class="info">
            <p>{{ leader.name }}</p>
            <p>{{ leader.info }}</p>
          </div>
        </div>
        <div class="tms-flex-between">
          <div
            class="rich-teacher-staff"
            v-for="(item, key) in staffs"
            :key="key"
          >
            <img class="pic" :src="item.headimg" />
            <p class="name">{{ item.name }}</p>
            <p class="content">{{ item.info }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import Card from "@/components/Card.vue";

export default {
  name: "Home",
  data() {
    return {
      carousels: [
        { url: require("@/assets/image/banner1.png") },
        { url: require("@/assets/image/banner4.png") },
        { url: require("@/assets/image/banner5.png") },
      ],
      topItems: [
        { url: require("@/assets/image/home_top1.png"), title: "投资小白" },
        { url: require("@/assets/image/home_top2.png"), title: "投资基础" },
        { url: require("@/assets/image/home_top3.png"), title: "投资进阶实践" },
      ],
      advantages: [
        {
          url: require("@/assets/image/home_card1.png"),
          title: "平台专业",
          info: "专业的教育平台，致力于改变学员知识结构，提升生活质量。",
        },
        {
          url: require("@/assets/image/home_card2.png"),
          title: "课程易懂",
          info:
            "系统化的知识体系，详细的知识点拆分，让复杂晦涩的投资知识变通俗易懂，轻松掌握。",
        },
        {
          url: require("@/assets/image/home_card3.png"),
          title: "师资强大",
          info:
            "课程研发团队，毕业于海外名校，具有多年的投资经验。教师全部具有相关从业经验，全程陪伴式学习。",
        },
        {
          url: require("@/assets/image/home_card4.png"),
          title: "实操容易",
          info: "理论、案例和实操结合，增强学习效果，高效学习，充分掌握。",
        },
      ],
      teachers: [
        {
          headimg: require("@/assets/image/leader.png"),
          name: "赵锟",
          info:
            "CFA持证人（特许注册金融分析师）<br />十年投资实践经验，从草根学子到亿万身家<br />擅长A股、美股、港股、REITs等投资工具<br />曾负责中国建设银行上市等大型项目",
        },
        {
          headimg: require("@/assets/image/leader.png"),
          name: "赵锟",
          info: "特许注册金融分析师",
        },
        {
          headimg: require("@/assets/image/leader.png"),
          name: "赵锟",
          info: "特许注册金融分析师",
        },
        {
          headimg: require("@/assets/image/leader.png"),
          name: "赵锟",
          info: "特许注册金融分析师",
        },
      ],
    };
  },
  computed: {
    leader() {
      return this.teachers[0];
    },
    staffs() {
      return this.teachers.slice(1);
    },
  },
  components: {
    Card,
    Banner,
  },
};
</script>
<style lang="less">
.rich-top {
  .rich-top-item {
    > img {
      width: 1.6rem;
      height: 1.6rem;
      margin-bottom: 0.24em;
    }
    > p {
      font-size: 0.24rem;
      color: #2d2f32;
    }
  }
}
.rich-advantage,
.rich-teachers {
  .headlineImg {
    margin-bottom: 1.1rem;
  }
}
.rich-teachers {
  .rich-teacher-leader {
    display: flex;
    align-items: center;
    margin-bottom: 1.6rem;
    .pic {
      width: 2.79rem;
      height: 3.63rem;
      background-color: #f0f0f0;
    }
    .info {
      margin-left: 0.62rem;
      height: auto;
      color: #2d2f32;
      p:first-child {
        font-size: 0.28rem;
        margin-bottom: 0.14rem;
      }
      p:last-child {
        font-size: 20px;
        line-height: 42px;
      }
    }
  }
  .rich-teacher-staff {
    width: 3.06rem;
    padding: 1.4rem 0.3rem 0.1rem 0.3rem;
    color: #2d2f32;
    position: relative;
    background-color: #f0f0f0;
    box-sizing: border-box;
    .pic {
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      position: absolute;
      top: -0.75rem;
      left: 0.75rem;
    }
    .name {
      font-size: 0.22rem;
    }
    .content {
      font-size: 0.18rem;
      line-height: 0.42rem;
    }
  }
}
</style>
