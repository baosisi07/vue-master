<template>
    <div class="loginPage">
    <div class="loginContent">
    <div class="loginHeader">
公平价业务管理系统</div>
  <div class="container">
    <div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
  <el-form-item prop="name">
    <el-input v-model="ruleForm.name" placeholder="请输入账号"></el-input>
  </el-form-item>
  <el-form-item prop="password">
    <el-input v-model="ruleForm.password" placeholder="请输入密码"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
  </el-form-item>
</el-form>
</div>
  </div>
  <div class="loginFooter">Copyright © 2017-2018. All Rights Reserved</div>
    </div>
</div>

</template>

<script>
import {
  mapState,
  mapActions
} from 'vuex'
export default {
  data () {
    return {
      ruleForm: {
        name: '',
        password: ''
      },
      rules: {
        name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  computed: {
    ...mapState(['login'])
  },
  methods: {
    ...mapActions(['userLogin']),
    submitForm (formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          await this.userLogin({'username': this.ruleForm.name, 'password': this.ruleForm.password})
        } else {
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  },
  watch: {
    login () {
      this.$router.push({
        path: '/home'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.loginPage {
  height: 100%;
  text-align: center;
  display: flex;
  -ms-flex-align: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}
.loginContent {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
.loginHeader {
  color: #333;
  font-size: 30px;
  margin-bottom: 40px;
  letter-spacing: 3px;
  font-weight: bold;
}
.loginFooter {
  color: #6c757d;
  margin-top: 30px;
}
.el-button {
  width: 100%;
}
</style>
