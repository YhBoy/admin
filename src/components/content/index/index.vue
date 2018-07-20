<template>
	<div class="content">
		<el-container>
		  	<el-aside :style="widthObject">
		  		<home-slide ></home-slide>
		  	</el-aside>
			  <el-container>
			    <el-header>
			    	<head-top  ></head-top>
			    </el-header>
			    <el-main>
			    	<div class="main">
		    			<router-view></router-view>
			    	</div>
			    </el-main>
			  </el-container>
		</el-container>
	</div>
</template>

<script>

	import HeadTop from "../head/head"
	import HomeSlide from "../slide/slide"

	import StudentInfo from "../studentinfo/studentinfo"
	import HomeTable from "../table/table"
	import HomeSetting from "../setting/setting"
	import HomePerson from "../person/person"
	import HotMovie from "../hotmovie/hotmovie"
	import HomeExplame from "../explame/explame"
	import SearchMovie from "../searchmovie/searchmovie"

	import HomeForm from "../explame/form/form"
	import HomeEdit from "../explame/edit/edit"

	export default{
		name:'HomeIndex',
		data(){
			return{
				widthObject: {
					width: '200px'
				},
				contentShow: true
			}
		},
		methods:{
			
		},
		components: {
			HeadTop,
			HomeSlide,
			SearchMovie,
			HomeExplame,
			HotMovie,
			HomePerson,
			HomeSetting,
			HomeTable,
			StudentInfo,
			HomeForm,
			HomeEdit
		},
		mounted(){
			document.querySelector("body").setAttribute("style","background: #ccc")
			document.querySelector("#app").setAttribute("style","height: 100%")
			
		}
	}
</script>

<style lang="less" scoped>
	.content,.el-container{ height: 100%; }
	
	.el-header{
		background: #eef1f6;

	}
	.main{
		padding-top: 30px; 
	}
	.el-main{ background: #fff;
			  }
</style>








