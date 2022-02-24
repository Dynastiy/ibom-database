<template>
  <div>
    <h2>Roles</h2>
    <div class="text-right">
      <button class="create__role" @click="add_role = !add_role">
        Create Role
      </button>
    </div>

    <!-- Add New Role Input Section -->

    <div class="add__role animate__fadeIn animate__animated" v-show="add_role">
      <h5>Add New Role</h5>
      <div class="add-role-body mt-3">
        <div class="">
          <input type="text" placeholder="Enter Role Name"/>
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
        <h1 class="text-white">
            View All Roles
        </h1>
    </section>
  </div>
</template>


<script>
export default {
    data(){
        return{
            add_role: false,
        }
    }
}
</script>
