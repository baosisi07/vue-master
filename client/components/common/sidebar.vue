<template>
  <div class="sidebar">
    <el-menu :default-active="getCurrent" class="el-menu-vertical-demo" theme="dark" @select="handleSelect" background-color="#324157"
      text-color="#eee"
      active-text-color="#409EFF"  unique-opened router>
      <template v-for="item in getMenus">
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
    import { mapGetters, mapMutations } from 'vuex'
    import { getSessionStore } from '../../config/util'

    export default {
      data () {
        return {
        }
      },
      computed: {
        ...mapGetters(['getMenus', 'getCurrent'])
      },
      created () {
        const dNav = getSessionStore('defaultNav')
        this.setRouter({defaultNav: dNav})
      },
      methods: {
        ...mapMutations({
          setRouter: 'CURRENT_ROUTER'
        }),
        handleSelect (index, indexPath) {
          this.setRouter({defaultNav: index})
        }
      }
    }
</script>

