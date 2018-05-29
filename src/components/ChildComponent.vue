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

      <el-row :gutter="20" style="padding-top:10px; ">
        <el-col :span="12"><el-button @click="changeData(1,'hello')">修改名字</el-button></el-col>
        <el-col :span="12"><el-button @click="changeData(2,60)">修改年龄</el-button></el-col>
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

    /**
     * 修改数据
     * @param type 类型  修改名字：(type = 1),修改年龄：(type = 2)
     * @param data 要修改的数据
     */
    changeData (type, data) {
      this.$emit('updateData', {type: type, data: data})
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
