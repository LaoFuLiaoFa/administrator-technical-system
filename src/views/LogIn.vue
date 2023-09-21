<!--
 * @FileDescription: 管理员端资源管理
 * @Author: 罗雨娴
 * @Date: ——
 * @LastEditors: 李思佳
 * @EditDescription: 背景图片不能重复，细看css样式有点混乱嗷，可以看看其他页面的代码，比如另一个端的登录注册页面代码。
 * @LastEditTime: ——
-->
<template>
  <div class="login_container">
    <div class="total">
      <h1 class="title">信 息 分 享 中 心 管 理 员</h1>
      <!-- 登录表单区 -->
      <el-form :model="loginForm" :rules="loginFormRules" ref="loginFormRef" class="login_form">
        <!-- 用户名 -->

        <el-form-item prop="account" style="margin-bottom: 4rem;">
          <el-input v-model="loginForm.account" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password" style="margin-bottom: 4rem;">
          <el-input v-model="loginForm.password" placeholder="请输入密码" type="password"></el-input>
        </el-form-item>
        <!-- 登录按钮 -->
      </el-form>
      <el-button round class="btn" @click="login">登录</el-button>
    </div>
    <div class="footer-div">
      —————————— Copyright © 2023 205 软件开发项目组. 保留所有权利。 ——————————
    </div>
  </div>
</template>

<script>
// import '../assets/css/LogIn.css'
export default {
  data () {
    return {
      // 这是登陆表单的数据绑定对象
      loginForm: {
        account: '1179378262',
        password: 'wzh123'
      },
      // 表单验证规则对象
      loginFormRules: {
        // 验证用户名是否合法
        account: [
          { required: true, message: '请输入用户名称', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    async login () {
      const { data: res } = await this.$http.post('/api/adminLogin', {
        account: this.loginForm.username,
        password: this.loginForm.password
      })
      // console.log(res.data)
      if (res.code === 200) {
        this.$message({
          message: '登录成功',
          type: 'success'
        })
        this.$router.push('/HomeScaffold')
        window.localStorage.setItem('token', res.data)
      } else {
        this.$message({
          message: '登录失败！请重试！',
          type: 'warning'
        })
      }
    }
    // this.$router.push('/HomeScaffold')
  }
}
</script>

<style scoped>
.footer-div {
  margin-top: 10%;
  width: 100%;
  color: #009DFF;
}

.login_container {
  height: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background: url("../assets/images/background.jpg") no-repeat center 0px;
  background-size: cover;
  background-position: center 0;
  background-repeat: no-repeat;
  background-attachment: fixed;
  -webkit-background-size: cover;
  -o-background-size: cover;
  -moz-background-size: cover;
  -ms-background-size: cover;
}

.login_form {
  /* position: absolute;
top: 0;
left: 0;
transform: translate(0%,0%); */
  /* display: block; */
  width: 24%;
  margin: 0 auto;
  border-radius: 20px;
}

.btn {
  width: 401px;
  height: 40px;
  color: #025478;
}

.title {
  /* position: absolute; */
  /* top: 250px;
  left: 625px; */
  color: white;
  font-family: 'kaiti';
  font-size: 45px;
  margin: 0;
  padding-top: 7%;
  padding-bottom: 5%;
}

.username {
  padding-bottom: 20px;
  color: #97b1c7;
  border-radius: 10px;
  display: block;
  width: 401px;
  height: 40px;
  /* margin-left: 330px; */
  margin-top: 140px;
}

.password {
  padding-bottom: 20px;
  color: #97b1c7;
  border-radius: 10px;
  width: 401px;
  height: 40px;
  /* margin-left: 330px; */
  display: block;
}

::v-deep .el-input__inner {
  border-radius: 20px;
}

.image1 {
  /* margin-top: 30%; */
  bottom: 10%;
  transform: translate(33%, -50%);
  position: absolute;
}
</style>
