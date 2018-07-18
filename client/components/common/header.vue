<template>
    <div class="header">
        <el-row :gutter="10">
            <!--Logo area-->
            <el-col :md="4">
                <div class="logo">
                    <span class="logo_suffix">公平价业务管理系统</span>
                </div>
            </el-col>
         <el-col :offset="18" :md="2" class="userInfo">
            <div class="user-header">
                <el-dropdown trigger="click">
                <div><img src="../../assets/images/b_header.jpg" width="40px" />
                    <span class="username">
                    {{user}}<i class="el-icon-arrow-down"></i>
                  </span></div>

                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item >
                            <div class="setting-div">
                                <span class="setting-string">个人中心</span>
                            </div>
                        </el-dropdown-item>
                        <el-dropdown-item divided>
                            <div class="setting-div" @click="logout">
                                <span class="setting-string">退出</span>
                            </div>

                        </el-dropdown-item>

                    </el-dropdown-menu>
                </el-dropdown>
            </div>

         </el-col>
        </el-row>

    </div>

</template>

<script>
  import { mapActions } from 'vuex'
  import { getSessionStore } from '../../config/util'
  const user = getSessionStore('username')
  export default {
    data () {
      return {
        user: user
      }
    },
    methods: {
      ...mapActions(['userLogout']),
      logout () {
        this.userLogout({ 'username': '', 'password': '', 'router': this.$router })
      }
    }
  }
</script>

