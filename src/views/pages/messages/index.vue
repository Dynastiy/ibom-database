<template>
    <div>
        <div class="my-office-page">
            <section>
                <office-sidebar></office-sidebar>
            </section>
            <section class="my-office-content">
                <router-view></router-view>
            </section>
        </div>
    </div>
</template>

<script>
import OfficeSidebar from './static/sidemenu.vue'
export default {
    components:{
        OfficeSidebar
    }
}
</script>

