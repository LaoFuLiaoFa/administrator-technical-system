<!--
 * @FileDescription: 管理员端账号管理
 * @Author: 张亭婷
 * @Date: ——
 * @LastEditors: 李思佳
 * @EditDescription: 调整了表格样式，不用单独给高度，数据填充进去后，做分页的时候一页只显示刚好不让页面有滚动条的数据量就行。
 * @LastEditTime: ——
-->
<template>
  <div class="container">
    <el-card class="box-card">
      <div>
        <div style="margin:0 auto; width:360px; margin-bottom: 1.5%;" slot="header" class="container-header">
          <el-input placeholder="请输入内容" v-model="data" clearable @clear="getMenuList">
    <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
  </el-input>
        </div>
        <div class="email">
          <el-table :data="showPage" border :header-cell-style="{ textAlign: 'center' }"
            :cell-style="{ textAlign: 'center' }" stripe style="margin-bottom: 1.5%;">
            <el-table-column
      prop="email"
      label="邮箱"
      width="180px">
    </el-table-column>
    <el-table-column
      prop="username"
      label="姓名"
      width="180px">
    </el-table-column>
    <el-table-column
      prop="class"
      label="专业班级">
    </el-table-column>
    <el-table-column
      prop="state"
      label="操作">
      <template slot-scope="scope" >
      <el-switch  active-text="禁用"
  inactive-text="开放" v-model="scope.row.state" active-value="1"
    inactive-value="0" active-color="#13ce66"
  inactive-color="#ff4949"  @change="userChanged(scope.row)">
      </el-switch>
      </template>
    </el-table-column>
          </el-table>
        </div>
      </div>
      <el-pagination background layout="prev, pager, next"  @current-change="page"
  :page-size="this.pageSize"
  :current-page="this.cur"
  :total= 'this.totalpage'>
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  methods: {
    async search () {
      const { data: res } = await this.$http.post('admin/search', { Authorization: 'bearer', token: window.sessionStorage.token, content: this.data })
      if (res.data === []) { this.$message.error('查询失败') } else { this.showPage = res.data }
    },
    async getMenuList () {
      const { data: res } = await this.$http.post('admin/findusers', { Authorization: 'bearer', token: window.sessionStorage.token })
      if (res.code !== 200) return this.$message.error('查询失败')
      this.tabledata = res.data
      this.totalpage = res.data.length
      this.page(this.cur)
    },
    // 分页
    page (num) {
      this.cur = num
      const list = (this.cur - 1) * this.pageSize
      this.showPage = this.tabledata.slice(list, list + this.pageSize)
    },
    prev () {
      if (this.cur !== 1) {
        this.page(--this.cur)
      }
    },
    next () {
      if (this.cur < this.totalpage) {
        this.page(++this.cur)
      }
    },
    // 监听状态的改变
    async userChanged (useinfo) {
      const { data: res } = await this.$http.post('admin/lock', { id: useinfo.id, token: window.sessionStorage.token })
      if (res.code !== 200) return this.$message.error('修改失败')
      this.getMenuList()
      return this.$message.success('修改成功')
    }
  },
  created () {
    this.getMenuList()
  },
  data () {
    return {
      tabledata: [],
      // 分页
      cur: 1,
      totalpage: 0,
      pageSize: 1,
      showPage: [],
      // 搜索关键字
      data: '',
      // 状态
      value1: true
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 10px;
  width: 100%;
  /* height: 90%; */
}

.box-card {
  margin: 0 auto;
  width: 95%;
  /* height: 90%; */
}

.el-pagination {
  margin-top: 40px;
}
</style>
