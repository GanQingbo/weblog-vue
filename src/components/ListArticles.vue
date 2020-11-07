<template>
    <div>
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
          :formatter="formatter">
        </el-table-column>
        <el-table-column
          prop="stars"
          label="点赞数"
          :formatter="formatter">
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
