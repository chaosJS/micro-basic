<template>
	<a-config-provider prefixCls="cns">
		<section id="cns-main-app">
			<section class="cns-menu-wrapper">
				<main-menu :menus="menus" />
			</section>
			<section class="cns-frame-wrapper">
				<!-- 主应用渲染区，用于挂载主应用路由触发的组件 -->
				<router-view v-show="$route.name" />

				<!-- 子应用渲染区，用于挂载子应用节点 -->
				<section v-show="!$route.name" id="frame"></section>
			</section>
		</section>
	</a-config-provider>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainMenu from '@/components/menu/index.vue';
@Component({
	components: {
		MainMenu,
	},
})
export default class App extends Vue {
	/**
	 * 菜单列表
	 * key: 唯一 Key 值
	 * title: 菜单标题
	 * path: 菜单对应的路径
	 */
	menus = [
		{
			key: 'Home',
			title: '主页',
			path: '/',
		},
		{
			key: 'VueMicroApp',
			title: 'Vue 主页',
			path: '/vue',
		},
		{
			key: 'VueMicroAppList',
			title: 'Vue 列表页',
			path: '/vue/list',
		},
		{
			key: 'ReactMicroApp',
			title: 'React 主页',
			path: '/react',
		},
		{
			key: 'ReactMicroAppList',
			title: 'React 列表页',
			path: '/react/list',
		},
		{
			key: 'AngularMicroApp',
			title: 'Angular 主页',
			path: '/angular',
		},
		{
			key: 'AngularMicroAppList',
			title: 'Angular 列表页',
			path: '/angular/list',
		},
		{
			key: 'StaticMicroApp',
			title: 'Static 微应用',
			path: '/static',
		},
	];
}
</script>
<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
</style>
