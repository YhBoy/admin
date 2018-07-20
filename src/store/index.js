import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	
	state:{
		login:{
			email:'',
			password:''
		},
		infoList:{
			name:'路飞',
			username:'YH',
			sex:'男',
			email:'351749498@qq.com',
			like:'吃饭睡觉打豆豆'
		},
		studentList:[],
		themeColor:[
			{
				id: 0,
				color: '#324157'
			}
		],
		contentShow: true
	},
	actions: {
		loginInfo(ctx, about) {
			  ctx.commit("loginInfo",about)	
		},
		subInfoList(ctx, about){
			  console.log(about)
			  ctx.commit("subInfoList",about)	
		},
		studentAddInfo(ctx, about){
			  ctx.commit("studentAddInfo",about)	
		}
	},
	mutations : {
		loginInfo(state,about){
			state.login.email = about.email
			state.login.password = about.password	
		},
		subInfoList(state,about){
			state.infoList.name = about.name
			state.infoList.username = about.username
			state.infoList.sex = about.sex
			state.infoList.email = about.email
			state.infoList.like = about.like

		},
		studentAddInfo( state,about ){
			state.studentList.push(about)
		}
	}
})











