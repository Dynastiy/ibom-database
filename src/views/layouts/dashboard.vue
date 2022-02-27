<template>
  <div class="home">
    <app-drawer></app-drawer>
    <mobile-navigation class="smaller-screens"></mobile-navigation>
    <div id="main">
        <app-header class="mb-3 larger-screens"></app-header>
        <bread-crumb class="mb-3"></bread-crumb>
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import appDrawer from '@/components/appDrawer.vue'
import mobileNavigation from '@/components/mobile_appDrawer.vue'
import appHeader from '@/components/appHeader.vue'
import breadCrumb from '@/components/breadCrumbs.vue'

export default {
  name: 'Home',
  components: {
    appDrawer,
    appHeader, breadCrumb, 
    mobileNavigation
  }
}
</script>
