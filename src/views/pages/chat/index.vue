<template>
    <div>
        <div class="meeting-room">
            <div class="">
                <side-pane></side-pane>
            </div>
            <div class="main-chat-area">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import SidePane from '@/components/chat/sidepane.vue'
export default {
    components:{
        SidePane
    }
}
</script>