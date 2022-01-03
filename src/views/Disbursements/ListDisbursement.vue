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
                  <router-link
                    to="/new-disbursement"
                    class="btn btn-primary btn-sm mb-2"
                    ><em class="far fa-plus-square"></em> New</router-link
                  >
                </div>
              </div>
              <div style="overflow-x: auto">
                <table
                  class="table table-striped Disbursed-table-sticky"
                  id="dtHorizontalExample"
                >
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Disbursed Code</th>
                      <th scope="col">Product Name</th>
                      <th scope="col">Customer Name</th>
                      <th scope="col">Disbursed Amount</th>
                      <th scope="col">Duration</th>
                      <th scope="col">Repayment Method</th>
                      <th scope="col">Interest Rate</th>
                      <th scope="col">Admin Fee Rate</th>
                      <th scope="col">Disbursed Date</th>
                      <th scope="col">Status</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in disData" :key="item.dis_id">
                      <th scope="row" v-text="index + 1"></th>
                      <td v-text="item.dis_code"></td>
                      <td v-text="item.product_type"></td>
                      <td
                        v-text="item.cus_firstname + ' ' + item.cus_lastname"
                      ></td>
                      <td v-text="item.balance"></td>
                      <td v-text="item.duration"></td>
                      <td v-text="item.repayment_method"></td>
                      <td v-text="item.interest_rate"></td>
                      <td v-text="item.fee_rate"></td>
                      <td v-text="item.dis_date"></td>
                      <td v-text="item.status"></td>
                      <td>
                        <router-link
                          v-bind:to="'/disbursed/' + item.dis_id + '/show'"
                          class="btn btn-sm btn-info"
                          title="Preview"
                        >
                          <em class="far fa-eye"></em>
                        </router-link>
                        <button
                          v-on:click="deleteDisbursed(item.dis_id)"
                          type="button"
                          class="btn btn-sm btn-danger"
                          title="Delete"
                        >
                          <em class="far fa-trash-alt"></em>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </template>
        </card>
      </div>
    </div>
  </div>
</template>

<script>
import httpAxios from "@/utils/http-axios";

export default {
  name: "List disbursed",
  data: function () {
    return {
      disData: {},
    };
  },
  created() {
    this.getDisbursed();
  },
  methods: {
    getDisbursed() {
      var self = this;
      httpAxios
        .get("disbursement")
        .then(function (response) {
          self.disData = response.data.data;
        })
        .catch(function (error) {
          console.log(error.message);
        });
    },
    deleteDisbursed(dis_id) {
      var self = this;
      httpAxios
        .delete("disbursement/" + dis_id)
        .then(function () {
          self.getDisbursed();
          self.$swal({
            position: "top-end",
            icon: "success",
            title: "This loan has been deleted successfuuly!",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch(function (error) {
          console.log(error.message);
        });
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

th,
td {
  text-align: left;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}
.Disbursed-table-sticky tr th:last-child,
.Disbursed-table-sticky tr td:last-child {
  position: sticky !important;
  right: 0;
  background-color: #f9fbfd !important;
}
</style>
