<template>
  <div id="card">
    <div
      class="card"
      v-for="(data, key) in cards"
      :key="key"
      :class="{ 'tms-flex-row': key % 2 !== 0 }"
    >
      <img class="image" :src="data.url" />
      <div
        class="text"
        :class="{ home: 'bg-home', experi: 'bg-experi' }[pagename]"
      >
        <p>{{ data.title }}</p>
        <p>{{ data.info }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: ["cards", "pagename"],
};
</script>
<style lang="less">
.card {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 1.1rem;
  .bg-home {
    background-image: linear-gradient(#e8e8e8 0%, #fff 100%);
  }
  .bg-experi {
    background-image: linear-gradient(#fff6d4 0%, rgba(255, 246, 211, 0) 100%);
  }
  > .image {
    width: 3.84rem;
    height: 2.56rem;
  }
  > .text {
    flex: 1;
    height: 2.08em;
    padding: 0.5rem 1.4rem 0.74rem 1rem;
    color: #2d2f32;
    box-sizing: border-box;
    > p:first-child {
      font-size: 0.28rem;
      margin-bottom: 0.12rem;
    }
    > p:last-child {
      font-size: 0.18rem;
    }
  }
}
</style>