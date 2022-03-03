<template>
  <div id="app-header">
    <div class="app-header">
      <div class="input-field">
        <ion-icon name="search"></ion-icon>
        <input type="search" name="" id="" placeholder="Search" />
      </div>
      <div class="d-flex align-items-center" id="right-side">
        <div class="mr-3" id="notifications">
          <div class="btn-group dropleft ml-2">
            <button
              type="button"
              class="more__icon"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <!-- Dropleft -->
              <ion-icon name="notifications"></ion-icon>
            </button>
            <div class="dropdown-menu">
              <notifications />
            </div>
          </div>
          <div class="notification__dot"></div>
        </div>
        <div id="user__details" class="d-flex align-items-center user-details">
          <img v-if="dataObj.profile" :src="baseUrl + dataObj.profile.profile_photo+'?'+Date.now()" width="30" height="30" class="rounded-circle" alt="" />
          <span class="ml-2"> {{ dataObj.name }} </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import notifications from "@/components/notifications/index.vue";
import helpers from "@/helpers/index.js";
export default {
  components: {
    notifications,
  },
  data() {
    return {
      dataObj: {},
      baseUrl: "https://ibomdemo.africanapp.store/",
    };
  },
  methods: {
    async getUser() {
      let res = await helpers.getUser();
      this.dataObj = res;
      console.log(res);
    },
  },
  async created(){
      this.getUser();
  }

  // computed:{
  //     dataObj(){
  //         return helpers.getUser();
  //     }
  // }
};
</script>