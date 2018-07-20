// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import echarts from 'echarts'
import VueRouter from 'vue-router'

import store from './store'
import './assets/style/reset.css'
import './assets/style/iconfont.css'

import HomeLogin from '@/components/loginAbout/login/login'
import HomeReg from '@/components/loginAbout/reg/reg' 
import HomePassword from '@/components/loginAbout/password/password'
import HomeIndex from '@/components/content/index/index'

import HotMovie from "@/components/content/hotmovie/hotmovie"
import SearchMovie from "@/components/content/searchmovie/searchmovie"
import HomeTable from "@/components/content/table/table"
import HomeExplame from "@/components/content/explame/explame"
import HomeSetting from "@/components/content/setting/setting"
import StudentInfo from "@/components/content/studentinfo/studentinfo"
import HomePerson from "@/components/content/person/person"

import HomeForm from "@/components/content/explame/form/form"
import HomeEdit from "@/components/content/explame/edit/edit"

import StudentAdd from "@/components/content/studentinfo/studentadd/studentadd"
import StudentList from "@/components/content/studentinfo/studentlist/studentlist"

import LoginInfo from "@/components/content/setting/logininfo/logininfo"
import HomePermission from "@/components/content/setting/permission/permission"


Vue.use(VueRouter)
Vue.use(Element)
Vue.prototype.$ajax = axios
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

let router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: HomeLogin,
			redirect: '/login'
		},
		{
			path: '/login',
			component: HomeLogin
		},
		{
			path: '/reg',
			component: HomeReg
		},
		{
			path: '/password',
			component: HomePassword
		},
		{
			path: '/index',
			component: HomeIndex,
			redirect: '/person',
			children: [
		        
		        	{ 	path: 'person', 
		        		component: HomePerson
		        	},
		        	{ 	path: 'hot-movie', 
		        		component: HotMovie
		        	},
		        	{ 	path: 'search-movie', 
		        		component: SearchMovie
		        	},
		        	{ 	path: 'table', 
		        		component: HomeTable
		        	},
		        	{ 	path: 'explame', 
		        		component: HomeExplame,
		        		redirect:'explame/form',
		        		children:[
		        			{
		        				path:'form',
		        				component: HomeForm
		        			},
		        			{
		        				path:'edit',
		        				component: HomeEdit
		        			}
		        		]

		        	},
		        	{ 	path: 'setting', 
		        		component: HomeSetting,
		        		redirect:'setting/logininfo',
		        		children:[
		        			{
		        				path:'logininfo',
		        				component: LoginInfo
		        			},
		        			{
		        				path:'permission',
		        				component: HomePermission
		        			}
		        		]
		        	},
		        	{ 	path: 'studentinfo', 
		        		component: StudentInfo,
		        		redirect:'studentinfo/studentadd',
		        		children:[
		        			{
		        				path:'studentadd',
		        				component: StudentAdd
		        			},
		        			{
		        				path:'studentlist',
		        				component: StudentList
		        			}
		        		]
		        	}

		       
		      ]
		}

	]
})

router.beforeEach((to, from, next) => {
	let useremail = localStorage.getItem('useremail')
	
	

 	next()
})
router.afterEach((to, from) => {
 	
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
