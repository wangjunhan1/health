<template>
  <div class="login-container">
      <!--面板表单部分-->
      <div class="login-content">
        <form>
          <!--账号登陆部分-->
          <div>
            <section class="wrap">
              <input
                v-model="start"
                type="text" maxlength="12" placeholder="开始时间" class="date">
            </section>
            <section class="wrap">
              <input
                type="text"
                maxlength="12"
                placeholder="结束时间"
                v-model="end"
                class="date"
              >
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
          <button class="submit" @click.prevent="choose">筛选</button>
        </form>
      </div>
  </div>
</template>

<script>
  import { chooseMess } from '@/api/index.js';
  export default {
    name: "Login",
    data() {
      return {
        start: '',   //密码
        end: '',
        weekInfo: {}   //每周数据信息
      }
    },
    methods: {
      async choose() {
        //账号密码
        if(!this.start){
        Toast("请输入开始日期");
        return;
        } else if (!this.end) {
        Toast("请输入截至时间")
        return;
        } 
        const result = await chooseMess(this.start, this.end);
        console.log(result);
        if(result.success_code === 200) {
            this.weekInfo = result.message;
            console.log(this.weekInfo);
        } else {
            this.weekInfo = {
                message: '失败'
        };
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
    .login-content
        text-align: center
        .submit
            background: raba(0, 0, 0, 0, 0.8)
            width: 1rem
            color: black
            margin-top: .1rem
        .date
            color: white
            border: 1px solid black
            border-radius: .2rem
            width: 45%
            background: rgba(0, 0, 0, 0, 0)
            margin-top: .1rem
</style>
