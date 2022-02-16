<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
/* @import url('./assets/css/main.css'); */
</style>

<script>
export default {
   async created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push('/signin');
    }
   }
}
</script>