<template>
  <div id="FeedbackDetail">
    <img class="rich-banner" src="@/assets/image/banner3.png" />
    <div class="container container-sm">
      <p class="rich-detail-guide">当前位置：首页 > 学员感悟 > 感悟详情</p>
      <p class="rich-detail-title">{{ article.title }}</p>
      <div class="rich-detail-author">
        <img class="author-headImage" :src="article.headImage" />
        <span class="author-name">学员：{{ article.name }}</span>
        <span class="author-reference">文章出处：优睿驰商学院</span>
      </div>
      <div class="rich-detail-content">{{ article.content }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Article",
  props: {},
  data() {
    return {
      article: {
        title: "思维方式改变",
        headImage: "",
        name: "水墨丹青",
        content:
          "本人近几年生完二胎就全职在家带孩子，做做微商没挣到什么钱，第一次做的时候还被上家忽悠囤货亏损好几万，近两年微商不好做了也慢慢退出。一次偶然在网上看到一篇文章写什么民间股神被吸引加入其学习群跟着做海外指数，由于不懂看盘，不懂判断走势短期内亏损六七万，本来我脱产以后家里就靠老公自己上班，还有房贷，积蓄本就不多这一下子就给家里带来了经济危机。。。。。。 本来在家带孩之后公婆话里话外的就有点意见，这一下子关系更紧张了。我喜欢看书，一次在看书过程中需要看视频加长免费阅读时间，点开视频就看到了快财的广告，我当时没犹豫就报名参加小白营听课，我喜欢理财，可是苦于没有正确的方法，大学的理财课没有选修（改变观念非常重要）多年前朋友也叫着买基金，当时不懂也没有投，错过了很多年。听了小白营的课第三天果断报名参加进阶训练营的课程后又报学了高阶课完成了系统的学习。 自从进入快财，首先从思维方式就改变了，也不再像以前没事儿就网购，乱买一堆不太实用的东西在家搁置。特别喜欢快财“授人以鱼不如授人以渔”的理念，每一期学习的班班和学姐学长都很耐心的帮助我们答疑解惑，理清思路，学到真正的理财技能。本身我自己喜欢理财，之前都是在银行定投，也会把钱放在余额宝，但利息少的可怜，经过系统的学习，目前自己完全可以独立操作投资理财，也小有盈利，就打新债都中签多次。 同时通过学习发现自己之前给孩子们买的保险也都是错误的，保额和保费根本就不相匹配，现在通过老师专业的指导也已经重新给全家做了更优的保险配置来保障家庭成员的幸福指数。 真的感谢快财带给我的一系列变化，最主要是思维的改变，以后我也会影响孩子从小培养孩子的财商。目前我也已加入快财，希望像当初自己的班主任老师和学姐一样帮助更多和我一样渴望改变现状，做好家庭资产管理，早日实现财务自由实现睡后收入！",
      },
    };
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
  &:before {
    content: "";
    width: 0.6rem;
    height: 0.49rem;
    background: url("../assets/image/sprite3.png") no-repeat;
    position: absolute;
    top: -0.38rem;
    left: 0.46rem;
  }
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