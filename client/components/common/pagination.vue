<template>
  <div class="b_pagination">
    <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="24" :lg="24">
                <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="pagination.currentPage"
                :page-sizes="pagination.pageSizes"
                :page-size="pagination.pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="pagination.total">
              </el-pagination>
            </el-col>
        </el-row>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {

    }
  },
  methods: {
    ...mapActions(['getTaskHistory']),
    handleSizeChange (val) {
      this.getTaskHistory({limit: val})
    },
    handleCurrentChange (val) {
      this.getTaskHistory({currentPage: val})
    }
  },
  computed: {
    ...mapState(['pagination'])
  }
}
</script>
