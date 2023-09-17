<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <el-dialog title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <el-form :model="form" ref="dialogForm" label-width="100px">
            <el-form-item label="姓名" prop="pid">
                <el-cascader v-model="form.name" placeholder="请输入姓名" clearable style="width: 100%;"></el-cascader>
            </el-form-item>
            <el-form-item label="专业班级" prop="label">
                <el-input v-model="form.name" placeholder="请输入专业班级" clearable></el-input>
            </el-form-item>
            <el-form-item label="职位" prop="remark">
                <el-input v-model="form.name" placeholder="请输入职位" clearable type="textarea"></el-input>
            </el-form-item>
            <el-form-item label="资源类型" prop="remark">
                <el-input v-model="form.name" placeholder="请输入资源类型" clearable type="textarea"></el-input>
            </el-form-item>
            <el-form-item label="资源方向" prop="remark">
                <el-input v-model="form.name" placeholder="请输入资源方向" clearable type="textarea"></el-input>
            </el-form-item>
        </el-form>
        <template #footer>
            <el-button @click="visible=false" >取 消</el-button>
            <el-button type="primary" @click="submit()">保 存</el-button>
        </template>
    </el-dialog>
</template>

<script>
export default {
  emits: ['success', 'closed'],
  data () {
    return {
      dialogVisible: false,
      form: {
        name: ' '
      }
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
  }
}
</script>

<style>
</style>
