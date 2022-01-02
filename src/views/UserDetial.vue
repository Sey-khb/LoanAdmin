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
                  <h3 class="mb-0">User Information</h3>
                </div>
              </div>
            </div>
          </template>
          <div class="container">
            <table class="table table-striped" aria-hidden="true">
              <tr>
                <td class="border-0 font-weight-bold" style="width: 20%">
                  User Name
                </td>
                <td class="border-0" style="width: 5%">:</td>
                <td class="border-0" style="width: 25%">
                  {{ userData.name }}
                </td>
                <td class="border-0 font-weight-bold" style="width: 20%">
                  Gender
                </td>
                <td class="border-0" style="width: 5%">:</td>
                <td class="border-0" style="width: 25%">
                  {{ userData.gender }}
                </td>
              </tr>
              <tr>
                <td class="border-0 font-weight-bold" style="width: 20%">
                  Email Address
                </td>
                <td class="border-0" style="width: 5%">:</td>
                <td class="border-0" style="width: 25%">
                  {{ userData.email }}
                </td>
                <td class="border-0 font-weight-bold" style="width: 20%">
                  Date of Birth
                </td>
                <td class="border-0" style="width: 5%">:</td>
                <td class="border-0" style="width: 25%">
                  {{ userData.dob }}
                </td>
              </tr>
              <tr>
                <td class="border-0 font-weight-bold" style="width: 20%">
                  Address
                </td>
                <td class="border-0" style="width: 5%">:</td>
                <td class="border-0" style="width: 25%">
                  {{ userData.address }}
                </td>
                <td class="border-0 font-weight-bold" style="width: 20%">
                  About Me
                </td>
                <td class="border-0" style="width: 5%">:</td>
                <td class="border-0" style="width: 25%">
                  {{ userData.about_me }}
                </td>
              </tr>
              <tr>
                <td class="border-0 text-center" colspan="12">
                  <router-link
                    v-bind:to="'/user/' + userData.id + '/edit'"
                    class="btn btn-sm btn-primary"
                    title="Modify"
                  >
                    <em class="far fa-edit"></em>
                  </router-link>
                  <router-link
                    v-bind:to="'/user/' + userData.id"
                    class="btn btn-sm btn-danger"
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
  name: "User Detial",
  data: function () {
    return {
      userData: {},
    };
  },
  methods: {
    userDetial() {
      httpAxios
        .get("user/" + this.$route.params.id)
        .then((response) => {
          this.userData = response.data.data;
        })
        .catch(function (error) {
          console.log(error.message);
        });
    },
  },
  created() {
    this.userDetial();
  },
};
</script>
