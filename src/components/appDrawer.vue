<template>
  <div id="app-drawer">
    <div class="app__drawer">
      <div class="app-drawer-header text-center">
        <img src="@/assets/logo.png" width="90" alt="" />
      </div>

            <div>
                <ul class="list-unstyled app-drawer-menu">
                    <li>
                        <router-link to="/">
                        <ion-icon name="analytics"></ion-icon>
                        <span class="ml-3">
                            Dashboard
                        </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/dashboard/send-message">
                        <ion-icon name="send"></ion-icon>
                        <span class="ml-3">
                            Create Doc
                        </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/dashboard/my-office">
                        <ion-icon name="mail-unread"></ion-icon>
                        <span class="ml-3">
                            My Office
                        </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/dashboard/staffs">
                        <ion-icon name="people"></ion-icon>
                        <span class="ml-3">
                            Staffs
                        </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/dashboard/departments">
                        <ion-icon name="people"></ion-icon>
                        <span class="ml-3">
                            Departments
                        </span>
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
                        <span class="ml-3">
                           Meeting Room
                        </span>
                        </router-link>
                    </li>
                    <li>
                        <a class="text-secondary" href="javascript:void(0)">Account</a>
                    </li>
                    <li>
                        <router-link to="/dashboard/profile">
                        <ion-icon name="person"></ion-icon>
                        <span class="ml-3">
                            Profile
                        </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/dashboard/profile">
                        <ion-icon name="settings"></ion-icon>
                        <span class="ml-3">
                            Settings
                        </span>
                        </router-link>
                    </li>
                    <li>
                        <a href="javascript:void(0)" @click="logout">
                        <ion-icon name="log-out"></ion-icon>
                        <span class="ml-3">
                            Logout
                        </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
    methods:{
        logout() {
      this.$store.dispatch('logout');
      Swal.fire(
          'Bye!',
          'Logged out!',
          'warning'
        )
      this.$router.push('/signin');
    }
    }
}
</script>