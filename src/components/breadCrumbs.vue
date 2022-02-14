<template>
    <div>
        <h4 class="bread-crumb"> {{ currentRouteName }} </h4>
        <hr class="text-muted">
    </div>
</template>

<script>
export default {
    computed:{
        currentRouteName(){
            return this.$route.name
        }
    }
}
</script>