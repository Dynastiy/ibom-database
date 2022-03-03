<template>
  <div>
    <div class="role_wrap">
      <div class="roles_header">
        <h5>Departments</h5>
        <p>Create and edit departments</p>
      </div>
      <div class="d-flex justify-content-between mt-2">
        <div class="text-right">
          <button class="create__role">Add Departments</button>
        </div>
      </div>

      <div
        class="add-department-modal animate__animated animate__fadeIn"
        id="add_department"
        v-show="update_department"
      >
        <div class="add-department-modal-body">
          <form action="" @submit.prevent="updateDepartment">
            <div>
              <div class="d-flex justify-content-between">
                <h5 class="card-title mb-3">Update Department</h5>
                <div @click="update_department = !update_department">
                  <ion-icon
                    class="cursor"
                    name="close-circle-outline"
                  ></ion-icon>
                </div>
              </div>
              <div class="form-group mt-2">
                <label for="" class="">Name of Department</label>
                <input
                  v-model="updateDeparmentInfo.name"
                  type="text"
                  class=""
                  placeholder="Name of Department"
                  required
                />
              </div>
              <div class="form-group mt-2">
                <label for="" class="">Description</label>
                <textarea
                  v-model="updateDeparmentInfo.description"
                  type="text"
                  class=""
                  placeholder="Description"
                  required
                />
              </div>
              <div class="create__department">
                <button type="submit" v-if="loading" disabled>
                  <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                  </div>
                </button>
                <button type="submit" v-else>Update</button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <!-- View Roles and Update Permissions  -->
      <section>
        <div class="view_all_roles_section">
          <div class="headers row">
            <div class="col-4">
              <div class="roles_section">
                <h5 class="mb-4">DEPARTMENTS</h5>
              </div>
            </div>
            <!-- <div class="col-4">
              <div class="remove_section text-center">
                <h5>PERMISSIONS</h5>
              </div>
            </div> -->
            <div class="col-4"></div>
          </div>
          <div
            class="row"
            v-for="department in Departments"
            :key="department.index"
          >
            <div class="roles_section col">
              <div class="list_section">
                <ul>
                  <li>{{ department.name }}</li>
                </ul>
              </div>
            </div>
            <div class="remove_section col">
              <!-- <h5>REMOVE</h5> -->
              <div class="list_section">
                <ul>
                  <li class="" @click="updateDept(department)">
                    <div class="text-right mb-3">
                      <button class="update_button d-flex align-items-center">
                        <p>Update Department</p>
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <!-- update -->
            <div class="remove_section col">
              <!-- <h5>REMOVE</h5> -->
              <div class="list_section">
                <ul>
                  <li class="" @click="deleteDepartment(department)">
                    <ion-icon class="" ios="ios-trash" md="md-trash"></ion-icon>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>


<script>
import helpers from "@/helpers/index.js";
import axios from "axios";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      add_role: false,
      update_department: false,
      permissions: [],
      Departments: [],
      updateDeparmentInfo: {
        name: "",
        description: "",
      },
      baseURL: "https://ibomdemo.africanapp.store/api/v1/admin/departments/",
      payload: {
        permissions: [],
        name: "",
      },
      loading: false,
      dept_id: "",
    };
  },
  methods: {
    async getPermissions() {
      try {
        const res = await helpers.getPermissions();
        // console.log(res);
        this.permissions = res;
      } catch (error) {
        console.log(error);
      }
    },
    async getDepartments() {
      try {
        const res = await helpers.getDepartments();
        console.log(res);
        this.Departments = res;
      } catch (error) {
        console.log(error);
      }
    },

    async createRole() {
      this.loading = true;
      try {
        let res = await helpers.createRole(this.payload);
        console.log(res);
        Swal.fire("Done!", "Successful!", "success");
        this.payload = {};
      } catch (error) {
        console.log(error);
        this.payload = {};
      }
      this.loading = false;
    },
    async deleteDepartment(department) {
      try {
        let res = await helpers.deleteDepartment(department.id);
        this.getDepartments();
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
    async updateDept(department) {
      this.update_department = !this.update_department;
      this.dept_id = department.id;
      console.log(this.dept_id);
    },
    async updateDepartment() {
      this.loading = true;
      try {
        let res = await axios.post(
          `${this.baseURL}${this.dept_id}`,
          this.updateDeparmentInfo
        );
        this.getDepartments();
        console.log(res);
        this.updateDeparmentInfo = {};
        this.update_department = !this.update_department;
        Swal.fire("Success!", "Department Updated!", "success");
      } catch (error) {
        console.log(error);
      }
      this.loading = true;
    },

    // async update_department(department) {
    //   var updateDeparmentInfo = {
    //     name: this.name,
    //     description: this.description,
    //   };
    //   this.loading = true;
    //   try {
    //     let res = await helpers.update_department(department.id);
    //     console.log(res);
    //     Swal.fire("Done!", "Department Updated Successfully!", "success");
    //     this.updateDepartment = false;
    //     this.getDepartments();
    //   } catch (error) {
    //     console.log(error);
    //     Swal.fire("Error!", "Something went wrong!", "warning");
    //     this.name = "";
    //     this.description = "";
    //   }
    //   this.loading = false;
    // },
  },
  async created() {
    this.getPermissions();
    this.getDepartments();
    // this.getDepartment();
  },
};
</script>
