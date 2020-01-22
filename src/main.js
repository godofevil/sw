import Vue from 'vue';
import App from './App.vue';
require('../node_modules/weather-icons/css/weather-icons.min.css')

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
