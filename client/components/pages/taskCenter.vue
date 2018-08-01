<template>
   <div>
    <v-pageTitle vtitle="历史任务"></v-pageTitle>

    <el-form inline :model="taskSearchRuleForm" class="demo-form-inline">
    <el-form-item label="人员">
      <el-select class="fixWid" v-model="taskSearchRuleForm.people" placeholder="请选择">
      <el-option
        v-for="item in usersList"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    </el-form-item>
    <el-form-item label="任务类型">
      <el-select v-model="taskSearchRuleForm.taskType" placeholder="请选择">
      <el-option
        v-for="item in taskTypeList"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    </el-form-item>
    <el-form-item  label="起止时间">
      <el-date-picker
        v-model="taskSearchRuleForm.startEndDate"
        type="daterange"
        format="yyyy-MM-dd"
        value-format="yyyy-MM-dd"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
      </el-date-picker>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="searchHistory">查询</el-button>
    </el-form-item>
  </el-form>

  <el-row :gutter="20">
    <el-col :xs="24" :sm="24" :md="24" :lg="24">
      <el-card>
          <div slot="header" class="clearfix">
              <span>任务列表</span>
              <el-button style="float: right; padding: 3px 0" type="text">新建</el-button>
            </div>
            <el-table :data="taskHistoryTable" style="width: 100%" stripe>
            <el-table-column prop="name"  label="姓名"  width="180"></el-table-column>
            <el-table-column prop="taskDate" label="任务日期" width="180"></el-table-column>
            <el-table-column prop="taskType" label="任务类型" width="180"> </el-table-column>
            <el-table-column prop="taskName" label="任务名称" align="right"> </el-table-column>
            <el-table-column prop="totalTask" label="任务总量" align="right"> </el-table-column>
            <el-table-column prop="finished" label="已完成量" align="right"> </el-table-column>
            <el-table-column prop="planFinish" label="计划完成时间" align="right"> </el-table-column>
          </el-table>
        </el-card>
      </el-col>
  </el-row>
  <v-pagination></v-pagination>
   </div>
</template>
<script>
import vPageTitle from '../common/pageTitle.vue'
import vPagination from '../common/pagination.vue'
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      taskSearchRuleForm: {
        people: '',
        taskType: '',
        startEndDate: ''
      }
    }
  },
  components: {vPageTitle, vPagination},
  computed: {
    ...mapState(['taskTypeList', 'usersList', 'taskHistoryTable'])
  },
  created () {
    this.getUserList()
    this.getTaskHistory({
      people: '',
      taskType: '',
      startEndDate: ''
    })
  },
  methods: {
    ...mapActions(['getTaskHistory', 'getUserList']),
    searchHistory () {
      this.getTaskHistory(this.taskSearchRuleForm)
    }
  }
}
</script>
