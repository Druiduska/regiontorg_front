import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import authFetchMixin from "@/mixins/auth_fetch.js";
import authMixin from "@/mixins/auth.js";

createApp(App).use(store).use(router).mixin(authFetchMixin).mixin(authMixin).mount('#app')