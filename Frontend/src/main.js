import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import VueSpinners from 'vue-spinners'



Vue.use(BootstrapVue);
Vue.use(VueSpinners)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
