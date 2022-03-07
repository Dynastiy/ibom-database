<template>
    <div>
       <div class="settings__header">
            <router-link to="/dashboard/settings">Profile</router-link>
            <router-link v-show="dataObj.name === 'Admin' " to="/dashboard/settings/Roles">Roles</router-link>
            <router-link v-show="dataObj.name === 'Admin' " to="/dashboard/settings/Departments">Departments</router-link>
       </div>
       <hr>
    </div>
</template>

<script>
import helpers from '@/helpers/index.js'
export default {
    data(){
        return{
            dataObj: {}
        }
    },
    methods:{
   async getUser() {
      let res = await helpers.getUser();
      this.dataObj = res.role;
      console.log(res.role);
    },
  },
    async created(){
      this.getUser();
  },
}
</script>