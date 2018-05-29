<template>
  <div>
    <div style="border: 1px #3e82f7 solid; padding: 10px;margin-top: 10px;">
      <h3 style="color: #3e82f7">子组件</h3>
      <el-table
        :data="tableData"
        border>
        <el-table-column
          prop="name"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="age"
          label="年龄">
        </el-table-column>
      </el-table>

      <el-row :gutter="20" style="padding-top:10px; ">
        <el-col :span="12"><el-button @click="changeName('liuyongfei')">修改名字</el-button></el-col>
        <el-col :span="12"><el-button @click="changeAge(60)">修改年龄</el-button></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>

export default {
  props: ['tableData'],
  data () {
    return {}
  },
  methods: {
    changeName (name) {
      this.$emit('setName', name)
    },
    changeAge (age) {
      this.$emit('setAge', age)
    }
  }
}
</script>

<style lang="scss">
  .el-table th {
    text-align: center;
  }
</style>
