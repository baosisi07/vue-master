<template>
   <div>
     <el-breadcrumb class="bread" separator="/">
      <el-breadcrumb-item :to="{ name: 'dataInput' }">数据录入</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="content-body">
      <div class="el-row b_flex">
        <div class="el-col-8 b_space_normal">数据来源</div>
        <div class="el-col-8 b_space_normal">数据来源</div>
        <div class="el-col-8 b_space_normal">数据来源</div>
        <div class="el-col-8 b_space_normal">数据来源</div>
        <div class="el-col-8 b_space_normal">数据来源</div>
        <div class="el-col-8 b_space_normal">数据来源</div>
      </div>
      <div class="btn_group">
    <el-button type="primary" @click="dialogFormVisible = true">填写验证价格</el-button>
    <el-button @click="resetForm('ruleForm')">确认</el-button>
    <el-button @click="deleteConfirm">数据作废</el-button>
  </div>
    </div>

    <el-dialog title="填写价格" :visible.sync="dialogFormVisible" width="30%">
  <el-form :model="form" label-width="100px">
    <el-form-item label="收购价">
      <el-input v-model="form.purchesePrice" auto-complete="off"><template slot="append">万元</template></el-input>
    </el-form-item>
    <el-form-item label="零售价">
      <el-input v-model="form.retailPrice" auto-complete="off"><template slot="append">万元</template></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button type="primary" @click="dialogFormVisible = false">确认并保存</el-button>
  </div>
</el-dialog>
   </div>
</template>
<script>
    export default {
      data () {
        return {
          dialogFormVisible: false,
          form: {
            purchesePrice: '',
            retailPrice: ''
          }
        }
      },
      methods: {
        deleteConfirm () {
          this.$confirm('确定将此条数据作废吗?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$message({
              type: 'success',
              message: '已作废!'
            })
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消作废！'
            })
          })
        }
      }
    }
</script>
