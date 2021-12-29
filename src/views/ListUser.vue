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
                  <h3 class="mb-0">All Users</h3>
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
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-sm btn-info"
                        title="Preview"
                      >
                        <em class="far fa-eye"></em>
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-primary"
                        title="Edit"
                      >
                        <em class="far fa-edit"></em>
                      </button>
                      <button
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
          </template>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
import httpAxios from "@/utils/http-axios";

export default {
  name: "user-list",
  data: function () {
    return {
      users: [],
    };
  },
  methods: {
    getUsers() {
      var self = this;
      httpAxios.get('user').then(function (response) {
        console.log(response.data);
        self.users = response.data;
      })
      .catch(function (error) {
        console.log(error.message);
      });
      }
    },
    created() {
      this.getUsers();
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
