<template>
  <div class="update-profile-wrap">
    <div class="user_onboarding_wrap">
      <h3 class="font-weight-bold mb-4">
        Update Profile
      </h3>
      <h5 class="font-weight-bold">Personal Details</h5>

      <div class="registration_wrap mt-3">
        <form action="" @submit.prevent="updateProfile">
          <div class="row">
            <div class="col-md-4">
              <div class="form-group  mt-2">
                <label for="" class="py-2">First Name</label>
                <input
                  v-model="dataObj.first_name"
                  type="text"
                  class="form-control"
                  placeholder="First Name"
                  required
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group  mt-2">
                <label for="" class="py-2">Last Name</label>
                <input
                  v-model="dataObj.last_name"
                  type="text"
                  class="form-control"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group  mt-2">
                <label for="" class="py-2">Work Email</label>
                <input
                  v-model="dataObj.email"
                  type="text"
                  class="form-control"
                  placeholder="Email"
                  required
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group  mt-2">
                <label for="" class="py-2">Phone Number</label>
                <input
                v-model="dataObj.profile.phone_number"
                  type="tel"
                  class="form-control"
                  placeholder="Phone Number"
                  required
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group  mt-2">
                <label for="" class="py-2">Date of Birth</label>
                <input
                v-model="dataObj.profile.date_of_birth"
                  type="date"
                  class="form-control"
                  placeholder="dd-mm-yy"
                  required
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group  mt-2">
                <label for="exampleFormControlSelect1" class="py-2"
                  >Gender</label
                >
                <select
                  class="form-control option-class select"
                  id="exampleFormControlSelect1"
                  required
                  v-model="dataObj.profile.gender"
                >
                <option value=""> --- </option>
                  <option class="colour" value="Male" id="selectCountry">Male</option>
                  <option class="colour" value="Female" id="selectCountry">Female</option>
                </select>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group  mt-2">
                <label for="exampleFormControlSelect1" class="py-2"
                  >Marital Status</label
                >
                <select
                  v-model="dataObj.profile.marital_status"
                  class="form-control option-class select"
                  id="exampleFormControlSelect1"
                  required
                >
                <option value=""> --- </option>
                  <option class="colour" value="Single" id="selectCountry">Single</option>
                  <option class="colour" value="Married" id="selectCountry">Married</option>
                  <option class="colour" value="Divorced" id="selectCountry">Divorced</option>
                </select>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group  mt-2">
                <label for="exampleFormControlSelect1" class="py-2"
                  >Religion</label
                >
                <select
                v-model="dataObj.profile.religion"
                  class="form-control option-class select"
                  id="exampleFormControlSelect1"
                  required
                >
                <option value=""> --- </option>
                  <option class="colour" value="Christianity" id="selectCountry">Christianity</option>
                  <option class="colour" value="Islam" id="selectCountry">Islam</option>
                </select>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group  mt-2">
                <label for="exampleFormControlSelect1" class="py-2"
                  >State Of Origin</label
                >
                <select
                  class="form-control option-class select"
                  required
                  v-model="dataObj.profile.state_of_origin"
                  @change="getState()"
                  id="selectState"
                >
                <option value=""> --- </option>
                  <option v-for="item in states" :key="item.id" class="colour" :value="item.alias" > {{ item.name }} </option>
                </select>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group  mt-2">
                <label for="exampleFormControlSelect1" class="py-2"
                  >L.G.A</label
                >
                <select
                  class="form-control option-class select"
                  id="exampleFormControlSelect1"
                  required
                  v-model="dataObj.profile.lga"
                >
                <option value=""> --- </option>
                  <option v-for="item of lgas" :key="item.id" class="colour" id="selectLga"> {{ item.name }} </option>
                </select>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group  mt-2">
                <label for="" class="py-2">Next of kin name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter name of next of kin"
                  required
                  v-model="dataObj.profile.next_of_kin"
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group  mt-2">
                <label for="" class="py-2">Home Address</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter your home address"
                  required
                  v-model="dataObj.profile.address"
                />
              </div>
            </div>
          </div>

      <!-- Work/Bank Details -->
        <h5 class="mt-4 font-weight-bold">Work/Bank Details</h5>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group  mt-2">
                <label for="" class="py-2">Staff ID</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Staff id"
                  required
                  v-model="dataObj.staff_id"
                  readonly
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group  mt-2">
                <label for="exampleFormControlSelect1" class="py-2"
                  >Department</label
                >
                <input
                  type="text"
                  class="form-control"
                  placeholder="Department"
                  required
                  v-model="dataObj.department.name"
                  readonly
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group  mt-2">
                <label for="exampleFormControlSelect1" class="py-2"
                  >Level</label
                >
                <input
                  type="text"
                  class="form-control"
                  placeholder="Level"
                  required
                  v-model="dataObj.profile.level"
                  readonly
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group  mt-2">
                <label for="exampleFormControlSelect1" class="py-2">Role</label>
                 <input
                v-if="dataObj.role === null "
                  type="text"
                  class="form-control"
                  placeholder="No role Assigned"
                  required
                  readonly
                />
                <input
                v-else
                  type="text"
                  class="form-control"
                  placeholder="Role"
                  required
                  v-model="dataObj.role.name"
                  readonly
                />
               
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group  mt-2">
                <label for="exampleFormControlSelect1" class="py-2"
                  >Date of Appointment</label
                >
               <input
                  type="text"
                  class="form-control"
                  placeholder="Date of Appointment"
                  required
                  v-model="dataObj.profile.date_hired"
                  readonly
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group  mt-2">
                <label for="" class="py-2">Account Name</label>
                <input
                
                  type="text"
                  class="form-control"
                  placeholder="Account Name"
                  required
                  v-model="dataObj.bank_detail.account_name"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group  mt-2">
                <label for="" class="py-2">Account Number</label>
                <input 
                  type="text"
                  class="form-control"
                  placeholder="Enter your account number"
                  required
                  v-model="dataObj.bank_detail.account_no"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group  mt-2">
                <label for="exampleFormControlSelect1" class="py-2">Bank</label>
                <select
                
                  class="form-control option-class select"
                  id="exampleFormControlSelect1"
                  required
                  v-model="dataObj.bank_detail.bank_name"
                >
                  <option class="colour" value="" id="selectCountry">---</option>
                  <option class="colour" v-for="item in banks_list" :key="item.id" :value="item.name" id="selectCountry"> {{ item.name }} </option>
                </select>
              </div>
            </div>
          </div>
          <div class="center">
            <div class="form-input">
              <div class="preview">
                <img id="file-ip-1-preview">
              </div>
              <label for="file-ip-1">Upload Passport Photo</label>
              <input type="file" id="file-ip-1" accept="image/*" @change="showPreview($event);">
            </div>
          </div>
           <div class="sign-in-button mt-3">
            <button class="py-3" type="submit" v-if="loading" disabled>
              <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
            </button>
            <button class="py-3" type="submit" v-else>Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import Swal from 'sweetalert2'
import helpers from '@/helpers/index.js'
import axios from 'axios'
export default {
  data(){
    return{
      loading: false,
      states: [],
      selState: '',
      lgas: '',
      roles: '',
      departments: '',
      banks_list: '',
      dataObj: {
        first_name: '',
        last_name: '',
        email: '',
        profile:{
          phone_number: '',
          date_of_birth: '',
          gender: '',
          marital_status: '',
          religion: '',
          state_of_origin: '',
          lga: '',
          next_of_kin: '',
          address: '',
          profile_photo: '',
        },
        department:{
          name: '',
        },
        role: {
          name:'',
        },
        bank_detail:{
          account_name: '',
          account_no: '',
          bank_name: '',
        }
      }
    }
  },
  methods:{
    getState() {
        var stateOptions = document.getElementById("selectState");
        var selOption = stateOptions.options[stateOptions.selectedIndex].value;
        // console.log(selOption);
        this.selState = selOption;
        this.getlgas();
      },
    async getStates() {
        let res = await axios.get(
          "https://locus.fkkas.com/api/states"
        );
        this.states = res.data.data;
      },
      async getlgas() {
        let res = await axios.get(
          `https://locus.fkkas.com/api/regions/${this.selState}`
        );
        this.lgas = res.data.data;
      },
      
      async getUser(){
        let res = await helpers.getUser();
        this.dataObj = res
        console.log(res);
      },
      async getBanks(){
        let res = await helpers.getBanks();
        this.banks_list = res;
      },
       showPreview($event){
        var input = event.target;
        this.dataObj.profile.profile_photo = input.files[0];
        console.log(this.dataObj.profile.profile_photo);
        if($event.target.files.length > 0){
          var src = URL.createObjectURL(event.target.files[0]);
          var preview = document.getElementById("file-ip-1-preview");
          preview.src = src;
          preview.style.display = "block";
        }
      },

      async updateProfile(){
        this.loading = true;
        const formData = new FormData();
        formData.append('first_name', this.dataObj.first_name)
        formData.append('last_name', this.dataObj.last_name)
        formData.append('email', this.dataObj.email)
        formData.append('phone_number', this.dataObj.profile.phone_number)
        formData.append('date_of_birth', this.dataObj.profile.date_of_birth)
        formData.append('gender', this.dataObj.profile.gender)
        formData.append('marital_status', this.dataObj.profile.marital_status)
        formData.append('religion', this.dataObj.profile.religion)
        formData.append('state_of_origin', this.dataObj.profile.state_of_origin)
        formData.append('lga', this.dataObj.profile.lga)
        formData.append('file', this.dataObj.profile.profile_photo)
        formData.append('next_of_kin', this.dataObj.profile.next_of_kin)
        formData.append('address', this.dataObj.profile.address)
        formData.append('account_no', this.dataObj.bank_detail.account_no)
        formData.append('account_name', this.dataObj.bank_detail.account_name)
        formData.append('bank_name', this.dataObj.bank_detail.bank_name)
        try {
          let res = await helpers.updateProfile(formData)
          console.log(res);
          Swal.fire("Welcome!", "Update Profile Successful!", "success");
          this.$router.push('/')
        } catch (error) {
          console.log(error);
        }
        this.loading = false;
      }
  },
  async created(){
    this.getStates();
    this.getUser();
    this.getBanks();
  }
}
</script>
