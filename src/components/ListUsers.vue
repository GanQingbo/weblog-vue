<template>
  <div>
  <el-table  :height="300" :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))" style="width: 100%">
    <el-table-column label="用户ID" prop="id" width="180%">
    </el-table-column>

    <el-table-column label="密码" width="180" >
      <template slot-scope="scope">
        <span >{{ scope.row.pwd }}</span>
      </template>
    </el-table-column>

    <el-table-column label="姓名" width="180" prop="realName">
    </el-table-column>

    <el-table-column label="手机" width="180" prop="phone">
    </el-table-column>

    <el-table-column label="操作" align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-popconfirm
          title="确定删除？"
          @onConfirm="handleDelete(scope.$index, scope.row)"
        >
          <el-button slot="reference" size="mini"
                     type="danger">删除</el-button>
        </el-popconfirm>
      </template>
    </el-table-column>
  </el-table>

  <el-button type="primary" @click="saveUser" style="margin:10px 0px;">添加用户</el-button>
    <transition name="el-zoom-in-center">
      <div v-show="show" class="transition-box">

        <el-form ref="userForm" :rules="rules" :model="form" label-width="80px">

          <el-form-item label="密码">
            <<el-input v-model="form.pwd"></el-input>
          </el-form-item>

          <el-form-item label="姓名" prop="name1">
            <<el-input v-model="form.realName"></el-input>
          </el-form-item>

          <el-form-item label="手机">
            <<el-input v-model="form.phone"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit('userForm')">保存信息</el-button>
            <el-button @click="saveUser">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </transition>
  </div>
</template>

<script>
    export default {
      name: "ListUsers",
      data() {
        return {
          tableData: [],
          search: '',
          show:false,
          form: {
            realName: '',
            phone:'',
            pwd:'',
          },
          //表单校验规则
          rules:{
            name1:[
              {required:true,message:'请输入姓名',trigger:'blur'},
            ]
          }
        };
      },
      methods: {
        saveUser(){
          //点击添加时的数据处理，可进行初始化，清空表单
          this.form={};
          this.show=!this.show;
        },
        handleEdit(index, row) {
          console.log(index, row);
          //编辑，需要进行数据回显
          //显示表单
          this.show=true;
          //回显
          this.form=row;
        },
        handleDelete(index, row) {
          //删除,打印相关信息，刷新网页
          console.log(index, row);
          this.$http.get("http://localhost:8081/user/delete?id="+row.id).then(res=>{
            this.findAll();
          })
        },
        //表单别名userForm进行数据校验
        onSubmit(userForm) {
          this.$refs[userForm].validate((valid) => {
            if (valid) {
              this.$http.post("http://localhost:8081/user/save",this.form).then(res=>{
                if(res.data) {
                  this.$message({
                    //res.data.msg
                    message: '恭喜你，这是一条成功消息',
                    type: 'success'
                  });
                  //清空表单信息
                  this.form = {};
                  this.show = false;
                  //更新页面数据
                  this.findAll();
                }
              })
            } else {
              this.$message.error('错误消息');
              return false;
            }
          });
          },
        findAll(){
          this.$http.get("http://localhost:8081/user/findall").then(res=>{
            this.tableData=res.data;
          });
        },

      },
      //创建时执行
      created() {
        // this.$http.get("http://localhost:8081/user/findall").then(res=>{
        //   this.tableData=res.data;});
        this.findAll();
      }
    }
</script>

<style scoped>
  .transition-box {
     margin-bottom: 10px;
     width: 100%;
     height: 500px;
     border-radius: 4px;
     background-color: azure;
     padding: 40px 20px;
     box-sizing: border-box;
     margin-right: 20px;
   }
</style>
