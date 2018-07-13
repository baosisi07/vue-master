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
      mapGetters,
      mapMutations,
      mapActions
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
        // let i = 1
        // setInterval(() => {
        //   this.$store.commit('updateCount', i++)
        // }, 1000)
        // this.$store.dispatch('updateCountAsync', {
        //   num: 5,
        //   time: 2000
        // })
        this.updateCountAsync({
          num: 4,
          time: 2000
        })
      },
      methods: {
        ...mapMutations(['updateCount']),
        ...mapActions(['updateCountAsync'])
      }
    }
</script>
<style  lang="scss" scoped type="text/css">
  .test {
      color: red
  }
</style>
