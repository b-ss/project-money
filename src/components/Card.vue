<template>
  <div>
    <div class="card" v-for="(data, key) in advantages" :key="key">
      <img :src="data.url" />
      <div>
        <h5>{{ data.title }}</h5>
        <p>{{ data.info }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: ["advantages"],
};
</script>