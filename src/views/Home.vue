<template>
  <div id="home">
    <el-carousel trigger="click" height="600px">
      <el-carousel-item v-for="(carousel,key) in carousels" :key="key">
        <img :src="carousel.url" />
      </el-carousel-item>
    </el-carousel>
    <div class="container">
      <el-row class="rich-top">
        <el-col :span="24"><img class="headlines" src="@/assets/image/top.png" /></el-col>
        <el-row :gutter="20">
          <el-col :span="8" v-for="(item, key) in topItems" :key="key">
            <img :src="item.url" />
            <p>{{item.title}}</p>
          </el-col>
        </el-row>
      </el-row>
      <el-row class="rich-advantage">
        <el-col :span="24"><img class="headlines" src="@/assets/image/advantage.png" /></el-col>
        <Card :advantages="advantages" />
      </el-row>
      <el-row class="rich-teachers">
        <el-col :span="24"><img class="headlines" src="@/assets/image/teacherteam.png" /></el-col>
        <el-col :span="24">
          <el-row :gutter="30">
            <el-col :span="12"><img src="@/assets/image/carousel1.png"></el-col>
            <el-col :span="12">
              <h1>赵锟</h1>
              <p>CFA持证人（特许注册金融分析师）</p>
              <p>十年投资实践经验，从草根学子到亿万身家<br />擅长A股、美股、港股、REITs等投资工具<br />曾负责中国建设银行上市等大型项目</p>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8" v-for="(item, key) in teachers" :key="key">
              <img :src="item.headimg" />
              <h6>{{item.name}}</h6>
              <p>{{item.info}}</p>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
  name: 'Home',
  data() {
    return {
      carousels: [
        { url: require('@/assets/image/carousel1.png') },
        { url: require('@/assets/image/carousel2.png') },
        { url: require('@/assets/image/carousel3.png') }
      ],
      topItems: [
        { url: require('@/assets/image/top1.png'), title: '投资小白' },
        { url: require('@/assets/image/top2.png'), title: '投资基础' },
        { url: require('@/assets/image/top3.png'), title: '投资进阶实践' }
      ],
      advantages: [
        {
          url: require('@/assets/image/top1.png'),
          title: '简单易懂',
          info: '公司优势'
        },
        {
          url: require('@/assets/image/top1.png'),
          title: '师资强大',
          info: '公司优势'
        },
        {
          url: require('@/assets/image/top1.png'),
          title: '可操作性强',
          info: '公司优势'
        },
        {
          url: require('@/assets/image/top1.png'),
          title: '师资强大',
          info: '公司优势'
        }
      ],
      teachers: [
        {
          headimg: require('@/assets/image/top1.png'),
          name: '人名',
          info: '特许注册分析快递及'
        },
        {
          headimg: require('@/assets/image/top1.png'),
          name: '人名',
          info: '特许注册分析快递及'
        },
        {
          headimg: require('@/assets/image/top1.png'),
          name: '人名',
          info: '特许注册分析快递及'
        }
      ]
    };
  },
  components: {
    Card
  }
};
</script>
<style lang="less">
#home {
  .rich-top {
    width: 100%;
    text-align: center;
  }
}
</style>
