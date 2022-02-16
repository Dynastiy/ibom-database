<template>
  <div>
    <div>

    </div>
    <div class="user_onboarding_wrap">
      <h5>Personal Details</h5>

      <div class="registration_wrap mt-3">
        <form action="" @submit.prevent="onboardStaff">
          <div class="row justify-content-center">
            <div class="col-md-6">
              <div class="form-group mx-2 mt-2">
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
              <div class="form-group mx-2 mt-2">
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
              <div class="form-group mx-2 mt-2">
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
              <div class="form-group mx-2 mt-2">
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
            <!-- <div class="col-md-6">
              <div class="form-group mx-2 mt-2">
                <label for="" class="py-2">Phone Number</label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="Phone Number"
                  required
                />
              </div>
            </div> -->
            <div class="col-md-6">
              <div class="form-group mx-2 mt-2">
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
              <div class="form-group mx-2 mt-2">
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
              <div class="form-group mx-2 mt-2">
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
              <div class="form-group mx-2 mt-2">
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
          <div>
            <button type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import helpers from '@/helpers/index.js'
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
        date_hired: ''
      },
      roles: [],
      departments: [],
    }
  },
  methods:{
    async getRoles(){
      let res = await helpers.getRoles();
      this.roles = res;
    },
    async getDepartments(){
      let res = await helpers.getDepartments();
      this.departments = res;
    },
    async onboardStaff(){
      let res = await helpers.onboardStaff(this.payload);
      console.log(res);
      // console.log(this.payload);
    }
  },
  async created(){
    this.getRoles()
    this.getDepartments()
  }
}
</script>

