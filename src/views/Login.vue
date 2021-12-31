<template>
  <div class="row justify-content-center">
    <div class="col-lg-5 col-md-7">
      <div class="card bg-secondary shadow border-0">
        <div class="card-body px-lg-5 py-lg-5">
          <div class="text-center text-muted mb-4">
            <h3>Sign In</h3>
          </div>
          <form role="form">
            <base-input
              formClasses="input-group-alternative mb-3"
              placeholder="Email"
              autocomplete
              addon-left-icon="ni ni-email-83"
              v-model="username"
              type="email"
            >
            </base-input>

            <base-input
              formClasses="input-group-alternative mb-3"
              placeholder="Password"
              autocomplete
              type="password"
              addon-left-icon="ni ni-lock-circle-open"
              v-model="password"
            >
            </base-input>

            <base-checkbox class="custom-control-alternative">
              <span class="text-muted">Remember me</span>
            </base-checkbox>
            <div class="text-center">
              <base-button type="primary" @click="login()" class="my-4">Sign in</base-button>
            </div>
          </form>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-6">
          <a href="#" class="text-light"><small>Forgot password?</small></a>
        </div>
        <div class="col-6 text-right">
          <router-link to="/register" class="text-light"
            ><small>Create new account</small></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import httpAxios from '@/utils/http-axios';

export default {
  name: 'Login',
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    login() {
      const self = this;
      const formData = new FormData()
      formData.append('username', self.username)
      formData.append('password', self.password)
      httpAxios({
        url: 'login',
        method: 'POST',
        data:  formData,
      }).then(async (response) => {
        self.$store.commit('LOGGED_USER', response.data);
        
        self.$router.push('/dashboard');
      });
    },
  },
};
</script>
