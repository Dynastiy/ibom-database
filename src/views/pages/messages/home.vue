<template>
  <div>
    <div class="my-office-sidemenu">
      <!-- Individual message -->
      <div v-for="item in dataObj" :key="item.id" class="content d-flex align-items-center justify-content-between" >
        <!-- <img
          src="https://darylh.com/wp-content/uploads/2017/05/Profile-Picture-Square.jpg"
          alt=""
        /> -->
        <h6 class="m-0">Name of Sender</h6>
        <div class="d-flex" style="gap: 5px">
          <p class="main__text font-weight-bold"> {{  item.title}}  -</p>
          <p class="main__text description">
            {{ item.description }}
          </p>
        </div>
        <p class="time__stamp font-weight-bold"> {{ item.due_date }} </p>
        <!-- <div class="unread"></div> -->
      </div> 
 </div>

   
  </div>
</template>

<script>
import helpers from '@/helpers/index.js'
export default {
    data(){
        return{
            dataObj:[]
        }
    },
    methods:{
        async getTasks(){
            try {
                let res = await helpers.getTasks()
                console.log(res);
                this.dataObj = res
            } catch (error) {
                console.log(error);
            }
        }
    },
    async created(){
        this.getTasks();
    }
}
</script>