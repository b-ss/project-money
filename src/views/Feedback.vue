<template>
  <div id="feedback">
    <img class="rich-banner" src="@/assets/image/banner3.png" />
    <div class="container tms-align-center">
      <img
        class="rich-feedback-headlineImg"
        src="@/assets/image/course_headlineImg1.png"
      />
      <div class="tms-flex-between">
        <router-link
          :to="{
            name: 'Detail',
            params: { id: item.id },
          }"
          class="rich-feedback-item"
          v-for="(item, key) in feedbacks"
          :key="key"
        >
          <div class="comment">
            <p class="comment-title tms-align-center">{{ item.title }}</p>
            <p class="comment-content">{{ item.content }}</p>
          </div>
          <div class="person">
            <img :src="item.headImage" />
            <div>
              <p class="person-name">学员：{{ item.name }}</p>
              <p class="person-info">{{ item.info }}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Feedback",
  data() {
    return {
      feedbacks: [
        {
          id: 1,
          title: "思维方式改变",
          content: "本人近几年生完二胎就全职在家带孩子，做做微商没挣到什么钱。",
          headImage: "",
          name: "水墨丹青",
          info: "水墨丹青",
        },
      ],
    };
  },
};
</script>
<style lang="less">
#feedback {
  .rich-feedback-headlineImg {
    margin-top: 1.3rem;
    margin-bottom: 0.9rem;
  }
}
</style>
