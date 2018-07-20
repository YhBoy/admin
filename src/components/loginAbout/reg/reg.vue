<template>
	<el-container>
		  <el-main >
		  		 <el-row  class="mt">
	  		 	  	<el-col  :span="6" :offset="9">
				  		<div class="login">
				  			<h2 class="title"><router-link tag="i" to="/" class="el-icon-yh-fanhui back"></router-link>后台注册</h2>

							<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" class="demo-ruleForm">
								 <div class="wrap">
									  <el-form-item prop="username">
									    <el-input type="password" v-model="ruleForm2.username" prefix-icon="el-icon-yh-denglu" placeholder="请输入账户" auto-complete="off"></el-input>
									  </el-form-item>
								 </div>
								 <div class="wrap">
									  <el-form-item  prop="password">
									    <el-input type="text" v-model="ruleForm2.password" placeholder="请输入密码"  prefix-icon="el-icon-yh-mima" auto-complete="off"></el-input>
									  </el-form-item>
								 </div>
								 <div class="wrap">
									  <el-form-item  prop="checkPass">
									    <el-input type="password" v-model="ruleForm2.checkPass" placeholder="请再次输出密码" prefix-icon="el-icon-yh-mima" auto-complete="off"></el-input>
									  </el-form-item>
							 	 </div>
							  	 <div class="wrap">
				  					 <el-button  type="primary" class="sub-btn" @click='reg'>注册</el-button>
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
		name: "HomeReg",
		mounted(){
			document.querySelector("body").setAttribute("style","background: #000")
		},
		beforeDestroy(){
			document.querySelector("body").removeAttribute("style")
		},
		data() {
     	   var checkName = (rule, value, callback) => {
	        if (!value) {
	          return callback(new Error('账号不能为空'));
	        }else if( value.length < 6){
	        	return callback(new Error('长度必须大于6'));	
	        }
	        
	      };

	      var validatePass = (rule, value, callback) => {
	        if (value === '') {
	          callback(new Error('请再次输入密码'));
	        } else if (value !== this.ruleForm2.password) {
	          callback(new Error('两次输入密码不一致!'));
	        } else if( value.length < 6 ){
	          callback(new Error('密码最少6位!'));
	        }else{
	        	callback();
	        }
	      };
	       var validatePass2 = (rule, value, callback) => {
	        if (value === '') {
	          callback(new Error('请输入密码'));
	        } else {
	          if (this.ruleForm2.checkPass !== '') {
	            this.$refs.ruleForm2.validateField('checkPass');
	          }
	          callback();
	        }
	      };	

	      return {
	        ruleForm2: {
	          username: '',
	          password: '',
	          checkPass: ''
	        },
	        rules2: {
	          username: [
	            { validator: checkName, trigger: 'blur' }
	          ],
	          password: [
	            { validator: validatePass, trigger: 'blur' }
	          ],
	          checkPass: [
	            { validator: validatePass2, trigger: 'blur' }
	          ]
	        }
	      };
	    },
	    methods: {
	      submitForm(formName) {
	        this.$refs[formName].validate((valid) => {
	          if (valid) {
	            alert('submit!');
	          } else {
	            console.log('error submit!!');
	            return false;
	          }
	        });
	      },
	      resetForm(formName) {
	        this.$refs[formName].resetFields();
	      },
	      reg(){
	      		this.$store.dispatch('regInfo',this.ruleForm2)
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
		.reg{ padding-top:5px;
			  text-align: center;
			  font-size: 12px;
			  color: #409EFF; }
	}
	
</style>


