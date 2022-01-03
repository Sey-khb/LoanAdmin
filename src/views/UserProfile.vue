<template>
  <div>
    <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center" style="background-image: url(img/theme/profile-cover.jpg);background-size: cover;background-position: center top;">
      <!-- Mask -->
      <span class="mask bg-gradient-success opacity-8"></span>
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
                      alternative=""
                      label="Full Name"
                      input-classes="form-control-alternative"
                      v-model="model.name"
                    />
                  </div>
                  <div class="col-lg-6">
                    <base-input
                      alternative=""
                      label="Gender"
                      input-classes="form-control-alternative"
                      v-model="model.name"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6">
                    <base-input
                      alternative=""
                      label="Email address"
                      input-classes="form-control-alternative"
                      v-model="model.email"
                    />
                  </div>
                  <div class="col-lg-6">
                    <base-input
                      alternative=""
                      label="Date of Birth"
                      input-classes="form-control-alternative"
                      v-model="model.lastName"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6">
                    <base-input
                      alternative=""
                      label="Password"
                      input-classes="form-control-alternative"
                      v-model="model.password"
                    />
                  </div>
                  <div class="col-lg-6">
                    <base-input
                      alternative=""
                      label="Confirm Password"
                      input-classes="form-control-alternative"
                      v-model="model.con_password"
                    />
                  </div>
                </div>
              </div>
              <!-- Address -->
              <div class="pl-lg-4">
                <div class="row">
                  <div class="col-md-12">
                    <base-input
                      alternative=""
                      label="Address"
                      placeholder="Home Address"
                      input-classes="form-control-alternative"
                      v-model="model.address"
                    />
                  </div>
                  <div class="col-lg-12">
                    <base-input
                      alternative=""
                      type="file"
                      label="Profile"
                      input-classes="form-control-alternative"
                      v-model="model.con_password"
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
                    ></textarea
                    >
                  </base-input>
                </div>
              </div>
            </form>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "user-profile",
  data() {
    return {
      model: {
        username: "",
        email: "",
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        country: "",
        zipCode: "",
        about: "",
      },
    };
  },
};
</script>
<style></style>
