<template>
  <div>
    <div class="my-office">
      <!-- Header/Actions Related to Message -->
      <div class="my-office-top-right">
        <div
          class="my-office-top d-flex align-items-center justify-content-between"
        >
          <div @click="goBack" class="back__icon">
              <ion-icon name="arrow-back"></ion-icon>
          </div>
          <div>
            <ion-icon name="trash"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <!-- Default button -->
            <div class="btn-group dropleft">
              <button
                type="button"
                class="more__icon"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <!-- Dropleft -->
                <ion-icon name="more"></ion-icon>
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#" @click="forward">Forward</a>
                <a class="dropdown-item" href="#">Reply</a>
                <a class="dropdown-item" href="#">Sign</a>
                <a class="dropdown-item" href="#">Stamp</a>
                <a class="dropdown-item" href="#" @click="approve">Approve</a>
                <a class="dropdown-item" href="#" @click="reject">Decline</a>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>

      <!-- Body of Message or Task  -->
      <div class="mt-4">
        <div class="content">
          <div class="sender-icon" v-if="dataObj.sender_name" :class="[dataObj.sender_name.charAt(0)]"> {{ dataObj.sender_name.charAt(0) }} </div>
          <div class="w-100">
            <div class="d-flex align-items-center justify-content-between">
              <h6 class="m-0"> {{ dataObj.sender_name }} </h6>
              <p class="time__stamp"> {{ dataObj.due_date }} </p>

            </div>
            <div class="mt-1">
              <div class="d-flex align-items-center" style="gap:10px">
                <p class="small description">ref:  {{ dataObj.reference_id }} </p>
                <div class="status">
                <div class="approved" v-if="dataObj.status === 'approved' ">Approved</div>
                <div class="rejected" v-else-if="dataObj.status  === 'rejected' ">Rejected</div>
                <div class="pending" v-else>Pending</div>
              </div>
              </div>
              <h5 class="mt-3"> {{ dataObj.title }} </h5>
              <p class="main__text">
                {{ dataObj.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import helpers from '@/helpers/index.js'
export default {
  data(){
    return{
      dataObj: '',
      id: this.$route.params.id
    }
  },
  methods:{
    async getTask(){
      try {
        let res = await helpers.getTasksById(this.id);
        console.log(res);
        this.dataObj = res
      } catch (error) {
        console.log(error);
      }
    },
    async approve(){
      try {
        let res = await helpers.approve(this.id)
        console.log(res);
        this.getTask();
      } catch (error) {
        console.log(error);
      }
    },
    async reject(){
      try {
        let res = await helpers.decline(this.id)
        console.log(res);
        this.getTask();
      } catch (error) {
        console.log(error);
      }
    },
    async forward(){
      try {
        let res = await helpers.forward(this.id)
        console.log(res);
        this.getTask();
      } catch (error) {
        console.log(error);
      }
    },
    goBack(){
      this.$router.go(-1)
    }
  },
  async created(){
    this.getTask();
  }
}
</script>