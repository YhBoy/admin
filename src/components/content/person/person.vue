<template>
	<div>
		<el-row :gutter="30" >
		  <el-col :span="10">
		  	<div class="grid-content ">
		  		<h2 class="avatar-title">我的头像</h2>
		  		<img class="avatar" src="../../../assets/avatar.jpeg" alt="">	
		  	</div>
		  </el-col>
		   <el-col :span="10" >
		  	<div class="grid-content ">
		  		<div class="head-edit">
		  			<span>个人信息</span>
		  			<el-button type="primary" style="float:right;" icon="el-icon-edit" v-if="isEdit" @click="edit">编辑</el-button>
		  		</div>
		  		<div class="info">

		  			<el-form label-position="right" label-width="100px" v-if="!isEdit">
                          <el-form-item label="昵称">
                            <el-input v-model="infoList.name"></el-input>
                          </el-form-item>
                          <el-form-item label="真实姓名">
                            <el-input v-model="infoList.username"></el-input>
                          </el-form-item>


						  <el-form-item label="性别">
                                    <el-radio-group v-model="infoList.sex">
                                          <el-radio label="0">男</el-radio>
                                          <el-radio label="1">女</el-radio>
                                    </el-radio-group>
                           </el-form-item>


                          <el-form-item label="邮件地址" >
                            <el-input v-model="infoList.email" disabled=""></el-input>
                          </el-form-item>
                          <el-form-item label="个人简介">
                            <el-input type="textarea" v-model="infoList.like"></el-input>
                          </el-form-item>
						  
	                          <el-form-item>
	                             <el-button type="primary" @click="cancel(1)">提交</el-button>
	                             <el-button @click="cancel(-1)">取消</el-button>
	                    	</el-form-item>
                    </el-form>

                    <el-form label-position="right" label-width="100px" v-else>
                          <el-form-item label="昵称">
                            	{{this.$store.state.infoList.name }}
                          </el-form-item>
                          <el-form-item label="真实姓名">
                            {{this.$store.state.infoList.username }}
                          </el-form-item>
                          <el-form-item label="性别">
                               <span v-if="infoList.sex == '0'">男</span>
                               <span v-else>女</span>
                          </el-form-item>
                          <el-form-item label="邮件地址" >
                            {{this.$store.state.infoList.email }}
                          </el-form-item>
                          <el-form-item label="个人简介">
                            {{this.$store.state.infoList.like}}
                          </el-form-item>

                    </el-form>


		  		</div>
		  	</div>
		  </el-col>
		</el-row>
		<el-row :gutter="30">
		  <el-col :span="10">
			  <div class="grid-content" id="myChart"></div>
		  </el-col>
		  <el-col :span="10">
		  	  <div class="grid-content " id="myChart1"></div>
		  </el-col>
		</el-row>

	</div>
</template>

<script>
	let echarts = require('echarts/lib/echarts')
	require('echarts/lib/chart/bar');
	require('echarts/lib/component/tooltip');
	require('echarts/lib/component/title');
	export default{
		name: "HomePerson",
		mounted(){
			this.drawLine()
			this.drawPic()
		},
		data(){
			return{
				isEdit: true,
				list:'assadsad',
				infoList:
					{
						name:'',
						username:'',
						sex: 0,
						email:'',
						like:''
					}
				
			}
		},
		methods: {
			edit(){
				this.infoList.name = this.$store.state.infoList.name 
				this.infoList.username = this.$store.state.infoList.username 
				this.infoList.sex = this.$store.state.infoList.sex 
				this.infoList.email = this.$store.state.infoList.email 
				this.infoList.like = this.$store.state.infoList.like 

				
				
				this.isEdit = !this.isEdit
			},
			cancel(index){
					if( index > 0 ){
						
						this.$store.dispatch('subInfoList', this.infoList)   
						this.isEdit = true
					}else{
						this.$store.state.infoList.sex 	= this.infoList.sex
						this.isEdit = true
					}
			},
			drawLine(){
		        let myChart = this.$echarts.init(document.getElementById('myChart'))
			        myChart.setOption({
			            title: { text: '在Vue中使用echarts' },
			            tooltip: {},
			            xAxis: {
			                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
			            },
			            yAxis: {},
			            series: [{
			                name: '销量',
			                type: 'bar',
			                data: [5, 20, 36, 10, 10, 20]
			            }]
			    });
   			},
   			drawPic(){
   				echarts.init(document.getElementById('myChart1')).setOption({
				    title: {text: 'Line Chart'},
				    tooltip: {},
				    toolbox: {
				        feature: {
				            dataView: {},
				            saveAsImage: {
				                pixelRatio: 2
				            },
				            restore: {}
				        }
				    },
				    xAxis: {},
				    yAxis: {},
				    series: [{
				        type: 'line',
				        smooth: true,
				        data: [[12, 5], [24, 20], [36, 36], [48, 10], [60, 10], [72, 20]]
				    }]
				});
   				
   				
				
   			}

		}
	}
</script>

<style lang="less" scoped>
	.el-form-item{ margin-bottom: 0px;
				   margin-top: 10px; }
	.el-input{ width: 50%; }
	.mt{ margin-top: 20px; }
	.el-textarea{ width: 50%; }
	.avatar-title{ height: 40px;
					line-height: 40px;
					padding: 5px 10px;
				border-bottom: 1px solid #ccc;}
	.grid-content{
		border: 1px solid #ccc;
		height: 400px;
		margin-bottom: 30px;
	}
	.avatar{
		width: 150px;
		height: 150px;
		border-radius: 50%;
		margin: 0 auto;
		display: block;
		margin-top: 50px;
	}
	.head-edit{
		padding: 5px 10px;
		border-bottom: 1px solid #ccc;
		height: 40px;
		line-height: 40px;
	}
	.head-list{
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-left: 30px;
		

	}
	.head-list li{
		height: 30px;
		line-height: 30px;
		margin-top: 5px;
	}
	.head-list li input{
		border: 1px solid #ccc;
		height: 30px;
		line-height: 30px;
		text-indent: 5px;
		border-radius: 5px;
	}
</style>









