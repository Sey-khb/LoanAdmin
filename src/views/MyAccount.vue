<template>
  <div>
    <base-header
      class="header pb-7 pt-2 pt-lg-7 d-flex align-items-center"
      style="
        min-height: 10px;
        background-image: url(img/theme/profile-cover.jpg);
        background-size: cover;
        background-position: center top;
      "
    >
      <!-- Mask -->
      <span class="mask bg-gradient-success opacity-8"></span>
      <!-- Header container -->
    </base-header>

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col-xl-12 order-xl-1">
          <card shadow type="secondary">
            <template v-slot:header>
              <div class="bg-white border-0">
                <div class="row align-items-center">
                  <div class="col-8">
                    <h3 class="mb-0">My account</h3>
                  </div>
                  <div class="col-4 text-right">
                    <a href="#!" class="btn btn-sm btn-primary">Settings</a>
                  </div>
                </div>
              </div>
            </template>
            <form>
              <h6 class="heading-small text-muted mb-4">User information</h6>
              <div class="pl-lg-4">
                <div class="row">
                  <div class="col-lg-6">
                    <base-input
                      type="text"
                      alternative=""
                      label="Full Name"
                      input-classes="form-control-alternative"
                      v-model="userData.name"
                    />
                  </div>
                  <div class="col-lg-6">
                    <label for="Gender">Gender</label>
                    <select class="form-control form-control-alternative">
                      <option value=""></option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6">
                    <base-input
                      readonly
                      type="email"
                      alternative=""
                      label="Email address"
                      input-classes="form-control-alternative"
                      v-model="userData.email"
                    />
                  </div>
                  <div class="col-lg-6">
                    <base-input
                      type="date"
                      alternative=""
                      label="Date of Birth"
                      input-classes="form-control-alternative"
                      v-model="userData.dob"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6">
                    <base-input
                      type="password"
                      alternative=""
                      label="Password"
                      input-classes="form-control-alternative"
                      v-model="userData.password"
                    />
                  </div>
                  <div class="col-lg-6">
                    <base-input
                      type="password"
                      alternative=""
                      label="Confirm Password"
                      input-classes="form-control-alternative"
                      v-model="userData.con_password"
                    />
                  </div>
                </div>
              </div>
              <!-- Address -->
              <div class="pl-lg-4">
                <div class="row">
                  <div class="col-md-12">
                    <base-input
                      type="text"
                      alternative=""
                      label="Address"
                      placeholder="Home Address"
                      input-classes="form-control-alternative"
                      v-model="userData.address"
                    />
                  </div>
                  <div class="col-lg-12">
                    <base-input
                      alternative=""
                      type="file"
                      label="Profile"
                      input-classes="form-control-alternative"
                      v-model="userData.profile"
                    />
                  </div>
                </div>
              </div>
              <!-- Description -->
              <div class="pl-lg-4">
                <div class="form-group">
                  <base-input alternative="" label="About Me">
                    <textarea
                      rows="4"
                      class="form-control form-control-alternative"
                      placeholder="A few words about you ..."
                      v-model="userData.about_me"
                    >
                    </textarea>
                  </base-input>
                </div>
                <button
                  v-on:click="createUser"
                  type="button"
                  class="btn btn-primary"
                >
                  <em class="fas fa-save"></em>
                  Save
                </button>
                <button
                  v-on:click="onCancel"
                  type="button"
                  class="btn btn-secondary"
                >
                  <em class="fas fa-window-close"></em>
                  Cancel
                </button>
              </div>
            </form>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import httpAxios from "@/utils/http-axios";

export default {
  name: "My Account",
  data() {
    return {
      userData: {
        name: "",
        gender: "",
        email: "",
        dob: "",
        password: "",
        con_password: "",
        address: "",
        profile: "",
        about_me: "",
      },
    };
  },
  methods: {
    createUser() {
      httpAxios
        .post("user", this.userData)
        .then(function (response) {
          this.userData = response.data.data;
        })
        .catch(function (error) {
          console.log(error.message);
        });
    },
    onCancel() {
      this.show = false;
      this.$router.push("/user");
    },
  },
};
</script>
