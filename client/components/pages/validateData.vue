<template>
   <div>
    <pageTitle vtitle="数据验证"></pageTitle>
    <div class="content-body">
      <div class="el-row b_flex">
        <div class="el-col-8 b_space_normal">数据来源: <span>{{dataDetail.city}}</span></div>
        <div class="el-col-8 b_space_normal">来源URL: <span>{{dataDetail.source_url}}</span></div>
        <div class="el-col-8 b_space_normal">城市: <span>{{dataDetail.city}}</span></div>
        <div class="el-col-8 b_space_normal">排放标准: <span>{{dataDetail.model_detail_slug.emission_standard}}</span></div>
        <div class="el-col-8 b_space_normal">车型: <span>{{dataDetail.model_detail_slug.detail_model}}</span></div>
        <div class="el-col-8 b_space_normal">进口/合资/国产: <span>{{dataDetail.model_slug.brand_area}}</span></div> 
        <div class="el-col-8 b_space_normal">流行度: <span>{{dataDetail.model_detail_slug.popular}}</span></div>
        <div class="el-col-8 b_space_normal">车型类别: <span>{{dataDetail.model_detail_slug.body_model}}</span></div>
        <div class="el-col-8 b_space_normal">行驶里程: <span>{{dataDetail.mile}}万公里</span></div>
        <div class="el-col-8 b_space_normal">新车价: <span>{{dataDetail.model_detail_slug.price_bn}}</span></div>
        <div class="el-col-8 b_space_normal">上牌时间: <span>{{dataDetail.reg_date}}</span></div>
        <div class="el-col-8 b_space_normal">平台: <span>{{dataDetail.domain.name}}</span></div>
        <div class="el-col-8 b_space_normal">车商: <span>{{dataDetail.dealer.company_name}}</span></div>
        <div class="el-col-8 b_space_normal">颜色: <span>{{dataDetail.color}}</span></div>
        <div class="el-col-8 b_space_normal">排量: <span>{{dataDetail.model_detail_slug.volume}}</span></div>
        <div class="el-col-8 b_space_normal">变速箱: <span>{{dataDetail.model_detail_slug.control}}</span></div>
        
        <!-- <template v-for="item in dataDetail.competitors">
          <div :key="item.domain.name">
            <div class="el-col-8 b_space_normal">{{item.domain.name}}收购价预测: <span>{{item.sell_price}}</span></div>
          <div class="el-col-8 b_space_normal">{{item.domain.name}}零售价预测: <span>{{item.buy_price}}</span></div>
          <div class="el-col-8 b_space_normal">{{item.domain.name}}利润率: <span>{{item.profit_ratio}}</span></div>
          </div>         
        </template> -->

        <div class="el-col-8 b_space_normal">电话: <span>{{dataDetail.dealer.phone}}</span></div>
        <div class="el-col-8 b_space_normal">地址: <span>{{dataDetail.dealer.address}}</span></div>
        <div class="el-col-8 b_space_normal">交易时间: <span>{{dataDetail.deal_date}}</span></div>
        <div class="el-col-8 b_space_normal">交易价: <span>{{dataDetail.private_price}}</span></div>
      </div>
      <div class="btn_group">
    <el-button type="primary" @click="dialogFormVisible = true">填写验证价格</el-button>
    <el-button @click="confirmData">确认</el-button>
    <el-button @click="deleteConfirm">数据作废</el-button>
  </div>
    </div>

    <el-dialog title="填写价格" :visible.sync="dialogFormVisible" width="30%">
  <el-form :model="form" label-width="100px" ref="priceForm">
    <el-form-item label="收购价" prop="purchesePrice">
      <el-input v-model.trim="form.purchesePrice" type="number" min="0" auto-complete="off"><template slot="append">万元</template></el-input>
    </el-form-item>
    <el-form-item label="零售价" prop="retailPrice">
      <el-input v-model.trim="form.retailPrice" type="number" min="0" auto-complete="off"><template slot="append">万元</template></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button type="primary" @click="editData">确认并保存</el-button>
  </div>
</el-dialog>
   </div>
</template>
<script>
import pageTitle from '../common/pageTitle.vue'
import { mapState, mapActions } from 'vuex'
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
  components: {pageTitle},
  computed: {
    ...mapState(['dataDetail'])
  },
  created () {
    this.getDataDetail()
  },
  methods: {
    ...mapActions(['getDataDetail', 'dealData']),
    confirmData () {
      this.dealData({
        id: this.dataDetail.id,
        status: 2,
        message: () => {
          this.$message({
            type: 'success',
            message: '已确认!'
          })
          this.getDataDetail()
        }
      })
    },
    deleteConfirm () {
      this.$confirm('确定将此条数据作废吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.dealData({
          id: this.dataDetail.id,
          status: 1,
          message: () => {
            this.$message({
              type: 'success',
              message: '已作废!'
            })
            this.getDataDetail()
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消作废！'
        })
      })
    },
    editData () {
      if (!this.form.purchesePrice && !this.form.retailPrice) {
        this.$message({
          type: 'warning',
          message: '请至少填写一项!'
        })
      } else {
        this.dealData({
          id: this.dataDetail.id,
          status: 1,
          sell_price: this.form.purchesePrice,
          buy_price: this.form.retailPrice,
          refs: () => {
            this.$refs['priceForm'].resetFields()
            this.dialogFormVisible = false
          },
          message: () => {
            this.$message({
              type: 'success',
              message: '已修改!'
            })
            this.getDataDetail()
          }
        })
      }
    }
  }
}
</script>
