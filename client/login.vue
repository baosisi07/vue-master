<template>
    <div>
      <p>{{text}}</p>
      <div class="height"></div>
    </div>
</template>
<script>
    export default {
      data () {
        return {
          text: 'this is login page'
        }
      }
    }
</script>
<style  lang="scss" scoped type="text/css">
  .height {
      height: 1000px;
      width: 100%;
      background-color: #000;

  }
</style>

