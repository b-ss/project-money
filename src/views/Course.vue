<template>
  <div id="course">
    <img src="../assets/image/carousel2.png" />
    <div class="container">
      <img src="../assets/image/course1.png" />
      <div class="primary">
        <img src="../assets/image/course2.png" />
        <div v-for="(item, key) in elementaryCourses" :key="key">
          <h4>{{item.title}}</h4>
          <p>{{item.info}}</p>
        </div>
      </div>
      <div class="advanced">
        <img src="../assets/image/course3.png" />
        <div v-for="(item, key) in advancedCourses" :key="key">
          <h4>{{item.title}}</h4>
          <p>{{item.title}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      elementaryCourses: [
        {
          title: '思维改变人生',
          info: '思维概念人生'
        }
      ],
      advancedCourses: [
        {
          title: '思维改变人生',
          info: '思维概念人生'
        }
      ]
    };
  }
};
</script>
