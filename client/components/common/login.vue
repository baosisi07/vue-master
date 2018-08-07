<template>
    <div class="loginPage">
    <div class="loginContent">
    <div class="loginHeader">
公平价业务管理系统</div>
  <div class="container">
    <div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" size="medium">
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
  },
  methods: {
    ...mapActions(['userLogin']),
    submitForm (formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          await this.userLogin({'username': this.ruleForm.name, 'password': this.ruleForm.password, 'router': this.$router})
        } else {
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
