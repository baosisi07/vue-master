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

  export default {
    props: ['type'],
    data () {
      return {
        isShow: true
      }
    },
    computed: {
      ...mapState(['tasksData', 'isAbleInput', 'isAbleValidate'])
    },
    created () {
      this.getCurrentTask({task_type: this.type})
    },
    beforeMount () {
      console.log(this.$store.state.isAbleInput)
      if (this.type === '1' && !this.$store.state.isAbleInput) {
        this.$message({
          message: '当前没有任务！',
          type: 'warning'
        })
      }
      if (this.type === '2' && !this.$store.state.isAbleValidate) {
        this.$message({
          message: '当前没有任务！',
          type: 'warning'
        })
      }
    },
    methods: {
      ...mapActions(['getCurrentTask'])
    }
  }
</script>