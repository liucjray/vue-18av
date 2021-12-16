import Vue from 'vue';
import App from './App.vue';

// ----------
// config
// ----------
Vue.config.productionTip = false

// ----------
// ElelmentUI
// ----------
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
Vue.use(ElementUI);

// ----------
// vue-router
// ----------
import VueRouter from 'vue-router';
import home from "./components/home.vue";
import integration from "./components/integration.vue";

const Home = { template: home };
const Avgle = { template: integration };

const routes = [
  {
    path: "/",
    components: Home,
  },
  {
    path: "/avgle",
    components: Avgle,
  },
];

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes // (缩写) 相当于 routes: routes
})
export default router

// ----------
// 初始化
// ----------
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
