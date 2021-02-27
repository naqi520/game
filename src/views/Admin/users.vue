<template>
	<div>
		<br><br>
		<el-table :data="nowTableData" border style="width: 100%">
			<el-table-column prop="userHead" label="用户头像" >
				<template slot-scope="scope">
					<img :src="scope.row.userHead" alt="" class="img-circle userHead">
			    </template>
			</el-table-column>
			<el-table-column prop="date" label="注册日期" >
			</el-table-column>
			<el-table-column prop="username" label="用户姓名" >
			</el-table-column>
			<el-table-column prop="email" label="用户邮箱">
			</el-table-column>

			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button @click="handleClick(scope.$index,scope.row)">{{scope.row.isFreeze ? '已冻结' : '未冻结'}} </el-button>
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
				url: '/api2/admin/usersList'

			}).then((res) => {
				console.log(res)
				var status = res.data.status
				if (status == 0) {
					this.tableData = res.data.data.usersList
				}
			})

		},
		methods: {
			handleClick(index, row) {
				console.log(row.isFreeze)
				var data = {
					"email": row.email,
					"isFreeze": !row.isFreeze,
				}
				axios({
					method: "post",
					url: '/api2/admin/updateFreeze',
					data

				}).then((res) => {
					console.log(res)
					var status = res.data.status
					if (status == 0) {
						this.$alert('冻结操作成功', '信息', {
							confirmButtonText: '确定',
							callback: action => {
								this.tableData[index].isFreeze = !row.isFreeze;
							}
						});
					} else {
						this.$alert('冻结操作失败', '信息', {
							confirmButtonText: '确定',
						});
					}
				})
			},
			deleteClick(index,row){
				var data = {
					"username":row.username,
					"email": row.email
				}
				axios({
					method: "post",
					url: '/api2/admin/deleteUser',
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
	.page{
		margin-top: 20px;
	}
	.userHead{
		width: 50px;
		height: 50px;
		overflow: hidden;
	}
</style>
