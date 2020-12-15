<template>
  <div id="footer" class="hidden-md-and-down">
    <div class="companyinfo">
      <div class="container">
        <div class="info">
          <p class="info-line"></p>
          <p class="info-concat">联系我们</p>
          <p class="info-detail">客服电话：18515478995（周一到周五早上9点-晚上10点）</p>
          <p class="info-detail">wangxueling@yaocaiwuziyou.com</p>
          <p class="info-detail">地址：北京市海淀区上地辉煌国际2号楼7层</p>
        </div>
        <div class="qrcode">
          <div>
            <img src="">
            <span>优睿驰官方微信</span>
          </div>
          <div>
            <img src="">
            <span>客服微信</span>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">Copyright© 2009-2020 weimiao.cn 北京优睿驰科技有限公司 版权所有 京ICP备19026951号-2 京公网安备11010802033402号</div>
  </div>
</template>
<style lang="less">
#footer {
  color: #fff;
  .companyinfo {
    background-color: #2d2f32;
    padding-top: 52px;
    padding-bottom: 66px;
    margin-right: auto;
    font-size: 16px;
    line-height: 20px;
    .info {
      margin-right: auto;
      > p {
        margin-bottom: 16px;
      }
      .info-line {
        width: 52px;
        height: 8px;
        background-color: #d8d8d8;
        margin-bottom: 14px;
      }
      .info-concat {
        font-size: 24px;
        line-height: 32px;
        margin-bottom: 20px;
      }
    }
    .qrcode {
      display: flex;
      & > div {
        &:first-child {
          margin-right: 28px;
        }
        & > img {
          width: 104px;
          height: 104px;
          background-color: red;
        }
        & > span {
          display: block;
          text-align: center;
          padding-top: 14px;
        }
      }
    }
  }
  .copyright {
    font-size: 14px;
    line-height: 48px;
    text-align: center;
    background-color: #1e1f21;
  }
}
</style>