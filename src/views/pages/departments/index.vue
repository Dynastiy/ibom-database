<template>
  <div>
    <div class="department">
      <div class="text-right mb-3">
        <button class="create-document"> <span class=""
              ><ion-icon name="add"></ion-icon
            ></span> Create Department </button>
      </div>
      <div class="accordion" id="accordionExample">
        <div class="card" v-for="department in departments" :key="department.id">
          <div class="card-header" id="headingOne">
            <h2 class="mb-0">
              <button @click="getContent(department)"
                class="department__button btn-block text-left"
                type="button"
                data-toggle="collapse"
                :data-target='"#"+department.slug'
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
                  <th>Department</th>
                  <th>Permissions</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <div class="name_wrap">
                        <img src="@/assets/male_avatar.png" />
                      </div>
                      <span class="ml-2">Emmanuel Michael</span>
                    </div>
                  </td>
                  <td>FMW/2002/1232/A12</td>
                  <td class="text-capitalize">Manager</td>
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
        </div>
      </div>


      <div class="add-department-modal">
        <div class="add-depaertment-modal-body">
          <form action="">
            <div>
              <div class="form-group mx-2 mt-2">
                <label for="" class="py-2">Name of Department</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last Name"
                  required
                />
              </div>
              <div class="form-group mx-2 mt-2">
                <label for="" class="py-2">Description</label>
                <textarea
                  type="text"
                  class="form-control"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import helpers from "@/helpers/index.js"
export default {
    data(){
        return{
            departments: []
        }
    },
    methods:{
        async getDepartments(){
            let res = await helpers.getDepartments();
            console.log(res);
            this.departments = res
        },
        async getContent(department){
      let res = await helpers.getDepartment(department.slug);
            console.log(res);
    },
    },
    async created(){
        this.getDepartments();
        // this.getDepartment()
    }
}
</script>