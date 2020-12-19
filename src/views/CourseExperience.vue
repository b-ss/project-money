<template>
  <div id="experi">
    <Banner :carousels="carousels" />
    <div class="container">
      <div class="experi-people">
        <p class="tms-align-center">
          <img
            class="headlineImg"
            src="@/assets/image/experi_headlineImg1.png"
          />
        </p>
        <Card :cards="peoples" :pagename="'experi'" />
      </div>
      <div class="experi-because"></div>
      <div class="experi-team">
        <p class="tms-align-center">
          <img
            class="headlineImg"
            src="@/assets/image/experi_headlineImg3.png"
          />
        </p>
        <div class="tms-flex-between">
          <div
            class="experi-team-person"
            v-for="(item, key) in teams"
            :key="key"
          >
            <img class="pic" :src="item.headimg" />
            <p class="name tms-align-center">{{ item.name }}</p>
          </div>
        </div>
      </div>
      <div class="experi-enroll">
        <p class="tms-align-center">
          <img
            class="headlineImg"
            src="@/assets/image/experi_headlineImg5.png"
          />
        </p>
        <div class="tms-flex-between experi-enroll-steps">
          <div class="step">
            <div class="content tms-align-center">
              <img class="icon" src="../assets/image/experi_guide1.png" />
              <p class="text">完成支付</p>
            </div>
            <img class="arrow" src="../assets/image/arrow.png" />
          </div>
          <div class="step">
            <div class="content tms-align-center">
              <img class="icon" src="../assets/image/experi_guide2.png" />
              <p class="text">进入班群</p>
            </div>
            <img class="arrow" src="../assets/image/arrow.png" />
          </div>
          <div class="step">
            <div class="content tms-align-center">
              <img class="icon" src="../assets/image/experi_guide3.png" />
              <p class="text">添加老师</p>
            </div>
            <img class="arrow" src="../assets/image/arrow.png" />
          </div>
          <div class="step tms-align-center">
            <div class="content">
              <img class="icon" src="../assets/image/experi_guide4.png" />
              <p class="text">开始学习</p>
            </div>
          </div>
        </div>
        <div class="experi-enroll-form">
          <el-form :model="form" size="medium">
            <el-form-item class="form-item">
              <el-input
                class="form-input"
                placeholder="请输入手机号"
                v-model="form.tel"
              ></el-input>
            </el-form-item>
            <el-form-item class="form-item">
              <el-input
                class="form-input"
                placeholder="请输入验证码"
                v-model="form.code"
              ></el-input>
              <span style="width: 0.28rem"></span>
              <el-button class="form-getcode" @click="getCode"
                >获取验证码</el-button
              >
            </el-form-item>
            <el-button class="form-submit" @click="submit">立即报名</el-button>
          </el-form>
        </div>
        <div class="experi-enroll-qrcode">
          <p class="text tms-align-center">还在犹豫什么，赶紧报名吧！</p>
          <p class="tms-align-center">
            <img class="arrow" src="../assets/image/arrow-down.png" />
          </p>
          <p class="tms-align-center"><img class="qrcode" src="" /></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import Banner from "@/components/Banner.vue";
import Card from "@/components/Card.vue";
import { Form, FormItem, Input, Button } from "element-ui";
Vue.use(Form).use(FormItem).use(Input).use(Button);

export default {
  name: "Experi",
  data() {
    return {
      form: {
        tel: "",
        code: "",
      },
      carousels: [
        { url: require("@/assets/image/banner2.png") },
        { url: require("@/assets/image/banner3.png") },
      ],
      peoples: [
        {
          url: require("@/assets/image/experi_card1.png"),
          title: "月光族",
          info: "赚多少都花光！",
        },
        {
          url: require("@/assets/image/experi_card2.png"),
          title: "低薪族",
          info: "赚多少都花光！",
        },
        {
          url: require("@/assets/image/experi_card3.png"),
          title: "中年危机",
          info: "赚多少都花光！",
        },
        {
          url: require("@/assets/image/experi_card4.png"),
          title: "无存款",
          info: "赚多少都花光！",
        },
      ],
      teams: [
        {
          headimg: require("@/assets/image/banner2.png"),
          name: "赵大牛",
        },
        {
          headimg: require("@/assets/image/banner2.png"),
          name: "赵大牛",
        },
        {
          headimg: require("@/assets/image/banner2.png"),
          name: "赵大牛",
        },
        {
          headimg: require("@/assets/image/banner2.png"),
          name: "赵大牛",
        },
      ],
    };
  },
  components: {
    Banner,
    Card,
  },
  methods: {
    getCode() {},
    submit() {},
  },
};
</script>
<style lang="less">
.el-form-item__content {
  display: flex;
  .el-input--medium {
    .el-input__inner {
      height: 0.6rem;
      line-height: 0.6rem;
      font-size: 0.22rem;
      border: none;
      color: #ababab;
      letter-spacing: 0.55px;
      text-align: left;
      background-color: #f5f5f5;
    }
  }
  .form-getcode {
    width: 2rem;
    font-size: 0.22rem;
    border: none;
    color: #6d7278;
    letter-spacing: 0.51px;
    text-align: center;
    background-color: #f5f5f5;
  }
}

.experi-team {
  .headlineImg {
    margin-bottom: 1.6em;
  }
  .experi-team-person {
    width: 4rem;
    &:nth-child(odd) {
      margin-right: 1.8rem;
    }
    .pic {
      width: 3.24rem;
      height: 3.24rem;
      transform: rotate(-45deg);
      background: #e8e8e8;
      border-radius: 0.2rem;
    }
    .name {
      width: 3.26rem;
      font-size: 0.22rem;
      color: #2d2f32;
      line-height: 0.44rem;
      margin-top: 0.8rem;
      margin-bottom: 1.2rem;
    }
  }
}
.experi-enroll {
  .headlineImg {
    margin-top: 0rem;
  }
  .experi-enroll-steps {
    .step {
      display: flex;
      align-items: center;
      .content {
        .icon {
          width: 0.68rem;
          height: 0.68rem;
        }
        .text {
          font-size: 0.22rem;
          color: #2d2f32;
        }
      }
      .arrow {
        width: 0.2rem;
        height: 0.2rem;
        margin-left: 0.8em;
      }
    }
  }
  .experi-enroll-form {
    margin-top: 1.2rem;
    .form-submit {
      height: 0.6rem;
      background-image: linear-gradient(180deg, #ff9b4f 0%, #fe6227 100%);
      font-size: 0.24rem;
      color: #ffffff;
      letter-spacing: 0.02rem;
    }
  }
  .experi-enroll-qrcode {
    margin-top: 0.96rem;
    text-align: center;
    .text {
      font-size: 0.28rem;
      color: #2d2f32;
      letter-spacing: 0.6px;
    }
    .qrcode {
      width: 2.52rem;
      height: 2.52rem;
    }
  }
}
</style>

