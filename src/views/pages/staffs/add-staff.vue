<template>
  <div>
    <div>

    </div>
    <div class="user_onboarding_wrap">
      <h5>Personal Details</h5>

      <div class="registration_wrap mt-3">
        <form action="" @submit.prevent="onboardStaff">
          <div class="row">
            <div class="col-md-6">
              <div class="form-group mt-2">
                <label for="" class="py-2">First Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="First Name"
                  required
                  v-model="payload.first_name"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group mt-2">
                <label for="" class="py-2">Last Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last Name"
                  required
                  v-model="payload.last_name"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group mt-2">
                <label for="" class="py-2">Work Email</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Email"
                  required
                  v-model="payload.email"
                />
              </div>
            </div>
             <div class="col-md-6">
              <div class="form-group mt-2">
                <label for="" class="py-2">Staff ID</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last Name"
                  required
                  v-model="payload.staff_id"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group mt-2">
                <label for="exampleFormControlSelect1" class="py-2"
                  >Department</label
                >
                <select
                  class="form-control option-class select"
                  id="exampleFormControlSelect1"
                  required
                  v-model="payload.department_id"
                >
                  <option value="---">---</option>
                  <option v-for="department in departments" :key="department.id" :value="department.id"> {{department.name}} </option>
                </select>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group mt-2">
                <label for="exampleFormControlSelect1" class="py-2"
                  >Role</label
                >
                <select
                  class="form-control option-class select"
                  id="exampleFormControlSelect1"
                  required
                  v-model="payload.role_id"
                >
                  <option value="---">---</option>
                  <option v-for="role in roles" :key="role.id" :value="role.id">{{ role.name }} </option>
                </select>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group mt-2">
                <label for="" class="py-2">Grade Level</label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="Enter Grade Level of Staff"
                  required
                  v-model="payload.level"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group mt-2">
                <label for="" class="py-2">Date Hired</label>
                <input
                  type="date"
                  class="form-control"
                  placeholder="Enter Date of Appointment"
                  required
                  v-model="payload.date_hired"
                />
              </div>
            </div>
          </div>
          <div class="sign-in-button">
            <button type="submit" v-if="loading" disabled>
              <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
            </button>
            <button type="submit" class="py-3 mt-3" v-else>Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import helpers from '@/helpers/index.js'
import Swal from "sweetalert2";
export default {
  data(){
    return {
      payload:{
        first_name: '',
        last_name: '',
        email: '',
        staff_id: '',
        role_id: '---',
        department_id: '---',
        level: '',
        date_hired: '',
      },
      roles: [],
      departments: [],
      loading: false,
    }
  },
  methods:{
    async getRoles(){
      let res = await helpers.getRoles();
      const roles = res.roles
      this.$store.dispatch("addRoles", { roles });
      this.roles = res;
    },
    async getDepartments(){
      let res = await helpers.getDepartments();
      const departments = res.departments
      this.$store.dispatch("addDepartments", { departments });
      this.departments = res;
    },
    async onboardStaff(){
      this.loading = true
      try {
        let res = await helpers.onboardStaff(this.payload);
        console.log(res);
        Swal.fire("Done!", "Successful!", "success");
        this.payload = {};
      } catch (error) {
        console.log(error);
        this.payload = {};
      }
      this.loading = false
    }
  },
  async created(){
    // this.getRoles()
    // this.getDepartments()
  }
}
</script>

