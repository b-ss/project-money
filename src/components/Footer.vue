<template>
  <div id="footer">
    <div class="companyinfo">
      <div class="container tms-flex-between">
        <div class="info">
          <p class="info-line"></p>
          <p class="info-concat">联系我们</p>
          <p class="info-detail">
            客服电话：18515478995（周一到周五早上9点-晚上10点）
          </p>
          <p class="info-detail">wangxueling@yaocaiwuziyou.com</p>
          <p class="info-detail">地址：北京市海淀区上地辉煌国际2号楼7层</p>
        </div>
        <div class="qrcode">
          <div>
            <img src="" />
            <p class="tms-align-center">优睿驰官方微信</p>
          </div>
          <div>
            <img src="" />
            <p class="tms-align-center">客服微信</p>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright tms-align-center">
      Copyright© 2009-2020 weimiao.cn 北京优睿驰科技有限公司 版权所有
      京ICP备19026951号-2 京公网安备11010802033402号
    </div>
  </div>
</template>
<style lang="less">
#footer {
  margin-top: 1.4rem;
  color: #fff;
  .companyinfo {
    font-size: 0.16rem;
    line-height: 0.2rem;
    padding-top: 0.52rem;
    padding-bottom: 0.66rem;
    margin-right: auto;
    background-color: #2d2f32;
    .info {
      > p {
        margin-bottom: 0.16rem;
      }
      .info-line {
        width: 0.52rem;
        height: 0.08rem;
        background-color: #d8d8d8;
        margin-bottom: 0.14rem;
      }
      .info-concat {
        font-size: 0.24rem;
        line-height: 0.32rem;
        margin-bottom: 0.2rem;
      }
    }
    .qrcode {
      display: flex;
      div {
        &:first-child {
          margin-right: 0.28rem;
        }
        > img {
          width: 1.04rem;
          height: 1.04rem;
          margin-bottom: 0.14rem;
          background-color: red;
        }
      }
    }
  }
  .copyright {
    font-size: 0.14rem;
    line-height: 0.48rem;
    background-color: #1e1f21;
  }
}
</style>