<template>
  <div class="sidebar">
    <el-menu :default-active="defaultNav" class="el-menu-vertical-demo" theme="dark" @select="handleSelect" background-color="#324157"
      text-color="#eee"
      active-text-color="#409EFF"  unique-opened router>
      <template v-for="item in menus">
        <el-menu-item v-if="!item.submenu" :index="item.index" :key="item.index">
        <i :class="item.icon"></i>
        <span>{{item.name}}</span>
        </el-menu-item>
      <el-submenu  v-if="item.submenu" :index="item.index" :key="item.index">
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{item.name}}</span>
        </template>
        <el-menu-item v-for="i in item.submenu" :index="i.index" :key="i.index">
          <i :class="i.icon"></i>
        <span>{{i.name}}</span>
        </el-menu-item>
      </el-submenu>
      </template>
    </el-menu>
  </div>
</template>
<script>
    export default {
      data () {
        return {
          defaultNav: '/home/dataInput',
          menus: [
            {
              name: '数据录入',
              index: '/home/dataInput',
              icon: 'el-icon-edit'
            },
            {
              name: '数据验证',
              index: '/home/validateData',
              icon: 'el-icon-circle-check-outline'
            }
          ]
        }
      },
      computed: {

      },
      methods: {
        handleSelect (index, indexPath) {
          this.defaultNav = index
        }
      }
    }
</script>

