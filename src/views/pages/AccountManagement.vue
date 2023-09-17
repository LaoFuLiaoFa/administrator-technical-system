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
          <el-input placeholder="请输入内容">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
        <div class="email">
          <el-table :data="tableData" border :header-cell-style="{ textAlign: 'center' }"
            :cell-style="{ textAlign: 'center' }" stripe style="margin-bottom: 1.5%;">
            <el-table-column prop="date" label="邮箱" width="180px">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180px">
            </el-table-column>
            <el-table-column prop="address" label="专业班级">
            </el-table-column>
            <el-table-column prop="choose" label="操作">
            </el-table-column>
          </el-table>
        </div>
      </div>
      <el-pagination background layout="prev, pager, next" :total="100">
      </el-pagination>
      <!-- <div class="next">
  <img src="next.png" alt="">
  </div> -->
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        choose: 'none'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        choose: 'none'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        choose: 'none'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        choose: 'none'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        choose: 'none'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        choose: 'none'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        choose: 'none'
      }]
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
