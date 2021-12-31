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
                  >Payment</a
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
                <DisbursedInfo></DisbursedInfo>
              </div>
              <div
                class="tab-pane fade"
                :class="{ 'active show': isActive('schedule') }"
                id="schedule"
              >
                <Schedule></Schedule>
              </div>
              <div
                class="tab-pane fade"
                :class="{ 'active show': isActive('payment') }"
                id="payment"
              >
                <Payment></Payment>
              </div>
              <div
                class="tab-pane fade"
                :class="{ 'active show': isActive('payoff') }"
                id="payoff"
              >
                <Payoff></Payoff>
              </div>
            </div>
          </div>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
import DisbursedInfo from "../Disbursements/DisbursedInfo.vue";
import Schedule from "../Disbursements/Schedule.vue";
import Payment from "../Disbursements/Payment.vue";
import Payoff from "../Disbursements/Payoff.vue";
export default {
  components: {
    DisbursedInfo,
    Schedule,
    Payment,
    Payoff,
  },
  name: "Show",
  data() {
    return {
      activeItem: "disbursed",
    };
  },
  methods: {
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive(menuItem) {
      this.activeItem = menuItem;
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
