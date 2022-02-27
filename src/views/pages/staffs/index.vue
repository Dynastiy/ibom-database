<template>
  <div>
    <div class="staff-container">
      <div class="add-staff d-flex justify-content-end">
        <router-link class="route_link" to="/dashboard/staffs/add-staff">
          <button>
            Add Staff
            <span class="ml-2"
              ><ion-icon name="person-add"></ion-icon
            ></span></button
        ></router-link>
      </div>

      <!-- Table for Staff List -->
      <div class="row mt-4 user__table">
        <div class="col-lg-12">
          <!-- <h4 class="font-weight-bold mb-4">{{ currentRouteName }}  Users</h4> -->
          <div class="table-responsive">
            <table class="table table-centered table-nowrap mb-0">
              <thead class="thead-light">
                <tr>
                  <th>Name</th>
                  <th>Staff ID</th>
                  <th>Role</th>
                  <th>Department</th>
                  <th>Actions</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="staff in staffs" :key="staff.id">
                  <td>
                    <!-- <div class="d-flex align-items-center">
                      <div class="name_wrap">
                        <img src="@/assets/male_avatar.png" />
                      </div> -->
                      {{ staff.name }}
                    <!-- </div> -->
                  </td>
                  <td> {{ staff.staff_id }} </td>
                  <td class="text-capitalize" v-if="staff.role"> {{ staff.role.name }} </td>
                  <td>Finance</td>
                  <td>
                      <router-link :to=" '/dashboard/staff/'+staff.id "><button class="view-more-button">View More</button></router-link>
                    </td>
                 
                  <!-- <td>
                    <div class="btn-group dropleft">
                      <button
                        type="button"
                        class="more__icon"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <ion-icon name="more"></ion-icon>
                      </button>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Activate</a>
                        <a class="dropdown-item" href="#">De-activate</a>
                        <a class="dropdown-item" href="#">Edit</a>
                      </div>
                    </div>
                  </td> -->
                </tr>
              </tbody>
            </table>
          </div>
          <!-- end table-responsive -->
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
      staffs: [],
    }
  },
  methods:{
    async getStaffs(){
      let res = await helpers.getStaffs();
      this.staffs = res.users
    }
  },
  async created(){
    this.getStaffs();
  }
}
</script>