<template>
    <el-card v-if="isShow" class="box-card">
    <div  class="data-table">
      <div class="text-item">
        <div class="item-des">任务名称</div>
        <div class="item-val">{{tasksData.title}}</div>
      </div>
      <div class="text-item">
        <div class="item-des">任务总量</div>
        <div class="item-val">{{tasksData.total}}</div>
      </div>
      <div class="text-item">
        <div class="item-des">已完成</div>
        <div class="item-val">{{tasksData.finished}}</div>
      </div>
      <div class="text-item">
        <div class="item-des">开始时间</div>
        <div class="item-val">{{tasksData.startDate}}</div>
      </div>
      <div class="text-item">
        <div class="item-des">结束时间</div>
        <div class="item-val">{{tasksData.finishDate}}</div>
      </div>
    </div>
  
</el-card>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import { getSessionStore } from '../../config/util'

  export default {
    data () {
      return {
        isShow: true
      }
    },
    computed: {
      ...mapState(['tasksData'])
    },
    created () {
      console.log('created')
      const defaultNav = getSessionStore('defaultNav')
      if (defaultNav.indexOf('dataInput') > 0 || defaultNav.indexOf('validateData') > 0) {
        this.isShow = true
        this.getCurrentTask()
      } else {
        this.isShow = false
      }
    },
    methods: {
      ...mapActions(['getCurrentTask'])
    }
  }
</script>