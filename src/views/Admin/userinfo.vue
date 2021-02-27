<template>
	<div>
		<br><br>
		<el-table :data="nowTableData" border style="width: 100%">
			<el-table-column prop="Img" label="封面" >
				<template slot-scope="scope">
					<img :src="scope.row.Img" alt="" style="width: 100%;">
			    </template>
			</el-table-column>
			<el-table-column prop="date" label="生日" >
			</el-table-column>
			<el-table-column prop="username" label="用户名" >
			</el-table-column>
			<el-table-column prop="age" label="年龄">
			</el-table-column>
	<el-table-column prop="sex" label="性别">
	</el-table-column>
	<el-table-column prop="zodiac" label="生肖">
	</el-table-column>
	<el-table-column prop="profile" label="个性签名">
	</el-table-column>
	<el-table-column prop="address" label="地址">
	</el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button type="danger" size="small" @click="deleteClick(scope.$index,scope.row)">移除 </el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination
		  background
		  layout="prev, pager, next"
		   :page-size="pageSize"
		   :current-page.sync="currentPage"
		  :total="tableData.length" class="page">
		</el-pagination>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name: 'users',
		data() {
			return {
				tableData: [],
				currentPage:1,
				pageSize:5
			}
		},
		computed:{
			nowTableData(){
				return this.tableData.slice((this.currentPage -1)*this.pageSize ,this.currentPage*this.pageSize) || [];
			}
		},
		mounted() {
			axios({
				url: '/api2/admin/userinfoList'
	
			}).then((res) => {
				console.log(res)
				var status = res.data.status
				if (status == 0) {
					this.tableData = res.data.data.userinfoList
				}
			})
	
		},
		methods: {
			deleteClick(index,row){
				var data = {
					"username":row.username,
					"email": row.email
				}
				axios({
					method: "post",
					url: '/api2/admin/deleteUserinfo',
					data
				
				}).then((res) => {
					console.log(row.email)
					console.log(res)
					var status = res.data.status
					if (status == 0) {
						this.$alert('删除操作成功', '信息', {
							confirmButtonText: '确定',
							callback: action => {
								this.tableData.splice(index,1);
							}
						});
					} else {
						this.$alert('删除操作失败', '信息', {
							confirmButtonText: '确定',
						});
					}
				})
			}
		
		}
	}
</script>

<style>
</style>
