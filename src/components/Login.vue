<template>
  <div id="login">
    <div class="loginToHome">
      <el-form ref="loginForm" :model="form" :rules="ruleForm" status-icon label-width="80px" class="loginForm">
        <h3>登陆</h3>
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="form.username" auto-complete="off" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password" auto-complete="off" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="homeBut" type="primary" plain @click="submit" :loading="logining">登录</el-button>
          <el-button class="loginBut" type="primary" plain @click="resetForm()">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        logining: false,
        form: {
          username: '',
          password: ''
        },
        ruleForm: {
          name: [
            { required: true, message: '请输入账号', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ]
        }
      }
    },
    methods: {
      submit(loginForm) {
        this.$refs.loginForm.validate((valid)=>{
          if(valid){
            this.$http.post("/doLogin",{
              username:this.form.username,
              password:this.form.password
            }).then(res=>{
              if(res.data){
                this.$router.replace({path:'/index'})
              }
            })
          }
        })
      },
      resetForm() {
        this.$refs.form.resetFields();
      }

    }
  }
</script>
<style>
  .loginToHome {
    position: absolute;
    left: 0px;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 400px;
    height: 260px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    background: #fff;
    border: 1px solid #dcdfe6;
  }
  .loginForm {
    text-align: center;
    padding-top: 15px;
    padding-right: 30px;
    top: 10px;
  }
  .homeBut {
    position: absolute;
    left: 0px;
  }
  .loginBut {
    position: absolute;
    right: 0px;
  }
</style>
