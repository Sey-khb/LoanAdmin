<template>
  <base-nav
    class="navbar-top navbar-dark"
    id="navbar-main"
    :show-toggle-button="false"
    expand
  >
    <form
      class="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto"
    >
      <div class="form-group mb-0">
        <base-input
          placeholder="Search"
          class="input-group-alternative"
          alternative=""
          addon-right-icon="fas fa-search"
        >
        </base-input>
      </div>
    </form>
    <ul class="navbar-nav align-items-center d-none d-md-flex">
      <li class="nav-item dropdown p-2">
        <base-dropdown class="nav-link pr-0">
          <template v-slot:title>
            <div class="media align-items-center">
              <span class="avatar avatar-sm rounded-circle">
                <img
                  alt="Image placeholder"
                  src="img/theme/rotana-800X800.jpeg"
                />
              </span>
              <div class="media-body ml-2 d-none d-lg-block">
                <span class="mb-0 text-sm font-weight-bold">Phai Rotana</span>
              </div>
            </div>
          </template>
          <div class="dropdown-header noti-title">
            <h6 class="text-overflow m-0">Welcome!</h6>
          </div>
          <router-link 
            to="/profile"
            class="btn-sm">
            <em class="ni ni-single-02"></em>
            <span> My profile</span>
          </router-link><br/>
          <router-link 
            to="/profile" 
            @click="logOut()"
            class="btn-sm">
            <em class="ni ni-user-run"></em>
            <span> Logout</span>
          </router-link>
        </base-dropdown>
      </li>
    </ul>
  </base-nav>
</template>
<script>
export default {
  data() {
    return {
      activeNotifications: false,
      showMenu: false,
      searchQuery: "",
    };
  },
  methods: {
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    hideSidebar() {
      this.$sidebar.displaySidebar(false);
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    logOut() {
      this.$store.commit('REMOVE_LOGGED_USER');
    },
    // async currentUser() {
    //   httpAxios.get("users/me").then(function (response) {
    //     this.fetchUser = response.data.data;
    //   }).catch(function (error) {
    //     console.log(error.message);
    //   });
    // },
  },
};
</script>
