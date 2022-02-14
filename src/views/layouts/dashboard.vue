<template>
  <div class="home">
    <app-drawer></app-drawer>
    <div id="main">
        <app-header class="mb-3"></app-header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import appDrawer from '@/components/appDrawer.vue'
import appHeader from '@/components/appHeader.vue'

export default {
  name: 'Home',
  components: {
    appDrawer,
    appHeader
  }
}
</script>
