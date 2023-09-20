<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <el-dialog :title="titleMap[mode]"
        :visible.sync="isShow"
        width="35%">
        <el-form :model="form" ref="dialogForm" label-width="100px">
            <el-form-item label="标题">
                <el-input v-model="form.title" placeholder="请输入标题"></el-input>
            </el-form-item>
            <el-form-item label="内容">
                <el-input v-model="form.content" placeholder="请输入内容"></el-input>
            </el-form-item>
            <el-form-item label="资源类型">
                <el-input v-model="form.type" placeholder="请输入资源类型"></el-input>
            </el-form-item>
            <el-form-item label="职位">
                <el-input v-model="form.directiontype" placeholder="请输入资源方向"></el-input>
            </el-form-item>
            <el-form-item label="资源">
              <el-upload
                class="upload-demo"
                drag
                accept=".pdf, .doc, .docx, .xls, .xlsx, .png, .jpg"
                v-model="form.imgurl"
                :on-success="handleAvatarSuccess"
                action="http://150.158.53.178:6290/api/Oss"
                name="file"
                :data="{lee:'lll'}"
                multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">上传文件，且不超过500kb</div>
                </el-upload>
            </el-form-item>
        </el-form>
        <div slot="footer">
            <el-button @click="isShow = false" >取 消</el-button>
            <el-button type="primary" @click="handleClose()">保 存</el-button>
        </div>
    </el-dialog>
</template>

<script>
export default {
  props: {
    data: Object // 接收父组件传递的数据
  },
  data () {
    return {
      mode: 'edit',
      titleMap: {
        edit: '编辑'
      },
      isShow: false,
      form: {
        id: '',
        imgurl: '',
        title: '',
        type: '',
        directiontype: '',
        content: ''
      }
    }
  },
  methods: {
    async handleAvatarSuccess (res) {
      // console.log(res.data)
      this.form.imgurl = res.data
      // sessionStorage.setItem('docURL', res.data)
    },
    show () {
      this.isShow = true
    },
    open (mode = 'edit') {
      this.mode = mode
      this.isShow = true
      return this
    },
    updateShow () {
      this.$emit('update:isShow', !this.isShow)
    },
    async handleClose (done) {
      console.log(sessionStorage.getItem('id'))
      const { data: res } = await this.$http.post('/api/admin/tzlapdate', {
        id: sessionStorage.getItem('id'),
        url: this.form.imgurl,
        type: this.form.type,
        directiontype: this.form.directiontype,
        title: this.form.title,
        content: this.form.content
      })
      console.log(res)
      if (res.code === 200) {
        this.$message({
          message: '编辑成功',
          type: 'success'
        })
        this.isShow = false
      } else {
        this.$message({
          message: '编辑失败！请重试！',
          type: 'warning'
        })
      }
    }
  }
}
</script>

<style>
</style>
