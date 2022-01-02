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
                    label="Customer"
                    input-classes="form-control-alternative"
                    v-model="cusData.cus_id"
                  />
                </div>
                <div class="col-lg-6">
                  <label for="Product Name">Product Name</label>
                  <select
                    class="form-control form-control-alternative"
                    v-model="cusData.product_name"
                  >
                    <option value=""></option>
                    <option value="Personal">Personal</option>
                    <option value="Representative">Representative</option>
                  </select>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <base-input
                    type="number"
                    alternative=""
                    label="Disbursed Amount"
                    input-classes="form-control-alternative"
                    v-model="cusData.balance"
                  />
                </div>
                <div class="col-lg-6">
                  <label for="Currency">Currency</label>
                  <select
                    class="form-control form-control-alternative"
                    v-model="cusData.currency"
                  >
                    <option value=""></option>
                    <option value="USD">USD</option>
                    <option value="Riel">Riel</option>
                  </select>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <base-input
                    alternative=""
                    label="Interest Rate (%)" 
                    input-classes="form-control-alternative"
                    v-model="cusData.interest_rate"
                  />
                </div>
                <div class="col-lg-6">
                  <label for="Interest Period">Interest Period</label>
                  <select
                    class="form-control form-control-alternative"
                    v-model="cusData.interest_period"
                  >
                    <option value=""></option>
                    <option value="Month">Monthly</option>
                    <option value="Year">Yearly</option>
                    <option value="Week">Weekly</option>
                  </select>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <base-input
                    alternative=""
                    type="number"
                    label="Fee Rate (%)"
                    input-classes="form-control-alternative"
                    v-model="cusData.fee_rate"
                  />
                </div>
                <div class="col-lg-6">
                  <base-input
                    type="number"
                    alternative=""
                    label="Frequency"
                    input-classes="form-control-alternative"
                    v-model="cusData.frequency"
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
                    label="Income ($)"
                    input-classes="form-control-alternative"
                    v-model="cusData.income"
                  />
                </div>
                <div class="col-lg-6">
                  <base-input
                    alternative=""
                    label="Expense ($)"
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
