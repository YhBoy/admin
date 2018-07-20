<template>
	<div>
		<el-form :inline="true" :model="formInline" class="demo-form-inline">
			  <el-form-item label="审批人">
			    <el-input v-model="formInline.user" placeholder="审批人"></el-input>
			  </el-form-item>
			  <el-form-item label="活动区域">
			    <el-select v-model="formInline.region" placeholder="活动区域">
			      <el-option label="区域一" value="shanghai"></el-option>
			      <el-option label="区域二" value="beijing"></el-option>
			    </el-select>
			  </el-form-item>
			  <el-form-item>
			    <el-button type="primary" @click="onSubmit">查询</el-button>
			  </el-form-item>
		</el-form>
		<el-table ref="multipleTable" :data="this.$store.state.studentList" tooltip-effect="dark" style="width: 100%" >
		    <el-table-column type="selection"  width="55"> </el-table-column>
		    <el-table-column prop="status" label="面貌" width="120">
		    	 <template slot-scope="scope">
		    	 	 <span>{{scope.row.status.sta}}</span>
		    	 </template>
		    </el-table-column>
		    <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
		    <el-table-column prop="sex" label="性别" width="120"> </el-table-column>
		    <el-table-column prop="family" label="民族" width="120"> </el-table-column>
		    <el-table-column prop="school" label="学校" width="120"> </el-table-column>
		    <el-table-column prop="date" label="入学时间" width="120"> </el-table-column>
		    <el-table-column prop="address" label="家庭住址" width="300"> </el-table-column>
		    <el-table-column prop="delivery" label="是否全日制" width="120"> </el-table-column>
		    <el-table-column prop="phone" label="手机号" > </el-table-column>
		    <el-table-column prop="phone" label="操作" >
		    	<template slot-scope="scope">
			        <el-button size="small" >编辑</el-button>
			        <el-button size="small" @click.native.prevent="deleteRow(scope.$index, sutdentList)">删除</el-button>
		        </template>
		    </el-table-column>
		   
		  </el-table>
		
			<div>{{this.$store.state.studentList}}</div>
			

	</div>
</template>

<script>
	export default{
		name: "StudentList",
		data(){
			return {
				formInline: {
		          user: '',
		          region: ''
		        },
		        sutdentList:[]
			}
		},
		methods: {
	      onSubmit() {
	        console.log('submit!');
	      },
	      deleteRow(index, rows) {
	        rows.splice(index, 1);
	      }
	    }
	}
</script>

<style lang="less" scoped>
	
</style>









