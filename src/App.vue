<template>
  <div id="app">
    <router-view>
      <router-view/>
    </router-view>
    
  </div>
</template>

<style>
/* @import url('./assets/css/main.css'); */
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .4s;
}

.fade-enter-active {
  transition-delay: .4s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>

<script>
export default {
   async created() {
    if (!this.$store.getters.isLoggedIn) {
      this.$router.push('/signin');
    }
    console.log(this.$store.getters.isLoggedIn);
   }
}
</script>