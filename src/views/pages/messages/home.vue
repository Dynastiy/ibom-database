<template>
  <div>
    <div class="my-office-sidemenu">
      <!-- Individual message -->
      <div v-for="item in dataObj" :key="item.id" class="">
        <router-link class="" :to="'/dashboard/my-office/' + item.id">
          <div class="row content">
            <div class="col-md-3">
              <div class="d-flex align-items-center" style="gap: 10px">
                <div class="sender-icon" :class="[item.sender_name.charAt(0)]">
                  {{ item.sender_name.charAt(0) }}
                </div>
                <h6 class="m-0">{{ item.sender_name }}</h6>
              </div>
            </div>
            <div class="col-md-5 d-lg-flex" style="gap: 5px">
              <p class="main__text font-weight-bold">{{ item.title }} -</p>
              <p class="main__text description">
                {{ item.description.slice(0, 30) }}...
              </p>
            </div>
            <div class="col-md-3 d-lg-flex align-items-center justify-content-end" style="gap: 10px">
              <div class="status">
                <div class="approved" v-if="item.status === 'approved' ">Approved</div>
                <div class="rejected" v-else-if="item.status  === 'rejected' ">Rejected</div>
                <div class="pending" v-else>Pending</div>
              </div>

              <div class="" style="gap: 5px">
                <div class="due_date status mb-1">
                  <span class="rejected">due date</span>
                </div>
                <p class="time__stamp font-weight-bold">
                  {{ item.due_date }}
                </p>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import helpers from "@/helpers/index.js";
export default {
  data() {
    return {
      dataObj: [],
    };
  },
  methods: {
    async getTasks() {
      try {
        let res = await helpers.getTasks();
        console.log(res);
        this.dataObj = res;
      } catch (error) {
        console.log(error);
      }
    },
  },
  async created() {
    this.getTasks();
  },
};
</script>