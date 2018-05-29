<template>
  <div>
    <div class="border">
      <h4 style="color: #3e82f7">子组件</h4>
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
    </div>
  </div>
</template>

<script>

export default {
  props: ['tableData'],
  data () {
    return {}
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
