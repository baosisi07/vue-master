<template>
  <div>
    <el-form class="content-body" :model="assignForm" :rules="rules" ref="assignForm" label-width="100px">
  <el-form-item label="人员" prop="people">
    <el-select v-model="assignForm.people" filterable placeholder="请选择">
    <el-option
      v-for="item in usersList"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-form-item>
  <el-form-item label="任务类型" prop="taskType">
    <el-select v-model="assignForm.taskType" placeholder="请选择">
    <el-option
      v-for="item in taskTypeList"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-form-item>
  <el-form-item label="任务名称" prop="taskName">
    <el-input type="text" v-model.lazy="assignForm.taskName"></el-input>
  </el-form-item>
  <el-form-item label="数量" prop="number">
    <el-input type="number" v-model.lazy="assignForm.number"></el-input>
  </el-form-item>
  <el-form-item  label="起止时间" prop="startEndDate">
    <el-date-picker
      v-model="assignForm.startEndDate"
      type="daterange"
      format="yyyy-MM-dd"
      value-format="yyyy-MM-dd"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit('assignForm')">确定</el-button>
    <el-button @click="resetForm('assignForm')">重置</el-button>
  </el-form-item>
</el-form>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      assignForm: {
        people: '',
        taskType: '',
        taskName: '',
        number: '',
        startEndDate: ''
      },
      rules: {
        people: [
          { required: true, message: '请选择人员', trigger: 'change' }
        ],
        taskType: [
          { required: true, message: '请选择任务类型', trigger: 'change' }
        ],
        number: [
          { required: true, message: '请输入数量', trigger: 'blur' }
        ],
        taskName: [
          { required: true, message: '请输入任务名称', trigger: 'blur' }
        ],
        startEndDate: [
          { required: true, message: '请选择起止日期', trigger: 'change' }
        ]
      }
    }
  },
  computed: {
    ...mapState(['taskTypeList', 'usersList'])
  },
  created () {
    this.getUserList()
  },
  methods: {
    ...mapActions(['getUserList', 'postTaskInfo']),
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const formObj = this.assignForm
          const data = {
            user_id: formObj.people,
            task_name: formObj.taskName,
            task_amount: formObj.number,
            starting_date: formObj.startEndDate[0],
            finishing_date: formObj.startEndDate[0],
            task_type: formObj.taskType,
            refs: () => { this.$refs['assignForm'].resetFields() },
            showMsg: (res) => {
              this.$message({
                message: res.msg,
                type: res.type
              })
            }
          }
          this.postTaskInfo(data)
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
