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
          <div class="container">
            <ul class="nav nav-tabs nav-justified">
              <li class="nav-item">
                <a
                  class="nav-link"
                  @click.prevent="setActive('disbursed')"
                  :class="{ active: isActive('disbursed') }"
                  href="#disbursed"
                  >Disbursed Info</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  @click.prevent="setActive('schedule')"
                  :class="{ active: isActive('schedule') }"
                  href="#schedule"
                  >Schedule</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  @click.prevent="setActive('payment')"
                  :class="{ active: isActive('payment') }"
                  href="#payment"
                  >Collected</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  @click.prevent="setActive('payoff')"
                  :class="{ active: isActive('payoff') }"
                  href="#payoff"
                  >Pay Off</a
                >
              </li>
            </ul>
            <div class="tab-content py-3" id="myTabContent">
              <div
                class="tab-pane fade"
                :class="{ 'active show': isActive('disbursed') }"
                id="disbursed"
              >
                <table class="table table-striped" aria-hidden="true">
                  <tr>
                    <td class="border-0 font-weight-bold" style="width: 20%">
                      Disbursed Code
                    </td>
                    <td class="border-0" style="width: 5%">:</td>
                    <td class="border-0" style="width: 25%">
                      {{ disDetial.dis_code }}
                    </td>
                    <td class="border-0 font-weight-bold" style="width: 20%">
                      Status
                    </td>
                    <td class="border-0" style="width: 5%">:</td>
                    <td class="border-0" style="width: 25%">
                      {{ disDetial.status }}
                    </td>
                  </tr>
                  <tr>
                    <td class="border-0 font-weight-bold" style="width: 20%">
                      Product Name
                    </td>
                    <td class="border-0" style="width: 5%">:</td>
                    <td class="border-0" style="width: 25%">
                      {{ disDetial.product_type }}
                    </td>
                    <td class="border-0 font-weight-bold" style="width: 20%">
                      Repayment Method
                    </td>
                    <td class="border-0" style="width: 5%">:</td>
                    <td class="border-0" style="width: 25%">
                      {{ disDetial.repayment_method }}
                    </td>
                  </tr>
                  <tr>
                    <td class="border-0 font-weight-bold" style="width: 20%">
                      Disbursed Amount
                    </td>
                    <td class="border-0" style="width: 5%">:</td>
                    <td class="border-0" style="width: 25%">
                      {{ disDetial.balance }}
                    </td>
                    <td class="border-0 font-weight-bold" style="width: 20%">
                      Currency
                    </td>
                    <td class="border-0" style="width: 5%">:</td>
                    <td class="border-0" style="width: 25%">
                      {{ disDetial.currency }}
                    </td>
                  </tr>
                  <tr>
                    <td class="border-0 font-weight-bold" style="width: 20%">
                      Duration
                    </td>
                    <td class="border-0" style="width: 5%">:</td>
                    <td class="border-0" style="width: 25%">
                      {{ disDetial.duration }}
                    </td>
                    <td class="border-0 font-weight-bold" style="width: 20%">
                      Duration Period
                    </td>
                    <td class="border-0" style="width: 5%">:</td>
                    <td class="border-0" style="width: 25%">
                      {{ disDetial.duration_period }}
                    </td>
                  </tr>
                  <tr>
                    <td class="border-0 font-weight-bold" style="width: 20%">
                      Interest Rate
                    </td>
                    <td class="border-0" style="width: 5%">:</td>
                    <td class="border-0" style="width: 25%">
                      {{ disDetial.interest_rate }}
                    </td>
                    <td class="border-0 font-weight-bold" style="width: 20%">
                      Interest Period
                    </td>
                    <td class="border-0" style="width: 5%">:</td>
                    <td class="border-0" style="width: 25%">
                      {{ disDetial.interest_period }}
                    </td>
                  </tr>
                  <tr>
                    <td class="border-0 font-weight-bold" style="width: 20%">
                      Admin Fee
                    </td>
                    <td class="border-0" style="width: 5%">:</td>
                    <td class="border-0" style="width: 25%">
                      {{ disDetial.fee_rate }}
                    </td>
                    <td class="border-0 font-weight-bold" style="width: 20%">
                      Frequency
                    </td>
                    <td class="border-0" style="width: 5%">:</td>
                    <td class="border-0" style="width: 25%">
                      {{ disDetial.frequency }}
                    </td>
                  </tr>
                  <tr>
                    <td class="border-0 font-weight-bold" style="width: 20%">
                      Disbursed Date
                    </td>
                    <td class="border-0" style="width: 5%">:</td>
                    <td class="border-0" style="width: 25%">
                      {{ disDetial.dis_date }}
                    </td>
                    <td class="border-0 font-weight-bold" style="width: 20%">
                      First Payment Date
                    </td>
                    <td class="border-0" style="width: 5%">:</td>
                    <td class="border-0" style="width: 25%">
                      {{ disDetial.first_date }}
                    </td>
                  </tr>
                </table>
              </div>
              <div
                class="tab-pane fade"
                :class="{ 'active show': isActive('schedule') }"
                id="schedule"
              >
                <card shadow type="secondary">
                  <form action="" method="post" id="frm-pay">
                    <div class="row">
                      <div class="col-md-6">
                        <label for="payment">Monthly Payment</label>
                        <div class="form-control-alternative">
                          <input
                            readonly
                            type="number"
                            step="any"
                            class="form-control"
                            v-model.number="amountPay.amount"
                          />
                        </div>
                      </div>
                      <div class="form-group btnPay col-md-6">
                        <label for="payment" class="p-2"></label>
                        <button
                          id="btn-pay"
                          type="button"
                          class="btn btn-success btn-block"
                          v-on:click="btnPay"
                        >
                          <em class="la la-receipt"></em>
                          Receive Now
                        </button>
                      </div>
                    </div>
                  </form>
                </card>
                <div class="table-responsive">
                  <table class="table table-hover" aria-hidden="true">
                    <thead>
                      <tr class="text-nowrap bg-light">
                        <th scope="">No</th>
                        <th scope="">Payment Date</th>
                        <th scope="">Balance</th>
                        <th scope="">Principal</th>
                        <th scope="">Interest</th>
                        <th scope="">Penalty</th>
                        <th scope="">Fee</th>
                        <th scope="">Total</th>
                        <th scope="">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(item, index) in shceduleDetial"
                        :key="item.id"
                      >
                        <td v-if="index == 0">-</td>
                        <td v-else>{{ index }}</td>
                        <td v-text="item.collection_date"></td>
                        <td v-text="formatCurrency(item.balance, '$')"></td>
                        <td v-text="formatCurrency(item.principal, '$')"></td>
                        <td v-text="formatCurrency(item.interest, '$')"></td>
                        <td v-text="formatCurrency(item.penalty, '$')"></td>
                        <td v-text="formatCurrency(item.fee, '$')"></td>
                        <td v-if="index == 0"></td>
                        <td
                          v-else
                          v-text="
                            formatCurrency(
                              item.principal +
                                item.interest +
                                item.penalty +
                                item.fee,
                              '$'
                            )
                          "
                        ></td>
                        <td v-if="index == 0"></td>
                        <td v-else v-text="item.status"></td>
                      </tr>
                    </tbody>
                    <tfoot class="thead-light">
                      <tr class="text-nowrap">
                        <th scope=""></th>
                        <th scope=""></th>
                        <th scope=""></th>
                        <th scope=""></th>
                        <th scope=""></th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
              <div
                class="tab-pane fade"
                :class="{ 'active show': isActive('payment') }"
                id="payment"
              >
                <div class="table-responsive">
                  <table class="table table-hover" aria-hidden="true">
                    <thead>
                      <tr class="text-nowrap bg-light">
                        <th scope="">No</th>
                        <th scope="">Payment Date</th>
                        <th scope="">Invoice Number</th>
                        <th scope="">Principal</th>
                        <th scope="">Interest</th>
                        <th scope="">Penalty</th>
                        <th scope="">Fee</th>
                        <th scope="">Total</th>
                        <th scope="">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(item, index) in schedulePaidData"
                        :key="item.id"
                      >
                        <td v-text="index + 1"></td>
                        <td v-text="item.paid_date"></td>
                        <td v-text="item.invoice"></td>
                        <td
                          v-text="formatCurrency(item.principal_paid, '$')"
                        ></td>
                        <td
                          v-text="formatCurrency(item.interest_paid, '$')"
                        ></td>
                        <td
                          v-text="formatCurrency(item.penalty_paid, '$')"
                        ></td>
                        <td v-text="formatCurrency(item.fee_paid, '$')"></td>
                        <td
                          v-text="
                            formatCurrency(
                              item.principal_paid +
                                item.interest_paid +
                                item.penalty_paid +
                                item.fee_paid,
                              '$'
                            )
                          "
                        ></td>
                        <td v-if="item.status == 'Close'">Paid</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                class="tab-pane fade"
                :class="{ 'active show': isActive('payoff') }"
                id="payoff"
              >
                <card shadow type="secondary">
                  <form action="" method="post" id="frm-pay">
                    <div class="row">
                      <div class="col-md-6">
                        <label for="payment">Principal</label>
                        <div class="form-control-alternative">
                          <input
                            readonly
                            type="number"
                            step="any"
                            class="form-control"
                            v-model.number="amountPayOff.principal"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <label for="payment">interest</label>
                        <div class="form-control-alternative">
                          <input
                            readonly
                            type="number"
                            step="any"
                            class="form-control"
                            v-model.number="amountPayOff.interest"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <label for="payment">Fee</label>
                        <div class="form-control-alternative">
                          <input
                            readonly
                            type="number"
                            step="any"
                            class="form-control"
                            v-model.number="amountPayOff.fee"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <label for="payment">Penalty</label>
                        <div class="form-control-alternative">
                          <input
                            readonly
                            type="number"
                            step="any"
                            class="form-control"
                            v-model.number="amountPayOff.penalty"
                          />
                        </div>
                      </div>

                      <div class="form-group col-md-3">
                        <label for="payment" class="p-2"></label>
                        <button
                          id="btn-pay"
                          type="button"
                          class="btn btn-success btn-block"
                          v-on:click="btnPayOff"
                        >
                          <em class="la la-receipt"></em>
                          Pay Now
                        </button>
                      </div>
                    </div>
                  </form>
                </card>
                <div class="table-responsive">
                  <table class="table table-hover" aria-hidden="true">
                    <thead>
                      <tr class="text-nowrap bg-light">
                        <th scope="">No</th>
                        <th scope="">Payment Date</th>
                        <th scope="">Invoice Number</th>
                        <th scope="">Principal</th>
                        <th scope="">Interest</th>
                        <th scope="">Penalty</th>
                        <th scope="">Fee</th>
                        <th scope="">Total</th>
                        <th scope="">Status</th>
                      </tr>
                    </thead>
                    <tbody v-for="(item, index) in schedulePaidData" :key="item.id">
                      <tr v-if="item.status == 'Paid Off'">
                        <td v-text="index + 1"></td>
                        <td v-text="item.paid_date"></td>
                        <td v-text="item.invoice"></td>
                        <td
                          v-text="formatCurrency(item.principal_paid, '$')"
                        ></td>
                        <td
                          v-text="formatCurrency(item.interest_paid, '$')"
                        ></td>
                        <td
                          v-text="formatCurrency(item.penalty_paid, '$')"
                        ></td>
                        <td v-text="formatCurrency(item.fee_paid, '$')"></td>
                        <td
                          v-text="
                            formatCurrency(
                              item.principal_paid +
                                item.interest_paid +
                                item.penalty_paid +
                                item.fee_paid,
                              '$'
                            )
                          "
                        ></td>
                        <td v-if="item.status == 'Paid Off'">Paid Off</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
import httpAxios from "@/utils/http-axios";
import $ from "jquery";

export default {
  name: "Show",
  data() {
    return {
      activeItem: "disbursed",
      disDetial: {},
      shceduleDetial: {},
      customerDetial: {},
      schedulePaidData: {},
      amountPay: {
        amount: 0,
      },
      amountPayOff: {},
    };
  },
  created() {
    this.disbursedDetial();
    this.schedulePaid();
  },
  methods: {
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive(menuItem) {
      this.activeItem = menuItem;
    },
    formatCurrency(value, symbol, $sign = true) {
      if (!$.isNumeric(value)) {
        value = 0;
      }
      if (symbol === "$") {
        let val = (value / 1).toFixed(2).replace(",", ".");
        if ($sign) {
          return "$" + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        } else {
          return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
      }
    },
    disbursedDetial() {
      var vm = this;
      httpAxios
        .get("disbursement/" + vm.$route.params.id + "/form")
        .then((response) => {
          vm.disDetial = response.data.data.disbursement;
          vm.shceduleDetial = response.data.data.schedules;
          vm.customerDetial = response.data.data.customer;
          vm.amountPay = response.data.data.pay_now;
          vm.amountPayOff = response.data.data.pay_off;
        })
        .catch(function (error) {
          console.log(error.message);
        });
    },
    schedulePaid() {
      var vm = this;
      httpAxios
        .get("disbursement/" + vm.$route.params.id + "/schedule-paid")
        .then((response) => {
          vm.schedulePaidData = response.data.data;
        })
        .catch(function (error) {
          console.log(error.message);
        });
    },
    btnPay() {
      var vm = this;
      httpAxios
        .post(
          "disbursement/" + vm.$route.params.id + "/schedule/paynow",
          vm.amountPay
        )
        .then(() => {
          vm.disbursedDetial();
          vm.schedulePaid();
          vm.$swal({
            position: "top-end",
            icon: "success",
            title: "Payment Successfuuly!!",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch(function (error) {
          console.log(error.message);
        });
    },
    btnPayOff() {
      var vm = this;
      httpAxios
        .post("disbursement/" + vm.$route.params.id + "/schedule/payoff")
        .then(() => {
          vm.disbursedDetial();
          vm.schedulePaid();
          vm.$swal({
            position: "top-end",
            icon: "success",
            title: "Pay Off Loan Successfuuly!!",
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
</style>
