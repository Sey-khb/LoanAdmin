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
                  <h3 class="mb-0">Create Disbursement</h3>
                </div>
              </div>
            </div>
          </template>
          <form>
            <div class="pl-lg-4">
              <div class="row">
                <div class="col-lg-6 mb-4">
                  <label for="Product Name">Customer</label>
                  <!-- <select class="form-control form-control-alternative" v-model="disbursementData.cus_id">
                    <option value=""></option>
                    <option value="2">Phai Rotana</option>
                    <option value="3">Mr Suy</option>
                  </select> -->
                  <Multiselect
                    v-model="value"
                    placeholder="Choose a programming language"
                    :filter-results="false"
                    :min-chars="1"
                    :resolve-on-load="false"
                    :delay="0"
                    :searchable="true"
                    :options="
                      async function (query) {
                        return await ''; // check JS block for implementation
                      }
                    "
                  />
                </div>
                <div class="col-lg-6">
                  <label for="Product Name">Product Name</label>
                  <select
                    class="form-control form-control-alternative"
                    v-model="disbursementData.product_type"
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
                    v-model="disbursementData.balance"
                  />
                </div>
                <div class="col-lg-6">
                  <label for="Currency">Currency</label>
                  <select
                    class="form-control form-control-alternative"
                    v-model="disbursementData.currency"
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
                    label="Duration"
                    type="number"
                    input-classes="form-control-alternative"
                    v-model="disbursementData.duration"
                  />
                </div>
                <div class="col-lg-6">
                  <label for="Interest Period">Duration Period</label>
                  <select
                    class="form-control form-control-alternative"
                    v-model="disbursementData.duration_period"
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
                    label="Interest Rate (%)"
                    type="number"
                    input-classes="form-control-alternative"
                    v-model="disbursementData.interest_rate"
                  />
                </div>
                <div class="col-lg-6">
                  <label for="Interest Period">Interest Period</label>
                  <select
                    class="form-control form-control-alternative"
                    v-model="disbursementData.interest_period"
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
                    v-model="disbursementData.fee_rate"
                  />
                </div>
                <div class="col-lg-6">
                  <base-input
                    type="number"
                    alternative=""
                    label="Frequency"
                    input-classes="form-control-alternative"
                    v-model="disbursementData.frequency"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <label for="Nationality">Repayment Method</label>
                  <select
                    class="form-control form-control-alternative"
                    v-model="disbursementData.repayment_method"
                  >
                    <option value=""></option>
                    <option value="Balloon">Balloon</option>
                    <option value="Bullet">Bullet</option>
                  </select>
                </div>
                <div class="col-lg-6">
                  <base-input
                    alternative=""
                    type="date"
                    label="Disbursed Date"
                    input-classes="form-control-alternative"
                    v-model="disbursementData.dis_date"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <base-input
                    alternative=""
                    type="date"
                    label="First Payment Date"
                    input-classes="form-control-alternative"
                    v-model="disbursementData.first_date"
                  />
                </div>
              </div>
              <button
                v-on:click="createDisbursement"
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
</template>
<script>
import httpAxios from "@/utils/http-axios";
import Multiselect from "@vueform/multiselect";
export default {
  name: "New disbursement",
  components: {
    Multiselect,
  },
  data() {
    return {
      example6: {
        value: null,
        placeholder: "Choose a programming language",
        filterResults: false,
        minChars: 1,
        resolveOnLoad: false,
        delay: 0,
        searchable: true,
        options: null
      },
      disbursementData: {
        cus_id: "",
        product_type: "",
        repayment_method: "",
        interest_rate: "",
        balance: "",
        duration_period: "",
        interest_period: "",
        currency: "",
        frequency: "",
        duration: "",
        fee_rate: "",
        dis_date: "",
        first_date: "",
      },
    };
  },
  methods: {
    async createDisbursement() {
      const isSave = await httpAxios.post(
        "disbursement",
        this.disbursementData
      );
      if (isSave) {
        this.$swal({
          position: "top-end",
          icon: "success",
          title: "The Loan create successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        this.$router.push("/disbursed");
      }
    },
    onCancel() {
      this.show = false;
      this.$router.push("/disbursed");
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
<style src="@vueform/multiselect/themes/default.css"></style>
