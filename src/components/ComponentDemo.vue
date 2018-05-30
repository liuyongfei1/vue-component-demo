<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8" :offset="8">
        <h3>父组件</h3>
        <div class="border">
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
          <child-component v-on:update-data="updateData" :tableData="tableData"></child-component>
        </div>
      </el-col>
      <el-col :span="4"></el-col>
    </el-row>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent'
export default {
  name: 'ComponentDemo',
  components: {
    ChildComponent
  },
  data () {
    return {
      tableData: [
        {
          name: 'test',
          age: 30
        }
      ]
    }
  },
  methods: {
    /**
     * 更新父组件的数据
     * @param obj
     */
    updateData (data) {
      this.tableData[0].name = data
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
  .border {
    border: 1px #2c3e50 solid;
    padding: 10px;
  }
</style>
