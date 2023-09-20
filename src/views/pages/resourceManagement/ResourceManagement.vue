<!--
 * @FileDescription: 管理员端资源管理
 * @Author: 钟胡琴
 * @Date: ——
 * @LastEditors: 李思佳
 * @EditDescription:
  主要修改template标签里面的架构，因为HomeScaffold文件里面已经搭建好了<el-container>、<el-main>等容器组件，所以不需要再加这些标签，加了反而会使页面样式崩掉，还有一些零零碎碎的小细节未列举，有兴趣可以瞅瞅。
  components文件是存放整个应用程序中可使用的共享组件，建议下一次将组件文件存放进components文件夹。
 * @LastEditTime: ——
-->
<template>
<div>
  <el-card>
    <el-input placeholder="请输入关键字" v-model="input3" class="input-with-select">
      <el-button slot="append" icon="el-icon-search" @click="search()"></el-button>
    </el-input>
    <el-table
    border
      :header-cell-style="{ textAlign: 'center' }"
      :cell-style="{ textAlign: 'center' }"
      style="margin-bottom: 1.5%;"
      :data="tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)"
    >
    <el-table-column label="标题" width="180">
      <template slot-scope="scope">
        <span>{{ scope.row.title }}</span>
      </template>
    </el-table-column>
    <el-table-column label="内容" width="180">
      <template slot-scope="scope">
        <span>{{ scope.row.content }}</span>
      </template>
    </el-table-column>
    <el-table-column label="姓名" width="100">
      <template slot-scope="scope">
        <span>{{ scope.row.username }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="专业班级"
      width="100">
      <template slot-scope="scope">
        <span>{{ scope.row.class }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="职位"
      width="180">
      <template slot-scope="scope">
        <span>{{ scope.row.userposition }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="资源类型"
      width="180">
      <template slot-scope="scope">
        <span>{{ scope.row.type }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="资源方向"
      width="180">
      <template slot-scope="scope">
        <span>{{ scope.row.directiontype }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作" fixed="right" width="200">
      <template slot-scope="scope">
        <div class="button-group">
          <a :href="scope.row.url" target="_blank">
            <el-button type="info" size="small">
            查看
          </el-button>
        </a>
          <el-button type="primary" size="small" @click="table_edit(scope.row, scope.$index)" style="margin-left: 0">编辑</el-button>
          <el-popconfirm title="确定删除吗？" @confirm="table_del(scope.row, scope.$index)">
            <template #reference>
              <el-button type="danger" size="small">删除</el-button>
            </template>
          </el-popconfirm>
        </div>
      </template>
    </el-table-column>
  </el-table>
<!-- 分页 -->
<div class="block" align="center">
      <el-pagination small background @size-change="handleSizeChange" @current-change="handleCurrentChange"
        :current-page="currentPage" :page-size="pageSize" :page-sizes="[10, 20, 30, 40]" layout="prev, pager, next"
        :total="tableData.length" align="center">
      </el-pagination>
    </div>
  </el-card>
        <saveDialog ref="save" :data="editData" />
</div>
</template>

<script>
import saveDialog from './save'
export default {
  emits: ['success', 'closed', 'reloadData'],
  components: {
    saveDialog
  },
  data () {
    return {
      input3: '',
      // 表格
      tableData: [],
      // 分页
      currentPage: 1,
      pageSize: 9,
      id: '',
      url: ' ',
      searchResults: [], // 存储搜索结果
      editData: {
        name: 'John Doe',
        age: 30,
        email: 'john@example.com'
      },
      downloadUrl: ''
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    async getList () {
      const { data: res } = await this.$http.post('/api/admin/FindResouce')
      console.log(res)
      this.tableData = res.data
    },
    table_edit (row) {
      this.$refs.save.show()
      console.log(row.id)
      sessionStorage.setItem('id', row.id)
    },

    async table_del (row) {
      sessionStorage.setItem('id', row.id)
      const { data: res } = await this.$http.post('/api/admin/tzldelete', {
        id: sessionStorage.getItem('id')
      })
      console.log(res)
      if (res.code === 200) {
        this.$message({
          message: '删除成功',
          type: 'success'
        })
      } else {
        this.$message({
          message: '删除失败！请重试！',
          type: 'warning'
        })
      }
    },
    async search () {
      const { data: res } = await this.$http.post('/api/admin/SearchResouce', {
        content: this.input3
      })
      console.log(res.data)
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (currentPage) {
      // console.log(`当前页: ${val}`)
      this.currentPage = currentPage
    }
  }
}
</script>

<style scoped>

.button-group {
  display: flex; /* 使用 Flex 布局 */
  justify-content: space-between; /* 平均分配按钮之间的空间 */
  align-items: center; /* 垂直居中按钮 */
}

.el-footer {
  margin-top: 1.5%;
}

.input-with-select {
  margin-bottom: 1.5%;
  width: 40%;
}

.nopadding {
  margin-bottom: 100px;
}

.img {
  width: 100%;
  height: 20px;
}
</style>
