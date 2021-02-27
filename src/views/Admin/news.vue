<template>
	<div>
		<br><br>
  <el-table
    :data="nowdatalist"
    border
    style="width: 100%">
	<el-table-column
	  prop="link"
	  label="图片"
	  
	  >
	  <template slot-scope="scope">
	  	<img :src="scope.row.link" alt="" class="" style="width: 100%;">
	  </template>
	</el-table-column>
    <el-table-column
      prop="publishedAt"
      label="日期"
      >
    </el-table-column>
    <el-table-column
      prop="subject"
      label="姓名"
      >
    </el-table-column>
    <el-table-column
      prop="preview"
      label="消息"
      >
    </el-table-column>
  </el-table>
  <el-pagination
    background
    layout="prev, pager, next"
     :page-size="pageSize"
     :current-page.sync="currentPage"
    :total="datalist.length" class="page">
  </el-pagination>
  </div>
</template>

<script>
	import axios from 'axios'
	export default {
	data(){
		return{
			datalist:[],
			currentPage:1,
			pageSize:4
		}
	},
	computed:{
		nowdatalist(){
			return this.datalist.slice((this.currentPage -1)*this.pageSize ,this.currentPage*this.pageSize) || [];
		}
	},
		mounted() {
			axios({
				url: '/api/news?showPage=list&page=1',
			}).then(res => {
				console.log(res.data)
				this.datalist = res.data.content
			})
		},
	}
</script>

<style>
	.el-table-column img{
		width: 100%;
		height: 200px;
	}
</style>
