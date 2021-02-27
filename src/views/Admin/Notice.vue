<template>
	<div>
		<br><br>
  <el-table
    :data="nowdatalist"
    border
    style="width: 100%">
	<el-table-column
	  prop="cover"
	  label="图片"
	  >
	  <template slot-scope="scope">
	  	<img :src="scope.row.cover" alt="" class="" style="width: 100%;">
	  </template>
	</el-table-column>
    <el-table-column
      prop="send_date"
      label="日期"
      >
    </el-table-column>
    <el-table-column
      prop="title"
      label="公告"
      >
    </el-table-column>
    <el-table-column
      prop="abstract"
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
	export default{
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
			url: '/forum/lua/wegame_feeds_article/get_version_article_list?p=%7B%22offset%22%3A0%2C%22count%22%3A10%2C%22client_type%22%3A1%2C%22uid%22%3A0%7D',
		}).then(res => {
			console.log(res.data.data.article_list)
			this.datalist = res.data.data.article_list
		})
	},
	}
</script>

<style>
</style>
