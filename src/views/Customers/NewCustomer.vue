<template>
  <div>
    <base-header
      class="header pb-7 pt-lg-7 d-flex align-items-center"
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
      <div class="col-xl-12 order-xl-1">
        <card shadow type="secondary">
          <template v-slot:header>
            <div class="bg-white border-0">
              <div class="row align-items-center">
                <div class="col-12">
                  <h3 class="mb-0">New Customer</h3>
                </div>
              </div>
            </div>
          </template>
          <form>
            <div class="pl-lg-4">
              <div class="row">
                <div class="col-lg-6">
                  <base-input
                    alternative=""
                    label="Frist Name"
                    input-classes="form-control-alternative"
                    v-model="cusData.first_name"
                  />
                </div>
                <div class="col-lg-6">
                  <base-input
                    alternative=""
                    label="Last Name"
                    input-classes="form-control-alternative"
                    v-model="cusData.last_name"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <label for="Gender">Gender</label>
                  <select
                    class="form-control form-control-alternative"
                    v-model="cusData.gender"
                  >
                    <option value=""></option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div class="col-lg-6">
                  <base-input
                    type="date"
                    alternative=""
                    label="Date of Birth"
                    input-classes="form-control-alternative"
                    v-model="cusData.dob"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <base-input
                    alternative=""
                    label="Phone"
                    input-classes="form-control-alternative"
                    v-model="cusData.phone"
                  />
                </div>
                <div class="col-lg-6">
                  <base-input
                    type="email"
                    alternative=""
                    label="Email"
                    input-classes="form-control-alternative"
                    v-model="cusData.email"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <label for="Nationality">Nationality</label>
                  <select
                    class="form-control form-control-alternative"
                    v-model="cusData.nationality"
                  >
                    <option value=""></option>
                    <option value="Male">Khmer</option>
                    <option value="Female">Chinese</option>
                  </select>
                </div>
                <div class="col-lg-6">
                  <base-input
                    alternative=""
                    label="Cccupation"
                    input-classes="form-control-alternative"
                    v-model="cusData.occupation"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <base-input
                    alternative=""
                    label="Income"
                    input-classes="form-control-alternative"
                    v-model="cusData.income"
                  />
                </div>
                <div class="col-lg-6">
                  <base-input
                    alternative=""
                    label="Expense"
                    input-classes="form-control-alternative"
                    v-model="cusData.expense"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <label for="Identity Type">Identity Type</label>
                  <select
                    class="form-control form-control-alternative"
                    v-model="cusData.identity_type"
                  >
                    <option value=""></option>
                    <option value="ID Card">ID Card</option>
                    <option value="Passport">Passport</option>
                    <option value="Family Book">Family Book</option>
                  </select>
                </div>
                <div class="col-lg-6">
                  <base-input
                    alternative=""
                    label="Identity Number"
                    input-classes="form-control-alternative"
                    v-model="cusData.identity_number"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <base-input
                    alternative=""
                    type="date"
                    label="Issue Date"
                    input-classes="form-control-alternative"
                    v-model="cusData.issue_date"
                  />
                </div>
                <div class="col-lg-6">
                  <base-input
                    alternative=""
                    type="date"
                    label="Issue Expired Date"
                    input-classes="form-control-alternative"
                    v-model="cusData.issue_expired_date"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <base-input
                    type="text"
                    alternative=""
                    label="House Number"
                    input-classes="form-control-alternative"
                    v-model="cusData.no_number"
                  />
                </div>
                <div class="col-lg-6">
                  <base-input
                    alternative=""
                    type="text"
                    label="Street Number"
                    input-classes="form-control-alternative"
                    v-model="cusData.street_no"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <base-input
                    alternative=""
                    label="Address"
                    input-classes="form-control-alternative"
                    v-model="cusData.address"
                  />
                </div>
                <div class="col-lg-12">
                  <base-input
                    alternative=""
                    type="file"
                    label="Profile"
                    input-classes="form-control-alternative"
                    v-model="cusData.profile_img"
                  />
                </div>
              </div>
              <button
                type="button"
                @click="createCustomer()"
                class="btn btn-primary"
              >
                <em class="fas fa-save"></em>
                Save
              </button>
              <button 
                v-on:click="onCancel"
                type="button" 
                class="btn btn-secondary">
                <em class="fas fa-window-close"></em>
                Cancel
              </button>
            </div>
          </form>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
import httpAxios from "@/utils/http-axios";

export default {
  name: "newcustomer",
  data() {
    return {
      cusData: {
        first_name: "",
        last_name: "",
        dob: "",
        phone: "",
        email: "",
        nationality: "",
        income: "",
        expense: "",
        identity_type: "",
        identity_number: "",
        issue_date: "",
        issue_expired_date: "",
        no_number: "",
        street_no: "",
        address: "",
        profile_im: "",
      },
    };
  },
  methods: {
    async createCustomer() {
      const isSave = await httpAxios.post("customer", this.cusData);
      if (isSave) {
        this.$swal({
          position: "top-end",
          icon: "success",
          title: "The customer has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }

      this.$router.push("/customer");
    },
    onCancel() {
      this.show = false;
      this.$router.push("/customer");
    },
  },
};
</script>
<style>
.col-xl-12,
.col-xl,
.col-xl-auto {
  position: relative;
  padding-right: 0px !important;
  padding-left: 0px !important;
}
</style>
