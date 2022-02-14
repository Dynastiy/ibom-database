<template>
    <div id="app-drawer">
        <div class="app__drawer">
            <div class="app-drawer-header text-center">
                <img src="@/assets/logo.png" width="90" alt="">
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
                            Send Message
                        </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/dashboard/inbox">
                        <ion-icon name="mail-unread"></ion-icon>
                        <span class="ml-3">
                            Inbox
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
                        <router-link to="/dashboard/notifications">
                        <ion-icon name="notifications"></ion-icon>
                        <span class="ml-3">
                            Notifications
                        </span>
                        </router-link>
                    </li>
                    <li>
                         <router-link to="/dashboard/chat">
                        <ion-icon name="chatboxes"></ion-icon>
                        <span class="ml-3">
                           Chat
                        </span>
                        </router-link>
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
                        <router-link to="/signin">
                        <ion-icon name="log-out"></ion-icon>
                        <span class="ml-3">
                            Logout
                        </span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>