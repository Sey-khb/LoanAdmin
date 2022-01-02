<template>
  <div class="row justify-content-center">
    <div class="col-lg-5 col-md-7">
      <div class="card bg-secondary shadow border-0">
        <div class="card-body px-lg-5 py-lg-5">
          <div class="text-center text-muted mb-4">
            <h3>Create New Account</h3>
          </div>
          <form role="form">
            <base-input
              autocomplete
              formClasses="input-group-alternative"
              placeholder="Name"
              addon-left-icon="ni ni-hat-3"
              v-model="registerData.name"
            >
            </base-input>

            <base-input
              autocomplete
              formClasses="input-group-alternative"
              placeholder="Email"
              type="email"
              addon-left-icon="ni ni-email-83"
              v-model="registerData.email"
              focused
            >
            </base-input>

            <base-input
              autocomplete
              formClasses="input-group-alternative"
              placeholder="Password"
              type="password"
              addon-left-icon="ni ni-lock-circle-open"
              v-model="registerData.password"
            >
            </base-input>

            <base-input
              autocomplete
              formClasses="input-group-alternative"
              placeholder="Confirm Password"
              type="password"
              addon-left-icon="ni ni-lock-circle-open"
              v-model="registerData.con_password"
            >
            </base-input>

            <div class="text-center">
              <base-button @click="register()" type="primary" class="my-4"
                >Create account</base-button
              >
            </div>
          </form>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-6">
          <a href="#" class="text-light">
            <small>Forgot password?</small>
          </a>
        </div>
        <div class="col-6 text-right">
          <router-link to="/login" class="text-light">
            <small>Login into your account</small>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import httpAxios from "@/utils/http-axios";
export default {
  name: "register",
  data() {
    return {
      registerData: {
        name: "",
        email: "",
        password: "",
        con_password: "",
      },
    };
  },
  methods: {
    async register() {
      await httpAxios.post("register", this.registerData);

      this.$router.push("/login");
    },
  },
};
</script>
