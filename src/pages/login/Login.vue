<template>
  <div class="login-container">
    <!--登陆面板内容部分-->
    <div class="login-inner">
      <!--面板头部-->
      <div class="login-header">
        <div class="login-logo">
          <img src="./images/logo1.png" alt="" width="250">
        </div>
        <!--面板标题-->
        <div class="login-header-title">
          <a href="javascript:;" :class="{current: loginMode}" @click="dealLoginMode(true)">短信登陆</a>
          <a href="javascript:;" :class="{current: !loginMode}" @click="dealLoginMode(false)">密码登陆</a>
        </div>
      </div>
      <!--面板表单部分-->
      <div class="login-content">
        <form>

          <!--手机验证码登陆部分-->
          <div :class="{current: loginMode}">
            <section class="login-message">
              <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
              <button
                v-if="!countDown"
                class="get-verification"
                :class="{'phone-right': phoneRight}"
                @click.prevent="getVerifyCode()"
              >获取验证码
              </button>
              <button
                v-else
                disabled="disabled"
                class="get-verification"
              >已发送({{countDown}}s)
              </button>
            </section>
            <section class="login-verification">
              <input type="tel" maxlength="8" placeholder="验证码" v-model="code">
            </section>
            <section class="login-hint">
              温馨提示: 未注册账号的手机号,登陆时将自动注册,且代表已同意
              <a href="javascript:;">服务协议与隐私政策</a>
            </section>
          </div>

          <!--账号登陆部分-->
          <div :class="{current: !loginMode}">
            <section class="login-message">
              <input
                v-model="user_name"
                type="text" maxlength="11" placeholder="用户名/手机/邮箱">
            </section>
            <section class="login-verification">
              <input
                type="password"
                maxlength="18"
                placeholder="密码"
                v-if="pwdMode"
                v-model="pwd"
                autocomplete="off"
              >
              <input v-model="pwd" type="text" maxlength="18" placeholder="密码" v-else />
              <div class="switch-show">
                <img
                  @click.prevent='dealPwdMode(false)'
                  :class="{on: pwdMode}"
                  src="./images/hide_pwd.png" alt="" width="20">
                <img
                  @click.prevent='dealPwdMode(true)'
                  :class="{on: !pwdMode}" src="./images/show_pwd.png" alt="" width="20">
              </div>
            </section>
            <!--<section class="login-message">
              <input
                v-model="captcha"
                type="text" maxlength="11" placeholder="验证码">
              <img
                ref="captcha"
                src="http://localhost:3000/api/captcha"
                class="get-verification"
                @click.prevent="getCaptcha()"
              >
            </section>-->
          </div>
          <button class="login-submit" @click.prevent="login">登陆</button>
        </form>
        <button class="login-back" @click="$router.back()">返回</button>
      </div>
    </div>
  </div>
</template>

<script>
  import {getPhoneCode, phoneCodeLogin, pwdLogin} from '@/api/index.js';
  import { Toast } from 'mint-ui';
  import {mapActions} from 'vuex';
  export default {
    name: "Login",
    data() {
      return {
        loginMode: true,
        phone: '',      //手机号
        countDown: 0,   //倒计时
        pwdMode: true,  //密码显示方式
        pwd: '',   //密码
        code: '',   //验证码
        captcha: '',
        user_name: '',
        userInfo: {}   //用户信息
      }
    },
    computed: {
      //验证手机号是否合理
      phoneRight() {
        return /^1[3-8][0-9]{9}$/.test(this.phone)
      }
    },
    methods: {
      ...mapActions(['syncUserInfo']),
      //登录模式
      dealLoginMode(flag) {
        this.loginMode = flag;
      },
      //验证码倒计时
      async getVerifyCode() {
        //开启倒计时
        if(this.phoneRight) {
          this.countDown = 60;
          this.intervalId = setInterval(() => {
            this.countDown --;
            if(this.countDown === 0) {
              clearInterval(this.intervalId);
            }
          }, 1000);
        }
        let result = await getPhoneCode(this.phone);
        Toast(result);
        console.log(result);
      },
      dealPwdMode(flag) {
        this.pwdMode = flag;
      },
      getCaptcha() {
        this.$refs.captcha.src = 'http://localhost:3000/api/captcha?time=' + new Date();
      },
      async login() {
        //登陆模式
        if(this.loginMode) { //验证码登录
          // 1。 前台校验
          if(!this.phone){
            Toast("请输入手机号码");
            return;
          } else if (!this.phoneRight) {
            Toast("请输入正确的手机号码")
            return;
          }
          if (!this.code) {
            Toast("请输入验证码")
            return;
          } else if (!/^\d{6}$/gi.test(this.code)) {
            Toast("请输入正确的验证码")
            return;
          }
          const result = await phoneCodeLogin(this.phone, this.code);
          console.log(result);

          if(result.success_code === 200) {
            this.userInfo = result.message;
          } else {
            this.userInfo = {
              message: '登录失败'
            };
          }
        } else {  //账号密码
          if(!this.user_name){
            Toast("请输入用户名");
            return;
          } else if (!this.pwd) {
            Toast("请输入密码")
            return;
          } 
          const result = await pwdLogin(this.user_name, this.pwd);
          //console.log(result)

          if(result.success_code === 200) {
            this.userInfo = result.message;
          } else {
            this.userInfo = {
              message: '登录失败'
            };
          }
        }
        //后续处理
        if(!this.userInfo.id) {  //失败
          Toast("失败")
        } else {  //成功
          //同步用户数据
          this.syncUserInfo(this.userInfo);
          //回组件
          this.$router.replace('/mine');
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "./../../common/stylus/mixins.styl"
  .login-container
    width 100%
    height 100%
    background #f5f5f5
    .login-inner
      padding-top 60px
      margin 0 auto
      width 80%
      .login-header
        .login-logo
          font-size: 40px
          color mediumpurple
          text-align: center
        .login-header-title
          padding-top 40px
          padding-bottom 10px
          text-align: center
          > a
            font-size: 14px
            padding-bottom: 4px
            color #333
            &:first-child
              margin-right 40px
            &.current
              font-weight: 700;
              border-bottom: 2px solid #f44739
              color #f44739
      .login-content
        > form
          > div
            display none
            &.current
              display block
            input
              width 100%
              height 100%
              padding-left: 8px;
              box-sizing: border-box
              border: 1px solid #ddd
              border-radius 4px
              outline none
              font 400 14px Arial
              &:focus
                border 1px solide #f44739
            .login-message
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background: #fff
              .get-verification
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                border 0
                color #ccc
                font-size: 14px
                background transparent
                &.phone-right
                  color: purple
            .login-verification
              position relative
              margin-top 16px
              height 48px
              font-size: 14px
              background: #fff
              .switch-show
                position absolute
                right 10px
                top 12px
                img
                  display none
                img.on
                  display block
            .login-hint
              margin-top 12px
              font-size 12px
              line-height: 20px
              color #999
              > a
                color #f44739
          .login-submit
            display: block
            width 100%
            height 42px
            margin-top: 30px;
            border-radius 4px
            background: #f44739
            text-align: center
            font-size: 16px
            line-height 42px
            color #fff
        .login-back
          display block
          width 100%
          height 42px
          margin-top 15px
          border-radius 4px
          background transparent
          border 1px solid #f44739
          text-align: center
          font-size: 16px
          line-height: 42px
          color #f44739
  .mint-toast
    height: 1rem
    width: 2rem
    background: grey 
    border: 1px solid balck
</style>
