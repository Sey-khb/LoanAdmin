// Import
import axios from 'axios';
import store from '@/store';
import { showNotification } from '@/utils/show-notification';
// import route from "../router";

// Create
const service = axios.create({
  baseURL: 'http://localhost:8000/',
});

// Token
if (store.getters.getLoggedUser) {
  service.defaults.headers.common['Authorization'] = 'Bearer ' + store.getters.getLoggedUser.access_token;
}

// Request Interceptor
service.interceptors.request.use(
  (config) => {
    store.dispatch('displayLoader', true);

    return config;
  },
  (error) => {
    store.dispatch('displayLoader', false);

    return Promise.reject(error);
  },
);

// Response Interceptor
service.interceptors.response.use(
  (response) => {
    store.dispatch('displayLoader', false);

    return response;
  },
  (error) => {
    store.dispatch('displayLoader', false);

    var errors = error;

    if (error.response) {
      // Session Expired
      if (401 === error.response.status) {
        errors = error.response.data.message;
        // store.dispatch('logOut');
      }

      // Errors from backend
      if (error.response.status == 422) {
        errors = '';
        for (var errorKey in error.response.data.errors) {
          errors += '\n';
          errors += error.response.data.errors[errorKey].detail + '<br>';
        }
      }

      // Backend error
      if (500 === error.response.status) {
        errors = error.response.data.message;
      }

      // Server down
      if (503 === error.response.status) {
        errors = error.response.data.message;
      }

      // 404
      if (error.response.status == 404) {
        errors = 'Page not found!';
      }
      if(error.response.status == 401){
        // route.push({path: "/login"})
      }
    }

    // console.log()
    showNotification({
      message: String(errors),
      type: 'warning',
    });

    return Promise.reject(error);
  },
);

// Export axios
export default service;
