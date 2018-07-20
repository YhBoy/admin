<template>
	<div class="head">
		<i class="el-icon-menu fz" @click="move"></i>
		<div class="info" @click="toggle">
			<div>
				<p class="name">杨浩</p>
				<img class="avatar" src="../../../assets/avatar.jpeg" alt="">
				<i class="el-icon-caret-bottom fz"></i>
			</div>
			<vertical-toggle>		
				<ul class="info-arr" v-show="headMask">
					<li class="info-list" @click="open4">切换主题</li>
				</ul>
			</vertical-toggle>
		</div>
	</div>
</template>

<script>
	import VerticalToggle from "@/components/common/vertical-toggle.js"
	export default{
		name: "HeadTop",
		components: {
			VerticalToggle
		},
		
		data(){
			return{
				headMask: false
			}
		},
		methods: {
			move(){
				
				
				
			},
			toggle(){
				this.headMask = !this.headMask;
			},
			
			open4() {
				const h = this.$createElement;
				this.$msgbox({
				title: '消息',
				message: h('p', null, [
					h('span', null, '内容可以是 '),
					h('i', { style: 'color: teal' }, 'VNode')
				]),
				showCancelButton: true,
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				beforeClose: (action, instance, done) => {
					if (action === 'confirm') {
					instance.confirmButtonLoading = true;
					instance.confirmButtonText = '执行中...';
					setTimeout(() => {
						done();
						setTimeout(() => {
						instance.confirmButtonLoading = false;
						}, 300);
					}, 3000);
					} else {
					done();
					}
				}
				}).then(action => {
				this.$message({
					type: 'info',
					message: 'action: ' + action
				});
				});
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


	.fz{ font-size: 30px;
		 line-height: 60px; 
		 float: left;}
	.info{
		float: right;
		cursor: pointer;
		position: relative;
	}
	.name{ float: left; 
			line-height: 60px;}
	.avatar{ float: left; 
			 width: 46px;
			 height: 46px;
			 border-radius: 50%;
			 
			 margin: 0 3px;
			 margin-top: 7px;}
	.triangle{ float: left; }
	.info-arr{ position: absolute;
			   width: 100px;
			   left: 5px;
			   
			   top: 60px;
			   border-radius: 3px;
			   background: #eef1f6; 
			   text-align: center;
			   .info-list{
			   		height: 40px;
			   		line-height: 40px;
			   }
			   .info-list:hover{
			   		background: #ccc;
			   }	
	}
</style>











