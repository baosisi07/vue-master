<template>
    <div class="wrapper">
        <v-head></v-head>
         <v-sidebar></v-sidebar>
        <v-card></v-card>
        <div class="content">
            <transition name="move" mode="out-in"><router-view></router-view></transition>
        </div>
    </div>
</template>

<script>
  import vHead from '../common/header.vue'
  import vSidebar from '../common/sidebar.vue'
  import vCard from '../common/currentData.vue'
  export default {
    components: {
      vHead, vSidebar, vCard
    }
  }
</script>
