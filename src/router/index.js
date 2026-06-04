import BackendLayout from '@/components/BackendLayout.vue'
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
]
const router = createRouter({
	history: createWebHashHistory(),
	routes: backendRoutes,
})
export default router
