<template>
  <div id="mobile-app-drawer">
    <div class="app-header p-3 sticky-top">
      <div class="mobile-menu" >
        <ion-icon name="menu" id="tog"></ion-icon>
      </div>
      <!-- <div class="input-field">
        <ion-icon name="search"></ion-icon>
        <input type="search" name="" id="" placeholder="Search" />
      </div> -->
      <div class="app-drawer-header">
        <img src="@/assets/logo.png" width="80" alt="" />
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
      </div>
    </div>

    <div class="mobile-nav-content" id="side-bar">
      <div class="d-flex align-items-end justify-content-between">
        <div class="app-drawer-header">
          <img src="@/assets/logo.png" width="80" alt="" />
        </div>
        <div class="mobile-menu" id="close-menu">
          <ion-icon name="close"></ion-icon>
        </div>
      </div>
      <div>
        <ul class="list-unstyled app-drawer-menu">
          <li>
            <router-link to="/">
              <ion-icon name="analytics"></ion-icon>
              <span class="ml-3"> Dashboard </span>
            </router-link>
          </li>
          <li>
            <router-link to="/dashboard/send-message">
              <ion-icon name="send"></ion-icon>
              <span class="ml-3"> Create Doc </span>
            </router-link>
          </li>
          <li>
            <router-link to="/dashboard/my-office">
              <ion-icon name="mail-unread"></ion-icon>
              <span class="ml-3"> My Office </span>
            </router-link>
          </li>
          <li>
            <router-link to="/dashboard/staffs">
              <ion-icon name="people"></ion-icon>
              <span class="ml-3"> Staffs </span>
            </router-link>
          </li>
          <li>
            <router-link to="/dashboard/departments">
              <ion-icon name="people"></ion-icon>
              <span class="ml-3"> Departments </span>
            </router-link>
          </li>
          <!-- <li>
                        <router-link to="/dashboard/notifications">
                        <ion-icon name="notifications"></ion-icon>
                        <span class="ml-3">
                            Notifications
                        </span>
                        </router-link>
                    </li> -->
          <li>
            <router-link to="/dashboard/meeting-room">
              <ion-icon name="chatboxes"></ion-icon>
              <span class="ml-3"> Meeting Room </span>
            </router-link>
          </li>
          <li>
            <a class="text-secondary" href="javascript:void(0)">Account</a>
          </li>
          <li>
            <router-link to="/dashboard/settings">
              <ion-icon name="settings"></ion-icon>
              <span class="ml-3"> Settings </span>
            </router-link>
          </li>
          <li>
            <a href="javascript:void(0)" @click="logout">
              <ion-icon name="log-out"></ion-icon>
              <span class="ml-3"> Logout </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import notifications from "@/components/notifications/index.vue";
export default {
  components: {
    notifications,
  },
  data(){
      return{

      }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      Swal.fire("Bye!", "Logged out!", "warning");
      this.$router.push("/signin");
    },
  },
    mounted(){
      const toggller = document.getElementById("tog");
      const sidee = document.getElementById("side-bar");
      const closeMenu = document.getElementById("close-menu");
      document.onclick = function (e) {
        if (e.target.id !== "tog" && e.target.id !== "side-bar") {
          sidee.classList.remove("active");
        }
      };
      toggller.onclick = function () {
        sidee.classList.toggle("active");
      };
      closeMenu.onclick = function () {
        sidee.classList.remove("active");
      };
    }
};
</script>

<style>
.mobile-nav-content.active {
    left: 0px;
}
</style>