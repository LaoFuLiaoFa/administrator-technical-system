<!--
 * @FileDescription: 管理员端首页
 * @Author: 骆丽娜
 * @Date: ——
 * @LastEditors: 李思佳
 * @EditDescription:
  ......
 * @LastEditTime: ——
-->
<template>
  <div>
    <el-card>
      <el-form>
        <el-form-item label="公告内容：">
          <el-input
  type="textarea"
  :autosize="{ minRows: 19, maxRows: 19}"
  placeholder="请输入公告内容"
  v-model="form.desc"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
    </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        desc: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('提交')
    }
  }
}
</script>

<style>
* {
    /* 初始化 */
    margin: 0;
    padding: 0;
}

.nav1 {
    width: 1366px;
    height: 72px;
    background-color: white;
    line-height: 72px;
}

.nav1 p {
    margin-left: 61px;
    font-size: 16px;
    color: black;
}

.nav1 button {
}
.nav2 {
    display:inline;
    width: 228px;
    height: 699px;
    background-color: rgb(229, 240, 243);
    text-align: center;
}

.nav2 a {
    display: inline-block;
    width: 228px;
    height: 40px;
    font-size: 16px;
    background-color: white;
    line-height: 40px;
    color: black;
    text-decoration: none;
    letter-spacing: 25px;
}

.nav2 a:hover {
    background-color: rgb(229, 240, 243);
    color: rgb(132, 179, 255);
}

.nav3 {
    margin-left: 317px;
    margin-top: 88px;
}

.nav3 textarea{
    width: 716px;
    height: 198px;
    border: 1px solid rgb(239, 239, 239);
}

.button {
    display: inline-block;
    width: 98px;
    height: 40px;
    background-color: rgb(23, 163, 228);
}
</style>
