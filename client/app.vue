<template>
<div>
  <div class="test">{{text}}</div>
  <router-view />
</div>
</template>
<script>
    export default {
      data () {
        return {
          text: 'sss'
        }
      }
    }
</script>
<style  lang="scss" scoped type="text/css">
  .test {
      color: red
  }
</style>
