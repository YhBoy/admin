<template>
	<div>
		<el-form ref="form" :model="form" label-width="80px">
			  <el-form-item label="姓名">
			    <el-input v-model="form.name"></el-input>
			  </el-form-item>
			  <el-form-item label="性别">
			    	<el-radio-group v-model="form.sex">
					      <el-radio label="男"></el-radio>
					      <el-radio label="女"></el-radio>
				    </el-radio-group>
			  </el-form-item>
			  <el-form-item label="面貌">
			    <el-select v-model="form.status" placeholder="面貌">
			      <el-option label="团员" value="shanghai"></el-option>
			      <el-option label="群众" value="beijing"></el-option>
			      <el-option label="党员" value="beijing"></el-option>
			    </el-select>
			  </el-form-item>
			  <el-form-item label="入校时间">
			    <el-col :span="11">
			      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
			    </el-col>
			  </el-form-item>
			  <el-form-item label="民族">
			     <el-select v-model="form.family" placeholder="民族">
				      <el-option label="汉族" value="hanzu" ></el-option>
				      <el-option label="傣族" value="daizu" ></el-option>
			    </el-select>
			  </el-form-item>
			  <el-form-item label="学校">
			    	<el-input v-model="form.school"></el-input>
			  </el-form-item>
			  <el-form-item label="家庭住址">
			    <el-input v-model="form.address"></el-input>
			  </el-form-item>
			 <el-form-item label="是否全日制" prop="delivery">
			    <el-switch v-model="form.delivery"></el-switch>
			  </el-form-item>
			  <el-form-item label="手机号">
			    	<el-input v-model="form.phone"></el-input>
			  </el-form-item>
			  <el-form-item>
			    <el-button type="primary" @click="onSubmit">立即创建</el-button>
			    <el-button>取消</el-button>
			  </el-form-item>
			</el-form>
	</div>
</template>

<script>
	export default{
		name: "StudentAdd",
		data(){
			return {
				form: {
		          name: '',
		          sex : {

		          },
		          status: {

		          },
		          date: '',
		          family : '',
		          school: '',
		          address: '',
		          delivery: false,
		          phone: '' 
		        }
			}
		},
		methods: {
	      onSubmit() {
	        this.$store.dispatch('studentAddInfo', this.form)    
	      }
	    }
	}
</script>

<style lang="less" scoped>
	
</style>









