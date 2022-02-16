<template>
  <div>
    <div>
      <h1 class="text-white">
        Listing all staffs under this staff -
        <span class="small"
          >Will not display if there are no staffs under this staff</span
        >
      </h1>
    </div>
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
                  <th>Permissions</th>
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
                  <!-- <td>
                      Finance Officer
                    </td> -->
                  <td>
                    <div class="dropdown select">
                      <button
                        class="dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Select
                      </button>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#"
                          >Something else here</a
                        >
                      </div>
                    </div>
                    <!-- <div class="btn-group dropright ml-2">
                      <button
                        type="button"
                        class="more__icon select_btn text-white"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        
                        Select
                      </button>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Activate</a>
                        <a class="dropdown-item" href="#">De-activate</a>
                        
                        <a class="dropdown-item" href="#">Edit</a>
                        
                      </div>
                    </div> -->
                    <!-- <button class="view-more-button">
                       Select
                     </button> -->

                    <!-- Default button -->
                  </td>
                  <td>
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
                        <a class="dropdown-item" href="#">Activate</a>
                        <a class="dropdown-item" href="#">De-activate</a>
                        <!-- <div class="dropdown-divider"></div> -->
                        <a class="dropdown-item" href="#">Edit</a>
                        <!-- <div class="dropdown-divider"></div> -->
                      </div>
                    </div>
                  </td>
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