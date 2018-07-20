<template>
<div class="slide">
	<transition-group>
		<div v-for="(item,index) in list" class="slide-wrap"  :key="index">
			<router-link class="title" tag="div"  :to="{ path: item.path }" >
				<i :class="icons[index]" class="icons"></i>
				<span @click="showList(item)" class="sub-title" v-show="this.$store.state.contentShow">{{item.title}}</span>
				<i class="icon-ml el-icon-arrow-right" v-if="item.children" v-show="contentShow" :class="!item.isShow?'rightTir90':'rightTir0' "></i>
			</router-link >
			
			<vertical-toggle>
				<div v-if="item.children" v-show="item.isShow" @click.stop="showList1(item)"  class="item-children" >
					<router-link class="title1" tag="div" :to="{path: items.path}" v-for="(items,index) in item.children" :key="index">{{items.title}}</router-link>
				</div>
			</vertical-toggle>	
		</div>
	</transition-group>
</div>
</template>

<script>

	import VerticalToggle from "@/components/common/vertical-toggle.js"
	export default{
		name:'HomeSlide',
		components:{
			VerticalToggle
		},
		props:{
			contentShow:{
				type: Boolean,
				default: true
			}
		},
		data(){
			return {
				
				list:[
					{
						id:0,
						title:"首页",
						rightTir: true,
						anmat: true ,
						path: '/index/person'
					},
					{
						id:1,
						title:"热映电影 ",
						rightTir: true,
						anmat: true ,
						path: '/index/hot-movie'
					},
					{
						id:2,
						title:"电影搜索 ",
						rightTir: true,
						anmat: true ,
						path: '/index/search-movie'
					},
					{
						id:3,
						title:"示例表格 ",
						rightTir: true,
						anmat: true ,
						path: '/index/table'
					},
					{
						id:4,
						title:"综合实例 ",
						isShow: false,
						rightTir: true,
						anmat: true ,
						path: '/index/explame/form',
						children:[
							{
								id: 0,
								title: "form表单编辑",
								path: '/index/explame/form'
							},
							{
								id: 1,
								title: "富文本编辑",
								path: '/index/explame/edit'
							}
						]
					},
					{
						id:5,
						title:"系统设置 ",
						isShow: false,
						rightTir: true,
						anmat: true ,
						path:'/index/setting/permission',
						children: [
							{
								id:0,
								title: "权限管理",
								path: '/index/setting/permission'
							},
							{
								id:1,
								title: "登录日志 ",
								path: '/index/setting/logininfo'
							}
						]
					},
					{
						id:6,
						title:"学生信息管理",
						isShow: false,
						rightTir: true,
						anmat: true ,
						path:'/index/studentinfo/studentlist',
						children:[
							{
								id:0,
								title:"学生信息管理",
								path: '/index/studentinfo/studentlist'
							},
							{	
								id:1,
								title:"学生信息添加",
								path: '/index/studentinfo/studentadd'
							}
						]
					}
				],
				icons: [
					"el-icon-yh-shouye",
					"el-icon-yh-74",
					"el-icon-yh-74",
					"el-icon-yh-biaoge",
					"el-icon-yh-zonghe",
					"el-icon-yh-shezhi",
					"el-icon-yh-shezhi"
				]
			}
		},
		methods: {
			showList(item){
				if( item.children ){
					
					item.isShow = !item.isShow
				}	
				
			},
			showList1(){
				
			}
		}
		
	}
</script>

<style lang="less" scoped>
	.move-enter{
		transition: 0.5s;
		width: 200px;
	}
	.move-enter-active{
		transition: 0.5s;
		width: 50px;
	}
	.move-leave{
		transition: 0.5s;
		width: 50px;
	}
	.movue-leave-active{
		transition: 0.5s;
		width: 200px;
	}



	.item-children{
		background: #6A5ACD;
		overflow:hidden;
	}
	.sub-title{ 
		 width: 100%;
		 display: block;
		 height: 56px;
		 line-height: 56px;
		 text-indent: 50px;
	}
	
	.height0{
		height: 0 !important;
	}

	.rightTir0{
		transform:rotate(90deg);
		transition: 0.5s;
	}

	.rightTir90{
		transform:rotate(0deg);
		transition: 0.5s;
	}
	.icon-ml{ position: absolute;
			  right: 10px; 
			  line-height: 56px;
			  top: 0;}
	.slide{
		background: #324157;
		height: 100%;
		.slide-wrap{
			padding-top: 10px;
			.title{ color: #fff;
					line-height: 56px;
					height: 56px; 
					cursor: pointer;
					position: relative;}
			.title:hover{
				background: rgb(72,87,105);
			}
			.icons{ font-size: 20px;
					
					line-height: 56px; 
					position: absolute;
					left: 20px;
					}
			.title1:hover{ background: rgb(72,87,105);  }
			.title1{  color: #fff;
					  line-height: 56px;
					  height: 56px;
					  text-indent: 50px;
					  cursor: pointer; }
		}
	}
</style>








