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
                  <h3 class="mb-0">Customer Information</h3>
                </div>
              </div>
            </div>
          </template>
          <div class="container">
            <table class="table table-striped" aria-hidden="true">
              <tr>
                <td class="border-0 font-weight-bold" style="width: 20%">
                  Customer Code
                </td>
                <td class="border-0" style="width: 5%">:</td>
                <td class="border-0" style="width: 25%">
                  {{ cusDetial.cus_code }}
                </td>
                <td class="border-0 font-weight-bold" style="width: 20%">
                  Customer Name
                </td>
                <td class="border-0" style="width: 5%">:</td>
                <td class="border-0" style="width: 25%">
                  {{ cusDetial.first_name }} {{ cusDetial.last_name }}
                </td>
              </tr>
              <tr>
                <td class="border-0 font-weight-bold" style="width: 20%">
                  Gender
                </td>
                <td class="border-0" style="width: 5%">:</td>
                <td class="border-0" style="width: 25%">
                  {{ cusDetial.gender }}
                </td>
                <td class="border-0 font-weight-bold" style="width: 20%">
                  Date of Birth
                </td>
                <td class="border-0" style="width: 5%">:</td>
                <td class="border-0" style="width: 25%">
                  {{ cusDetial.dob }}
                </td>
              </tr>
              <tr>
                <td class="border-0 font-weight-bold" style="width: 20%">
                  Phone Number
                </td>
                <td class="border-0" style="width: 5%">:</td>
                <td class="border-0" style="width: 25%">
                  {{ cusDetial.phone }}
                </td>
                <td class="border-0 font-weight-bold" style="width: 20%">
                  Email Address
                </td>
                <td class="border-0" style="width: 5%">:</td>
                <td class="border-0" style="width: 25%">
                  {{ cusDetial.email }}
                </td>
              </tr>
              <tr>
                <td class="border-0 font-weight-bold" style="width: 20%">
                  Nationality
                </td>
                <td class="border-0" style="width: 5%">:</td>
                <td class="border-0" style="width: 25%">
                  {{ cusDetial.nationality }}
                </td>
                <td class="border-0 font-weight-bold" style="width: 20%">
                  Occupation
                </td>
                <td class="border-0" style="width: 5%">:</td>
                <td class="border-0" style="width: 25%">
                  {{ cusDetial.occupation }}
                </td>
              </tr>
              <tr>
                <td class="border-0 font-weight-bold" style="width: 20%">
                  Income
                </td>
                <td class="border-0" style="width: 5%">:</td>
                <td class="border-0" style="width: 25%">
                  {{ cusDetial.income }}
                </td>
                <td class="border-0 font-weight-bold" style="width: 20%">
                  Expense
                </td>
                <td class="border-0" style="width: 5%">:</td>
                <td class="border-0" style="width: 25%">
                  {{ cusDetial.expense }}
                </td>
              </tr>
              <tr>
                <td class="border-0 font-weight-bold" style="width: 20%">
                  Identity Type
                </td>
                <td class="border-0" style="width: 5%">:</td>
                <td class="border-0" style="width: 25%">
                  {{ cusDetial.identity_type }}
                </td>
                <td class="border-0 font-weight-bold" style="width: 20%">
                  Identity Number
                </td>
                <td class="border-0" style="width: 5%">:</td>
                <td class="border-0" style="width: 25%">
                  {{ cusDetial.identity_number }}
                </td>
              </tr>
              <tr>
                <td class="border-0 font-weight-bold" style="width: 20%">
                  Issue Date
                </td>
                <td class="border-0" style="width: 5%">:</td>
                <td class="border-0" style="width: 25%">
                  {{ cusDetial.issue_date }}
                </td>
                <td class="border-0 font-weight-bold" style="width: 20%">
                  Issue Expired Date
                </td>
                <td class="border-0" style="width: 5%">:</td>
                <td class="border-0" style="width: 25%">
                  {{ cusDetial.issue_expired_date }}
                </td>
              </tr>
              <tr>
                <td class="border-0 font-weight-bold" style="width: 20%">
                  House Number
                </td>
                <td class="border-0" style="width: 5%">:</td>
                <td class="border-0" style="width: 25%">
                  {{ cusDetial.house_number }}
                </td>
                <td class="border-0 font-weight-bold" style="width: 20%">
                  Street Number
                </td>
                <td class="border-0" style="width: 5%">:</td>
                <td class="border-0" style="width: 25%">
                  {{ cusDetial.street_no }}
                </td>
              </tr>
              <tr>
                <td class="border-0 font-weight-bold" style="width: 20%">
                  Address
                </td>
                <td class="border-0" style="width: 5%">:</td>
                <td class="border-0" style="width: 25%">
                  {{ cusDetial.address }}
                </td>
                <td class="border-0 font-weight-bold" style="width: 20%">
                  Profile
                </td>
                <td class="border-0" style="width: 5%">:</td>
                <td class="border-0" style="width: 25%">
                  {{ cusDetial.profile_img }}
                </td>
              </tr>
              <tr>
                <td class="border-0 text-center" colspan="12">
                  <router-link
                    v-bind:to="'/customer/' + cusDetial.id + '/edit'"
                    class="btn btn-sm btn-primary"
                    title="Modify"
                  >
                    <em class="far fa-edit"></em>
                  </router-link>
                  <router-link
                    v-bind:to="'/customer/' + cusDetial.id"
                    class="btn btn-sm btn-danger"
                    title="Delete"
                  >
                    <em class="far fa-trash-alt"></em>
                  </router-link>
                </td>
              </tr>
            </table>
          </div>
        </card>
      </div>
    </div>
  </div>
</template>

<script>
import httpAxios from "@/utils/http-axios";

export default {
  name: "Customer Detial",
  data: function () {
    return {
      id: "",
      cusDetial: {},
    };
  },
  methods: {
    customerDetial() {
      httpAxios
        .get("customer/" + this.id)
        .then((response) => {
          this.cusDetial = response.data;
        })
        .catch(function (error) {
          console.log(error.message);
        });
    },
  },
  created() {
    this.id = this.$route.params.id;
    this.customerDetial();
  },
};
</script>
