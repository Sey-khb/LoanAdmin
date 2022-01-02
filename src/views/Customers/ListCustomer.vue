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
                  <h3 class="mb-0">All Customers</h3>
                </div>
              </div>
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Date of Birth</th>
                    <th scope="col">phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in cusList" :key="item.id">
                    <th scope="" v-text="index + 1"></th>
                    <td v-text="item.first_name + ' ' + item.last_name"></td>
                    <td v-text="item.gender"></td>
                    <td v-text="item.dob"></td>
                    <td v-text="item.phone"></td>
                    <td v-text="item.email"></td>
                    <td>
                      <router-link
                        v-bind:to="'/customer/' + item.id + '/show'"
                        class="btn btn-sm btn-info"
                      >
                        <em class="far fa-eye"></em>
                      </router-link>
                      <router-link
                        v-bind:to="'/customer/' + item.id + '/edit'"
                        class="btn btn-sm btn-primary"
                      >
                        <em class="far fa-edit"></em>
                      </router-link>
                      <button
                        v-on:click="deleteCustomer(item.id)"
                        class="btn btn-sm btn-danger"
                        type="button"
                      >
                        <em class="far fa-trash-alt"></em>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
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
  name: "List Customer",
  data: function () {
    return {
      cusList: {},
    };
  },
  methods: {
    getCustomers() {
      var self = this;
      httpAxios
        .get("customer")
        .then(function (response) {
          self.cusList = response.data.data;
        })
        .catch(function (error) {
          console.log(error.message);
        });
    },
    deleteCustomer(cus_id) {
      var self = this;
      httpAxios
      .delete("customer/" + cus_id)
        .then(function () {
          self.getCustomers();
        })
        .catch(function (error) {
          console.log(error.message);
        });
    },
  },
  created() {
    this.getCustomers();
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
