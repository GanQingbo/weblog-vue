<template>
  <div>
    <h1>热门文章</h1>
    <el-table
      :data="tableData"
      style="width: 100%"
      :default-sort = "{prop: 'stars', order: 'descending'}"
    >
      <el-table-column
        prop="title"
        label="文章标题"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="nickName"
        label="作者"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="publishTime"
        label="发表时间"
        sortable
        width="180"
        >
      </el-table-column>
      <el-table-column
        prop="stars"
        label="点赞数"
        sortable
        width="180"
        >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "ListArticles",
    data(){
      return{
        tableData: []
      }
    },
    methods: {
      formatter(row, column) {
        return row.address;
      }
    }
  }
</script>

<style scoped>

</style>
