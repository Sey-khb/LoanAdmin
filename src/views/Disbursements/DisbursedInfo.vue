<template>
  <table class="table table-striped" aria-hidden="true">
    <tr>
      <td class="border-0 font-weight-bold" style="width: 20%">
        Disbursed Code
      </td>
      <td class="border-0" style="width: 5%">:</td>
      <td class="border-0" style="width: 25%">{{ disDetialData.dis_code }}</td>
      <td class="border-0 font-weight-bold" style="width: 20%">Status</td>
      <td class="border-0" style="width: 5%">:</td>
      <td class="border-0" style="width: 25%">{{ disDetialData.status }}</td>
    </tr>
    <tr>
      <td class="border-0 font-weight-bold" style="width: 20%">Product Name</td>
      <td class="border-0" style="width: 5%">:</td>
      <td class="border-0" style="width: 25%">
        {{ disDetialData.product_type }}
      </td>
      <td class="border-0 font-weight-bold" style="width: 20%">
        Repayment Method
      </td>
      <td class="border-0" style="width: 5%">:</td>
      <td class="border-0" style="width: 25%">
        {{ disDetialData.repayment_method }}
      </td>
    </tr>
    <tr>
      <td class="border-0 font-weight-bold" style="width: 20%">
        Disbursed Amount
      </td>
      <td class="border-0" style="width: 5%">:</td>
      <td class="border-0" style="width: 25%">{{ disDetialData.balance }}</td>
      <td class="border-0 font-weight-bold" style="width: 20%">Currency</td>
      <td class="border-0" style="width: 5%">:</td>
      <td class="border-0" style="width: 25%">{{ disDetialData.currency }}</td>
    </tr>
    <tr>
      <td class="border-0 font-weight-bold" style="width: 20%">Duration</td>
      <td class="border-0" style="width: 5%">:</td>
      <td class="border-0" style="width: 25%">{{ disDetialData.duration }}</td>
      <td class="border-0 font-weight-bold" style="width: 20%">
        Duration Period
      </td>
      <td class="border-0" style="width: 5%">:</td>
      <td class="border-0" style="width: 25%">
        {{ disDetialData.duration_period }}
      </td>
    </tr>
    <tr>
      <td class="border-0 font-weight-bold" style="width: 20%">
        Interest Rate
      </td>
      <td class="border-0" style="width: 5%">:</td>
      <td class="border-0" style="width: 25%">
        {{ disDetialData.interest_rate }}
      </td>
      <td class="border-0 font-weight-bold" style="width: 20%">
        Interest Period
      </td>
      <td class="border-0" style="width: 5%">:</td>
      <td class="border-0" style="width: 25%">
        {{ disDetialData.interest_period }}
      </td>
    </tr>
    <tr>
      <td class="border-0 font-weight-bold" style="width: 20%">Admin Fee</td>
      <td class="border-0" style="width: 5%">:</td>
      <td class="border-0" style="width: 25%">{{ disDetialData.fee_rate }}</td>
      <td class="border-0 font-weight-bold" style="width: 20%">Frequency</td>
      <td class="border-0" style="width: 5%">:</td>
      <td class="border-0" style="width: 25%">{{ disDetialData.frequency }}</td>
    </tr>
    <tr>
      <td class="border-0 font-weight-bold" style="width: 20%">
        Disbursed Date
      </td>
      <td class="border-0" style="width: 5%">:</td>
      <td class="border-0" style="width: 25%">{{ disDetialData.dis_date }}</td>
      <td class="border-0 font-weight-bold" style="width: 20%">
        First Payment Date
      </td>
      <td class="border-0" style="width: 5%">:</td>
      <td class="border-0" style="width: 25%">
        {{ disDetialData.first_date }}
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "DisbursedInfo",
  props: ["propsDisDetial"],
  data() {
    return {
      disDetialData: [],
    };
  },
  created() {
    var self = this;
    self.disDetialData = self.propsDisDetial;
  },
};
</script>
