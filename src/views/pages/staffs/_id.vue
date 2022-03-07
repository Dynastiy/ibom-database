<template>
  <div>
    <div class="router_wrap" @click="back">
      <ion-icon name="backspace" />
    </div>

    <div class="single__user mt-4">
      <section class="left__side">
        <div class="top">
          <div class="">
            <img
              v-if="staff.profile"
              :src="baseUrl + staff.profile.profile_photo + '?' + Date.now()"
            />
          </div>
          <div class="mb-4">
            <div class="d-flex align-items-end mb-4">
              <h6>WORK</h6>
              <div class="hr_line"></div>
            </div>
            <div>
              <div class="mb-4">
                <h5 class="work__header font-weight-bold">Department</h5>
                <p class="small">{{ staff.department_name }}</p>
              </div>
              <div>
                <h5 class="work__header font-weight-bold">Role</h5>
                <p class="small" v-if="staff.role">{{ staff.role.name }}</p>
              </div>
            </div>
          </div>
          <div>
            <div class="d-flex align-items-end mb-4">
              <h6>PERMISSIONS</h6>
              <div class="hr_line"></div>
            </div>
            <div>
              <p class="small" v-for="item in permissions" :key="item.id">
                {{ item.name }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="right__side">
        <div class="">
          <h4 class="font-weight-bold mb-3">{{ staff.name }}</h4>
          <div class="mt-4">
            <h6 class="mb-1">staff id</h6>
            <p>{{ staff.staff_id }}</p>
          </div>
        </div>
        <div class="mb-4">
          <div class="mt-4">
            <h6 class="mb-1">Level</h6>
            <p v-if="staff.profile">{{ staff.profile.level }}</p>
          </div>
          <div class="mt-4">
            <h6 class="mb-1">Date Hired</h6>
            <p v-if="staff.profile">{{ staff.profile.date_hired }}</p>
          </div>
        </div>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <a
              class="nav-link active top"
              id="home-tab"
              data-toggle="tab"
              href="#home"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Profile
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              class="nav-link top"
              id="profile-tab"
              data-toggle="tab"
              href="#profile"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Bank Details
            </a>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div class="row">
              <div class="mt-4 col-md-6">
                <h6 class="mb-1">email</h6>
                <p v-if="staff.profile">{{ staff.email }}</p>
              </div>
              <div class="mt-4 col-md-6">
                <h6 class="mb-1">phone number</h6>
                <p v-if="staff.profile">{{ staff.profile.phone_number }}</p>
              </div>
              <div class="mt-4 col-md-12">
                <h6 class="mb-1">address</h6>
                <p v-if="staff.profile">{{ staff.profile.address }}</p>
              </div>
              <div class="mt-4 col-md-6">
                <h6 class="mb-1">marital status</h6>
                <p v-if="staff.profile">{{ staff.profile.marital_status }}</p>
              </div>
              <div class="mt-4 col-md-6">
                <h6 class="mb-1">religion</h6>
                <p v-if="staff.profile">{{ staff.profile.religion }}</p>
              </div>
              <div class="mt-4 col-md-6">
                <h6 class="mb-1">state of origin</h6>
                <p v-if="staff.profile">{{ staff.profile.state_of_origin }}</p>
              </div>
              <div class="mt-4 col-md-6">
                <h6 class="mb-1">lga</h6>
                <p v-if="staff.profile">{{ staff.profile.lga }}</p>
              </div>
              <div class="mt-4 col-md-6">
                <h6 class="mb-1">next of kin</h6>
                <p v-if="staff.profile">{{ staff.profile.next_of_kin }}</p>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div class="mt-4">
              <h6 class="mb-1">bank name</h6>
              <p v-if="staff.bank_details">
                {{ staff.bank_details.bank_name }}
              </p>
            </div>
            <div class="mt-4">
              <h6 class="mb-1">account name</h6>
              <p v-if="staff.bank_details">
                {{ staff.bank_details.account_name }}
              </p>
            </div>
            <div class="mt-4">
              <h6 class="mb-1">account number</h6>
              <p v-if="staff.bank_details">
                {{ staff.bank_details.account_no }}
              </p>
            </div>
          </div>
        </div>
<<<<<<< HEAD
        <div class="mt-3 d-flex justify-content-center">
          <button class="activate">Activate Staff</button>
          <button class="de_activate ml-1">Deactivate User</button>
          <button class="ban ml-1">Ban Staff</button>
          <button class="unban ml-1">Unban Staff</button>
=======
        <div class="mt-3 d-flex" style="gap: 15px">
          <button class="activate" v-show="staff.status === 'active' ">Activate Staff</button>
          <button class="de_activate" @click="deactivateUser"> Deactivate User </button>
          <button class="ban"  > Ban Staff </button>
          <button class="unban" v-show="staff.status === 'banned' ">Unban Staff</button>
>>>>>>> b46691a96526320ce0116ca7b0eaf29a34462f48
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import helpers from "@/helpers/index.js";
export default {
  data() {
    return {
      staff: {},
      id: this.$route.params.id,
      baseUrl: "https://ibomdemo.africanapp.store/",
      permissions: [],
    };
  },
  methods: {
    async getStaff() {
      try {
        let res = await helpers.getStaff(this.id);
        // console.log(res);
        this.staff = res;
        this.permissions = res.role.permissions;
      } catch (error) {
        console.log(error);
      }
    },
<<<<<<< HEAD
    back() {
      this.$router.go(-1);
    },
=======
    async deactivateUser(){
      let payload = {
        user_id: this.id
      };
      console.log(payload);
        const res = await helpers.deactivateUser(payload);
        console.log(res);
        // this.getStaff();
        // return res
        
      
    },
    back(){
      this.$router.go(-1)
    }
>>>>>>> b46691a96526320ce0116ca7b0eaf29a34462f48
  },
  async created() {
    this.getStaff();
  },
};
</script>