<template>
  <div>
    <div class="role_wrap">
      <div class="roles_header">
        <h5>Roles</h5>
        <p>Manage staff and change roles/permissions</p>
      </div>
      <div class="text-right">
        <button class="create__role" @click="add_role = !add_role">
          Add Roles
        </button>
      </div>

      <!-- Add New Role Input Section -->

      <div
        class="add__role animate__fadeIn animate__animated"
        v-show="add_role"
      >
        <h5>Add New Role</h5>
        <div class="add-role-body mt-3">
          <div class="">
            <input
              type="text"
              v-model="payload.name"
              placeholder="Enter Role Name"
            />
          </div>

          <div class="add-role-dropdown">
            <div class="dropdown">
              <button
                class="dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Select Permissions
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <div
                  class="select-permission"
                  v-for="item in permissions"
                  :key="item.id"
                >
                  <input
                    type="checkbox"
                    :id="item.slug"
                    :value="item.id"
                    v-model="payload.permissions"
                  />
                  <label :for="item.slug">{{ item.name }}</label>
                </div>
              </div>
            </div>
          </div>

          <div class="add-role-btn">
            <button @click="createRole">
              <div class="d-flex justify-content-center" v-if="loading">
                <div class="spinner-border" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
              <span v-else>Add </span>
            </button>
          </div>
        </div>
      </div>

      <!-- View Roles and Update Permissions  -->
      <section>
        <div class="view_all_roles_section">
          <div class="headers row">
            <div class="col-4">
              <div class="roles_section">
                <h5>ROLES</h5>
              </div>
            </div>
            <div class="col-4">
              <div class="remove_section text-center">
                <h5>PERMISSIONS</h5>
              </div>
            </div>
            <div class="col-4"></div>
          </div>
          <div class="row" v-for="role in Roles" :key="role.index">
            <div class="roles_section col-4">
              <div class="list_section">
                <ul>
                  <li class="m-auto">{{ role.name }}</li>
                </ul>
              </div>
            </div>
            <div class="permissions_section col-4">
              <div class="list_section">
                <div class="">
                  <div class="add-role-dropdown">
                    <div class="dropdown">
                      <button
                        class="dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Edit Permissions
                      </button>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <div
                          class="select-permission"
                          v-for="item in permissions"
                          :key="item.id"
                        >
                          <input
                            type="checkbox"
                            :id="item.slug"
                            :value="item.id"
                            v-model="payload.permissions"
                          />
                          <label :for="item.slug">{{ item.name }}</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="remove_section col-4">
              <!-- <h5>REMOVE</h5> -->
              <div class="list_section">
                <ul>
                  <li class="">
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
import Swal from "sweetalert2";
export default {
  data() {
    return {
      add_role: false,
      permissions: [],
      Roles: [],
      payload: {
        permissions: [],
        name: "",
      },
      loading: false,
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
    async getRoles() {
      try {
        const res = await helpers.getRoles();
        console.log(res);
        this.Roles = res;
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
  },
  async created() {
    this.getPermissions();
    this.getRoles();
  },
};
</script>
