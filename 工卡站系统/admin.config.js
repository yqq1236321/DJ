export default {
	login: {
		url: '/pages/login/login' // 登录页面路径
	},
	index: {
		url: '/pages/table/table' // 登录后跳转的第一个页面
	},
	error: {
		url: '/pages/error/404' // 404 Not Found 错误页面路径
	},
   sideBar:{ // 左侧菜单
			// 配置静态菜单列表（放置在用户被授权的菜单列表下边）
			staticMenu: [{
				menu_id: "demo",
				name: '工卡领用系统',
				icon: 'uni-icons-list',
				url: "",
				children: [{
					menu_id: "icons",
					name: '概览',
					icon: 'uni-icons-star',
					url: '/pages/demo/icons/icons',
				}, {
					menu_id: "table",
					name: '领出',
					icon: 'uni-icons-map',
					url: '/pages/demo/table/table',
				},{
					menu_id: "table",
					name: '中断',
					icon: 'uni-icons-map',
					url: '/pages/demo/table/table',
				},{
					menu_id: "table",
					name: '完工',
					icon: 'uni-icons-map',
					url: '/pages/demo/table/table',
				}]
			}]
		}

}