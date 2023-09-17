<template>
  <el-container class="home-container">
    <!-- 头部导航 -->
    <el-header>
      <div class="header-div">
        <i class="el-icon-s-custom"></i>
        <span> | </span>
        <span>管理员</span>
      </div>
      <div>
        <el-button type="danger" icon="el-icon-switch-button" circle @click="loginout"></el-button>
      </div>
    </el-header>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">
        <el-menu background-color="#1f2d3d"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
        <el-menu-item index="/AnnouncementPage">
          <i class="el-icon-edit"></i>
          <span slot="title">发布公告</span>
        </el-menu-item>

          <!-- 账号管理 -->
          <el-menu-item index="/AccountManagement">
          <i class="el-icon-s-tools"></i>
          <span slot="title">账号管理</span>
        </el-menu-item>

          <!-- 资源管理 -->
          <el-menu-item index="/ResourceManagement">
          <i class="el-icon-menu"></i>
          <span slot="title">资源管理</span>
        </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
      <el-footer>
      <el-divider content-position="center">
        Copyright © 2023 205 软件开发项目组. 保留所有权利。
      </el-divider>
    </el-footer>
    </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    loginout () {
      this.$router.push('/LogIn')
    }
  }
}
</script>

<style scoped>
/* 导入footer样式 */
@import '../../assets/css/footer.css';
.header-div {
  width: 10rem;
  font-size: 25px;
  font-family: 'kaiti';
  font-weight: 700;
}

.home-container {
  height: 100%;
}
.el-header {
  background-color: #383d4b;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.el-aside {
  background-color: rgb(48, 65, 86);
  color: #333;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  float: right;
  /* line-height: 160px; */
}
body > .el-container {
  margin-bottom: 40px;
}

.head_icon {
  display: flex;
  font-size: 20px;
}

.message {
  margin-left: 18px;
}

::v-deep .el-submenu__title {
  background-color: rgb(48, 65, 86) !important;
}

::v-deep .el-menu-item.is-active {
  color: rgb(64, 158, 255) !important;
}
</style>
