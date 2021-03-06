import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueMaterial from 'vue-material';
// import VueCookies from 'vue-cookies';

import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import '@/assets/scss/view.scss';

// Vue.use(VueCookies);
Vue.use(VueMaterial);

Vue.config.productionTip = false;

Vue.prototype.$EventBus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
