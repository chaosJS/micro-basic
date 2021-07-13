import Vue from 'vue';
import { registerMicroApps, start } from 'qiankun';
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

// 注册子应用
const mircoApps = [
	{
		name: 'jianshu',
		entry: 'http://localhost:9000',
		container: '#frame',
		activeRule: '/react',
	},
	{
		name: 'vueApp',
		entry: 'http://localhost:9002',
		container: '#frame',
		activeRule: '/vue',
	},
];
registerMicroApps(mircoApps);
start();
new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
