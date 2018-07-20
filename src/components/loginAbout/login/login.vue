<template>
<el-container>
  <el-main >
  		 <el-row  class="mt">
		 	  	<el-col  :span="6" :offset="9">
		  		<div class="login">
		  			<h2 class="title">后台登陆</h2>
					<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" class="demo-ruleForm">

						<div class="wrap">
							<el-form-item prop="email"  :rules="[
							      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
							      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
							    ]">
							    <el-input v-model="ruleForm2.email" placeholder="请输入邮箱" prefix-icon="el-icon-yh-denglu fontz" ></el-input>
							</el-form-item>
						</div>  

						<div class="wrap">  
							<el-form-item  prop="password">
						    	<el-input type="password" v-model="ruleForm2.password" auto-complete="off" prefix-icon="el-icon-yh-mima" placeholder="请输入密码"></el-input>
						    </el-form-item>
						</div> 
						<div class="wrap">
		  					 <el-button  type="primary" @click="submitForm('ruleForm2')" class="sub-btn" >登陆</el-button>
		  				</div>
		  				<div class="wrap">
		  					 <p>账户 1@qq.com 密码123456</p>
		  				</div>
						<div class="wrap clearfix">
		  					<router-link tag="span" to="/password" class="pas">忘记密码</router-link>
		  					<router-link tag="em" to="/reg" class="reg">去注册</router-link>
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

		name: "HomeLogin",
		mounted(){
			document.querySelector("body").setAttribute("style","background: #000")
		},
		beforeDestroy(){
			document.querySelector("body").removeAttribute("style")
		},
		
		data() {

	      var validatePass = (rule, value, callback) => {
	        if (!value) {
	          return callback(new Error('邮箱不能为空'));
	        }
	        callback();
	      };
	     
	      var validatePass2 = (rule, value, callback) => {
	        if (value === '') {
	          callback(new Error('密码不能为空'));
	        } else if ( value.length < 6 ){
	          callback(new Error('密码最少6位!'));
	        }else {
	        	callback();
	        }
	      };
	      return {
	        ruleForm2: {
	          email: '',
	          password: ''
	        },
	        rules2: {
	          email: [
	            { validator: validatePass, trigger: 'blur' }
	          ],
	          password: [
	            { validator: validatePass2, trigger: 'blur' }
	          ]
	        }
	      };
	    },
	    methods: {
	      submitForm(formName) {
	        this.$refs[formName].validate((valid) => {
	        		this.$store.dispatch('loginInfo', this.ruleForm2)       
	          		let useremail = localStorage.setItem("useremail",this.ruleForm2.email)
				  	this.$router.push({ path: '/index/person' }); 
	        });
	      },
	      resetForm(formName) {
	        this.$refs[formName].resetFields();
	      }
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
		.pas{ 
			  padding-top:5px;
			  text-align: center;
			  font-size: 12px;
			  color: #409EFF;
			  cursor: pointer;
			  float: left;
		 }
		.reg{ padding-top:5px;
			  text-align: center;
			  font-size: 12px;
			  color: #409EFF;
			  cursor: pointer;
			  float: right; }
	}
	
</style>


