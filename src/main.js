import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; // element默认主题色样式
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/css/icon.css'; // 加入图标样式

Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
