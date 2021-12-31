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
                  <h3 class="mb-0">New Disbursement</h3>
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
                  <base-input
                    alternative=""
                    label="Gender"
                    input-classes="form-control-alternative"
                    v-model="cusData.gender"
                  />
                </div>
                <div class="col-lg-6">
                  <base-input
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
                    alternative=""
                    label="Email"
                    input-classes="form-control-alternative"
                    v-model="cusData.email"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <base-input
                    alternative=""
                    label="Nationality"
                    input-classes="form-control-alternative"
                    v-model="cusData.nationality"
                  />
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
                  <base-input
                    alternative=""
                    label="Identity Type"
                    input-classes="form-control-alternative"
                    v-model="cusData.identity_type"
                  />
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
                    label="Issue Expired Date"
                    input-classes="form-control-alternative"
                    v-model="cusData.issue_expired_date"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <base-input
                    alternative=""
                    label="House Number"
                    input-classes="form-control-alternative"
                    v-model="cusData.no_number"
                  />
                </div>
                <div class="col-lg-6">
                  <base-input
                    alternative=""
                    type="date"
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
              <button type="button" class="btn btn-primary">
                <em class="fas fa-save"></em> 
                Save
              </button>
              <button type="button" class="btn btn-secondary">
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
export default {
  name: "New disbursement",
  data() {
    return {
      cusData: {},
    };
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
