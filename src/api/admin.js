import service from '@/utils/request'
// 登录接口
export function login(data) {
	return service.post('/user/login', data)
}
//获取分类option接口
export function categoryTree() {
	return service.get('/knowledge/category/tree')
}
GET
// 获取知识文章列表接口
export function articlePage(params) {
	return service.get('/knowledge/article/page', { params })
}
