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
            <input type="text" placeholder="Enter Role Name" />
          </div>

          <div class="">
            <select name="" id="">
              <option value="">Select Permission</option>
              <option value="">One</option>
            </select>
          </div>

          <div class="add-role-btn">
            <button>Add</button>
          </div>
        </div>
      </div>

      <!-- View Roles and Update Permissions  -->
      <section>
        <div class="view_all_roles_section">
          <div class="d-flex justify-content-between">
            <div class="roles_section">
              <h5>ROLES</h5>
              <div class="list_section">
                <ul>
                  <li>Manager</li>
                </ul>
              </div>
            </div>
            <div class="permissions_section">
              <h5>PERMISSIONS</h5>
              <div class="list_section">
                <div class="">
                  <div class="">
                    <select class="select_section" name="" id="">
                      <option value="">Edit Permission</option>
                      <option value="">One</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="remove_section">
              <h5>REMOVE</h5>
              <div class="list_section">
                <ul>
                  <li></li>
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
export default {
  data() {
    return {
      add_role: false,
    };
  },
};
</script>
