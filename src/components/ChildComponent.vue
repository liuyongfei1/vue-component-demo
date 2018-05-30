<template>
  <div>
    <div class="border">
      <h4 style="color: #3e82f7">子组件</h4>
      <el-row :gutter="20" style="padding-top:10px; ">
        <el-col :span="8">姓名：</el-col>
        <el-col :span="12"><b>{{this.tableData[0].name}}</b></el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top:20px; ">
        <el-col :span="8">设置新名字：</el-col>
        <el-col :span="10"><el-input v-model="newName"></el-input></el-col>
        <el-col :span="4"><el-button type="primary" @click="changeName">确定</el-button></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>

export default {
  props: ['tableData'],
  data () {
    return {
      newName: ''
    }
  },
  methods: {

    /**
     * 修改名字
     */
    changeName () {
      this.$emit('update-data', this.newName)
    }
  }
}
</script>

<style lang="scss">
  .el-table th {
    text-align: center;
  }
  .border {
    border: 1px #3e82f7 solid;
    padding: 10px;
    margin-top: 10px;
  }
</style>
