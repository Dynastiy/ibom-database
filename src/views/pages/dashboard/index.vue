<template>
    <div>
        <div id="dashboard-page">
            <p>Good {{greeting}}, <span class="username">John Doe</span></p>
            <h1 class="text-white">Welcome to Work</h1>
            <p class="text-white small">We hope you have a beautiful day  today</p>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return{
            greeting: ''
        }
    },
    mounted() {
        const d = new Date();
        const hour_of_day = d.getHours();
        if(hour_of_day < 12){
            this.greeting = "Morning"
        }
        else if(hour_of_day > 12 < 18){
            this.greeting = "Afternoon"
        }
        else{
            this.greeting = "Evening"
        }
    }
}
</script>