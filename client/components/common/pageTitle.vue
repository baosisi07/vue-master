<template>
  <div>
    <el-breadcrumb class="bread" separator="/">
      <el-breadcrumb-item :to="{ name: 'dataInput' }">{{vtitle}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
    export default {
      props: ['vtitle']
    }
</script>
