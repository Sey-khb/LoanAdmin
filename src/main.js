import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ArgonDashboard from "./plugins/argon-dashboard";
import "element-plus/lib/theme-chalk/index.css";
import store from './store';
import VueNotificationList from '@dafcoe/vue-notification';

const appInstance = createApp(App);
appInstance.use(router);
appInstance.use(ArgonDashboard);
appInstance.use(store);
appInstance.use(VueNotificationList);
appInstance.mount("#app");
