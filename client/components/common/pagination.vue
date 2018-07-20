<template>
  <div class="b_pagination">
    <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="24" :lg="24">
                <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400">
              </el-pagination>
            </el-col>
        </el-row>
  </div>
</template>
<script>
    export default {
      data () {
        return {

        }
      }
    }
</script>
