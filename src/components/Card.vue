<template>
  <el-row>
    <el-col :span="24" v-for="(data, key) in advantages" :key="key">
      <img :src="data.url" />
      <div>
        <p>{{data.title}}</p>
        <p>{{data.info}}</p>
      </div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: 'Card',
  props: ['advantages']
};
</script>