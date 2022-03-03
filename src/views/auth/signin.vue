<template>
  <div class="signin__page">
    <div>
      <div class="logo text-center mb-4">
        <img src="@/assets/logo.png" width="70" alt="" />
      </div>
      <div class="login__box">
        <h4 class="login__header font-weight-bold">Sign In</h4>
        <p class="login__description small">
          Get Access to Ibom Database Systems
        </p>
        <form action="" @submit.prevent="login">
          <div class="mt-4">
            <label for="">Email</label> <br />
            <input type="text" name="" id="" v-model="email" />
          </div>
          <div>
            <label for="">Password</label> <br />
            <input type="password" name="" id="" v-model="password" />
          </div>
          <div class="text-right forgot-password mb-4">
            <router-link to="/signin">Forgot Password?</router-link>
          </div>
          <div class="sign-in-button">
            <button type="submit" v-if="loading" disabled>
              <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
            </button>
            <button type="submit" v-else>Sign In</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import helpers from "@/helpers/index";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      email: "",
      password: "",
      msg: "",
      loading: false,
    };
  },
  methods: {
    async login() {
      this.loading = true;
      try {
        const credentials = {
          email_or_staff_id: this.email,
          password: this.password,
        };
        const response = await helpers.login(credentials);
        console.log(response);
        const token = response.token;
        const user = response.user;
        const fully_onboarded = response.fully_onboarded;
        if (user.name === "Admin") {
          this.$router.push("/");
          Swal.fire(`Welcome ${user.name}!`, "Login Successful!", "success");
        } else if (response.fully_onboarded === "False") {
          this.$router.push("/update-details");
          Swal.fire(
            `Welcome ${user.name}!`,
            "First Time User, please complete your profile!",
            "success"
          );
        } else {
          this.$router.push("/");
          Swal.fire(`Welcome ${user.name}!`, "Login Successful!", "success");
        }
        this.$store.dispatch("login", { token, user, fully_onboarded });
        this.loading = false;
      } catch (error) {
        Swal.fire("Error", "Password or Email Not Correct!", "warning");
        console.log(error);
        this.email = "";
        this.password = "";
        this.loading = false;
      }
    },
    async created() {
      if (this.$store.getters.isLoggedIn) {
        this.$router.push("/");
      }
    },
  },
};
</script>
