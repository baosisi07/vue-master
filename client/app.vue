<template>
<div>
  <div class="test">{{text}}</div>
  <p>{{count}}</p>
  <p>{{fullName}}</p>
  <router-view />
</div>
</template>
<script>
    import {
      mapState,
      mapGetters
    } from 'vuex'
    export default {
      data () {
        return {
          text: 'sss'
        }
      },
      computed: {
        ...mapState(['count']),
        ...mapGetters(['fullName'])
      },
      mounted () {
        let i = 1
        setInterval(() => {
          this.$store.commit('updateCount', i++)
        }, 1000)
      }
    }
</script>
<style  lang="scss" scoped type="text/css">
  .test {
      color: red
  }
</style>
