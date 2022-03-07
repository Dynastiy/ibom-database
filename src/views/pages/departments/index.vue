<template>
  <div>
    <div class="department">
      <div class="text-right mb-3">
        <button
          class="create-document"
          @click="add_department = !add_department"
        >
          <span class=""><ion-icon name="add"></ion-icon></span> Create
          Department
        </button>
      </div>
      <div class="accordion" id="accordionExample">
        <div
          class="card"
          v-for="department in departments"
          :key="department.id"
        >
          <div class="card-header" id="headingOne">
            <h2 class="mb-0">
              <button
                @click="getContent(department)"
                class="department__button btn-block text-left"
                type="button"
                data-toggle="collapse"
                :data-target="'#' + department.slug"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <span class="d-flex justify-content-between">
                  <span> {{ department.name }} </span>
                  <span> <ion-icon name="arrow-dropdown"></ion-icon> </span>
                </span>
              </button>
            </h2>
          </div>

          <div
            :id="department.slug"
            class="collapse"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div class="card-body">
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
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in staffs" :key="item.id">
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="name_wrap">
                                <img src="@/assets/male_avatar.png" />
                              </div>
                              <span class="ml-2"> {{ item.name }} </span>
                            </div>
                          </td>
                          <td>{{ item.staff_id }}</td>
                          <td class="text-capitalize">
                            <span v-if="item.role"> {{ item.role.name }}</span>
                            <span v-else>Null</span>
                          </td>
                          <td class="d-flex">
                            <router-link :to="'/dashboard/staff/' + item.id"
                              ><button class="view-more-button">
                                View More
                              </button></router-link
                            >
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
                                <a class="dropdown-item" href="#"
                                  >De-activate</a
                                >
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
        </div>
      </div>

      <div
        class="add-department-modal animate__animated animate__fadeIn"
        id="add_department"
        v-show="add_department"
      >
        <div class="add-department-modal-body">
          <form action="" @submit.prevent="createDepartment">
            <div>
              <div class="d-flex justify-content-between">
                <h5 class="card-title mb-3">Create New Department</h5>
                <div @click="add_department = !add_department">
                  <ion-icon name="close-circle-outline"></ion-icon>
                </div>
              </div>
              <div class="form-group mt-2">
                <label for="" class="">Name of Department</label>
                <input
                  v-model="name"
                  type="text"
                  class=""
                  placeholder="Name of Department"
                  required
                />
              </div>
              <div class="form-group mt-2">
                <label for="" class="">Description</label>
                <textarea
                  v-model="description"
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
                <button type="submit" v-else>Create</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import helpers from "@/helpers/index.js";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      departments: [],
      add_department: false,
      name: "",
      description: "",
      loading: false,
      staffs: [],
    };
  },
  methods: {
    async getDepartments() {
      let res = await helpers.getDepartments();
      // console.log(res);
      this.departments = res;
    },
    async getContent(department) {
      let res = await helpers.getDepartment(department.slug);
      this.staffs = res.members;
      console.log(res.members);
    },
    async createDepartment() {
      var payload = {
        name: this.name,
        description: this.description,
      };
      this.loading = true;
      try {
        let res = await helpers.createDepartment(payload);
        console.log(res);
        Swal.fire("Done!", "Department Created Successfully!", "success");
        this.add_department = false;
        this.getDepartments();
        this.name = "";
        this.description = "";
      } catch (error) {
        console.log(error);
        Swal.fire("Error!", "Something went wrong!", "warning");
        this.name = "";
        this.description = "";
      }
      this.loading = false;
    },
  },
  async created() {
    this.getDepartments();
    // this.getDepartment()
  },
};
</script>