<template>
   <div>
    <pageTitle vtitle="数据录入"></pageTitle>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" inline label-width="100px" class="content-body">
  <el-form-item label="城市" prop="city">
    <el-cascader v-model="ruleForm.city"
      :options="cities"
      placeholder="试试搜索城市"
      filterable
    ></el-cascader>
  </el-form-item>
  <el-form-item label="商家" prop="shopName">
    <el-input v-model="ruleForm.shopName"></el-input>
  </el-form-item>
  <el-form-item  label="车辆型号" prop="carType">
    <el-cascader v-model="ruleForm.carType"
  :options="brandList"
  @active-item-change="handleItemChange"
></el-cascader>
  </el-form-item>
  <el-form-item label="平台" prop="platform">
    <el-select v-model="ruleForm.platform" placeholder="请选择">
    <el-option
      v-for="item in options3"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-form-item>
  <el-form-item label="里程" prop="mails">
    <el-input v-model="ruleForm.mails" type="number"><template slot="append">万公里</template></el-input>
  </el-form-item>
  <el-form-item label="颜色" prop="color">
    <el-select v-model="ruleForm.color" placeholder="请选择">
    <el-option
      v-for="item in options3"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-form-item>
  <el-form-item label="上牌时间" prop="carLicense">
    <el-date-picker
      v-model="ruleForm.carLicense"
      align="right"
      type="date"
      placeholder="选择日期"
      :picker-options="pickerOptions1">
    </el-date-picker>
  </el-form-item>
  <el-form-item label="联系人" prop="contact">
    <el-input v-model="ruleForm.contact"></el-input>
  </el-form-item>
  <el-form-item label="车况" prop="condition">
    <el-select v-model="ruleForm.condition" placeholder="请选择">
    <el-option
      v-for="item in conditionList"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-form-item>
  <el-form-item label="电话" prop="phone">
    <el-input type="tel" v-model="ruleForm.phone"></el-input>
  </el-form-item>
  <el-form-item label="交易类型" prop="dealType">
    <el-select v-model="ruleForm.dealType" placeholder="请选择">
    <el-option
      v-for="item in dealTypeList"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-form-item>
  <el-form-item label="使用性质" prop="useKind">
    <el-select v-model="ruleForm.useKind" placeholder="请选择">
    <el-option
      v-for="item in useProperty"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-form-item>
  <el-form-item label="价格" prop="price">
    <el-input v-model="ruleForm.price" type="number"><template slot="append">万元</template></el-input>
  </el-form-item>
  <el-form-item class="btn_group">
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
   </div>
</template>
<script>
import { getSessionStore } from '../../config/util'
import pageTitle from '../common/pageTitle.vue'
import {
  mapState, mapActions
} from 'vuex'
export default {
  data () {
    return {

      pickerOptions1: {
        disabledDate (time) {
          return time.getTime() > Date.now()
        }
      },
      ruleForm: {
        city: '',
        shopName: '',
        carType: '',
        platform: '',
        mails: '',
        color: '',
        carLicense: '',
        contact: '',
        condition: '',
        phone: '',
        dealType: '',
        useKind: '',
        price: ''
      },
      rules: {
        city: [
          { required: true, message: '请选择城市', trigger: 'change' }
        ],
        carType: [
          { required: true, message: '请选择车辆型号', trigger: 'change' }
        ],
        mails: [
          { required: true, message: '请输入里程', trigger: 'blur' }
        ],
        carLicense: [
          { type: 'date', required: true, message: '请选择上牌日期', trigger: 'change' }
        ],
        condition: [
          { required: true, message: '请选择车况', trigger: 'change' }
        ],
        dealType: [
          { required: true, message: '请选择交易类型', trigger: 'change' }
        ],
        price: [
          { required: true, message: '请输入车辆价格', trigger: 'blur' }
        ]
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    const dNav = getSessionStore('defaultNav')
    if (dNav !== '/home/dataInput') {
      next({
        path: dNav
      })
    } else {
      next()
    }
  },
  components: {pageTitle},
  computed: {
    ...mapState(['cities', 'useProperty', 'conditionList', 'dealTypeList', 'brandList'])
  },
  created () {
    this.getCities()
    this.getBrand()
  },
  watch: {
  },
  methods: {
    ...mapActions(['getCities', 'getBrand', 'getModel', 'getModelDetail']),
    handleItemChange (val) {
      // this.ruleForm.carType = val
      if (val.length === 1) {
        this.getModel({parent: val[0], order: 'first_letter'})
      } else if (val.length === 2) {
        this.getModelDetail({global_slug: val[1], order: 'year', brand: val[0]})
      }
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('submit!')
        } else {
          console.log('error submit!!')
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
