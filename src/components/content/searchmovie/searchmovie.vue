<template>
	<div>
		<h2 >注意：此页面使用了豆瓣api，请求方式为jsonp，支持分页功能。</h2>

		<el-form :inline="true" :model="formInline" class="demo-form-inline">
			  <el-form-item >
			    <el-input v-model="formInline.username" placeholder="明星、导演"></el-input>
			  </el-form-item>
			  <el-form-item>
			    <el-input v-model="formInline.type" placeholder="电影类型"></el-input>
			  </el-form-item>
			  <el-form-item>
			    <el-button type="primary" @click="onSubmit">查询</el-button>
			  </el-form-item>
		</el-form>

		<el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" border style="width: 100%" >

			<el-table-column type="selection" width="55"></el-table-column>
			<el-table-column type="index" width="50"></el-table-column>
		    <el-table-column prop="images.large" label="海报" >
		    		<template slot-scope="scope">
						 <img  :src="scope.row.images.medium "alt="" style="width: 50px;height: 50px">
			        </template>
		    </el-table-column>
		    <el-table-column prop="original_title" label="电影" width="200"></el-table-column>
		    <el-table-column prop="casts" label="演员" width="200">
		    	<template slot-scope="scope">
						 <span v-for="item in scope.row.casts">{{item.name}}、</span>
			    </template>
		    </el-table-column>
		    <el-table-column prop="directors" label="导演" width="300">
		    	<template slot-scope="scope">
						 <span v-for="item in scope.row.directors">{{item.name}}、</span>
			    </template>
		    </el-table-column>
		    <el-table-column prop="genres" label="类型" width="120"></el-table-column>
		    <el-table-column prop="rating.average" label="评分" width="120"></el-table-column>
		    <el-table-column prop="collect_count" label="收藏量" width="120"></el-table-column>
		    <!-- <el-table-column fixed="right" label="操作" width="100">
		      <template slot-scope="scope">
		        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
		        <el-button type="text" size="small">编辑</el-button>
		      </template>
		    </el-table-column> -->
	  </el-table>
	  <div class="block">
	    <el-pagination
	      @size-change="handleSizeChange"
	      @current-change="handleCurrentChange"
	      :current-page="currentPage"
	      :page-sizes="[10, 20]"
	      :page-size="pagesize"
	      layout="total, sizes, prev, pager, next, jumper"
	      :total="20">
	    </el-pagination>
	  </div>
	</div>
</template>

<script>
	let axios = require('axios')
	export default{
		name: "SearchMovie",
		mounted(){
			this.movieList()
		},
		data(){
			return{
				tableData: [],
				currentPage:1, 
 				pagesize:20,
 				formInline: {
		          username: '',
		          type: ''
		        }
			}
		},
		methods:{
			movieList(){
				
			},
			handleSizeChange(val) {
			       this.pagesize = val
			},
			handleCurrentChange(val) {
			       this.currentPage = val
			},
			 onSubmit() {
		        let that = this
		        console.log(this.formInline.username , this.formInline.type)

				axios.get("/api/v2/movie/search?q=" + this.formInline.username+ "&tag="+ this.formInline.type)
				  .then(function (response) {
					    that.tableData = response.data.subjects
					    console.log(response)
					   
				  })
				  .catch(function (error) {
				    console.log(error);
				  });
		    }
		}

	}
</script>

<style lang="less" scoped>
	.block{ 
		margin-top: 30px;
	}
</style>



















