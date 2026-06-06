// 导入主页公共布局
import BackendLayout from '@/components/BackendLayout.vue'
// 导入登录注册页面公共布局
import AuthLayout from '@/components/AuthLayout.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
// 路由配置
const backendRoutes = [
	{
		path: '/back',
		component: BackendLayout,
		children: [
			{
				path: 'dashboard',
				component: () => import('@/views/dashboard.vue'),
				meta: {
					title: '数据分析',
					icon: 'PieChart',
				},
			},
			{
				path: 'knowledge',
				component: () => import('@/views/knowledge.vue'),
				meta: {
					title: '知识文章',
					icon: 'ChatLineSquare',
				},
			},
			{
				path: 'consultation',
				component: () => import('@/views/consultation.vue'),
				meta: {
					title: '咨询记录',
					icon: 'Message',
				},
			},
			{
				path: 'emotional',
				component: () => import('@/views/emotional.vue'),
				meta: {
					title: '情绪日志',
					icon: 'User',
				},
			},
		],
	},
	{
		path: '/auth',
		component: AuthLayout,
		children: [
			{
				path: 'login',
				component: () => import('@/views/login.vue'),
				meta: {
					title: '登录',
				},
			},
			{
				path: 'register',
				component: () => import('@/views/register.vue'),
				meta: {
					title: '注册',
				},
			},
		],
	},
]
const router = createRouter({
	history: createWebHashHistory(),
	routes: backendRoutes,
})
export default router
