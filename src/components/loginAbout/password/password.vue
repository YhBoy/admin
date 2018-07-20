<template>
<el-container>
  <el-main >
	<el-row  class="mt">
 	  	<el-col  :span="6" :offset="9">
	  		<div class="login">
	  			<h2 class="title"><router-link tag="i" to="/" class="el-icon-yh-fanhui back"></router-link>找回密码</h2>
	  			<el-form :model="dynamicValidateForm" ref="dynamicValidateForm"  class="demo-dynamic">
	  				<div class="wrap">
					  <el-form-item
					    prop="email"
					    :rules="[
					      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
					      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
					    ]"
					  >
				    <el-input v-model="dynamicValidateForm.email" placeholder="请输入邮箱"></el-input>
				  </el-form-item>
				  </div>  
					<div class="wrap">
			  				<el-button class="text-pad" type="primary">发送验证码去邮箱</el-button>
			  		</div>
			  		<div class="wrap">
			  				<el-button class="text-pad" type="primary" plain>已收到验证码,去重置密码</el-button>
			  		</div>  
				  
				</el-form>
	  		</div>
    	</el-col>
	</el-row>	 
  </el-main>
</el-container>
</template>

<script>
	export default{
		name: "HomePassword",
		mounted(){
			document.querySelector("body").setAttribute("style","background: #000")
		},
		beforeDestroy(){
			document.querySelector("body").removeAttribute("style")
		},
		 data() {
	      return {
	        dynamicValidateForm: {
	          domains: [{
	            value: ''
	          }],
	          email: ''
	        }
	      };
	    }
	    
	}
</script>

<style lang="less" scoped>
	.login{
		margin-top: 100px;
		background: #fff;
		width: 320px;
		padding-bottom: 20px;
	}
	.mt{ margin-top:20px; }
	.title{
		font-size:24px;
		text-align:center;
		padding: 10px 0;
		position: relative;
		.back{
			position: absolute;
			left: 15px;
			top: 50%;
			margin-top: -8px;
			cursor: pointer;

		}
	}  
	.wrap{
		width: 90%;
		margin: 0 auto;
		margin-top: 15px;
		.fontz{
			font-size: 20px;
		}
		.sub-btn{ 
			width: 100%;
			
		}
		.text-pad{
			width: 100%;
		}
		.reg{ padding-top:5px;
			  text-align: center;
			  font-size: 12px;
			  color: #409EFF; }
	}
	
</style>


