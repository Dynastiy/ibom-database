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
        <button>Add Staff <span class="ml-2"><ion-icon name="person-add"></ion-icon></span></button>
      </div>

      <!-- Table for Staff List -->
      <div class="row mt-4 user__table">
      <div class="col-lg-12">
            <!-- <h4 class="font-weight-bold mb-4">{{ currentRouteName }}  Users</h4> -->
            <div class="table-responsive">
              <table class="table table-centered table-nowrap mb-0">
                <thead class="thead-light">
                  <tr>
                    <th></th>
                    <th>Staff Reference</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Portfolio</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  
                  <tr>
                    <td>
                     <img/>
                    </td>
                    <td>
                      FMW/2002/1232/A12
                    </td>
                    <td class="text-capitalize">
                      Emmanuel Michael
                    </td>
                    <td>
                      emmanuel77michael@gmail.com
                    </td>
                    <td>
                      Finance Officer
                    </td>
                    <td>
                     <button class="view-more-button">
                       View More
                     </button>
                     <!-- Default button -->
                    <div class="btn-group dropleft ml-2">
                      <button type="button" class="more__icon" data-toggle="dropdown" aria-expanded="false">
                        <!-- Dropleft -->
                        <ion-icon name="more"></ion-icon>
                      </button>
                      <div class="dropdown-menu">
                        
                        <a class="dropdown-item"  href="#" >Activate</a>
                         <a class="dropdown-item" href="#">Suspend</a>
                        <!-- <div class="dropdown-divider"></div> -->
                        <a class="dropdown-item" href="#">Ban</a>
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