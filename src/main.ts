import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { Button, message, ConfigProvider, Menu, Icon } from 'ant-design-vue';
Vue.use(Button);
Vue.use(ConfigProvider);
Vue.use(Menu);
Vue.use(Icon);
Vue.prototype.$message = message;
Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
