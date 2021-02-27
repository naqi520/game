<template>
	<div>
	<el-container>
	  <el-header><div class="container-fluid">
	  NGAME后台管理 欢迎： {{$store.state.name}}
	  <el-button type="primary" id="btnreturn" @click="btnout">退出</el-button>
	  <el-button type="primary" id="btnreturn" @click="btnreturn()">返回</el-button>
	  </div>
	 
	  </el-header>
	  <el-container>
	    <el-aside width="150px">
			<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
			  <el-radio-button :label="false">展开</el-radio-button>
			  <el-radio-button :label="true">收起</el-radio-button>
			</el-radio-group>
		<el-menu
		default-active="1-4-1"
		      text-color="black"
			   :collapse="isCollapse"
		      active-text-color="#ffd04b">
		      <el-menu-item index="1">
		       <router-link to="/admin/users" tag="i"> <i class="el-icon-user-solid"></i></router-link>
		        <router-link to="/admin/users"  tag="span">用户管理</router-link>
		      </el-menu-item>
		      <el-menu-item index="2">
		       		        <router-link to="/admin/news"  tag="i"> <i class="el-icon-document"></i></router-link>
		        <router-link to="/admin/news"  tag="span">资讯管理</router-link>
		      </el-menu-item>
		      <el-menu-item index="3">
		         <router-link to="/admin/notice"  tag="i"> <i class="el-icon-s-tools"></i></router-link>
		        <router-link to="/admin/notice"  tag="span">更新管理</router-link>
		      </el-menu-item>
			  <el-menu-item index="4">
			     <router-link to="/admin/game"  tag="i"> <i class="el-icon-open"></i></router-link>
			    <router-link to="/admin/game"  tag="span">游戏管理</router-link>
			  </el-menu-item>
			  <el-menu-item index="5">
			     <router-link to="/admin/feedback"  tag="i"> <i class="el-icon-s-comment"></i></router-link>
			    <router-link to="/admin/feedback"  tag="span">反馈消息</router-link>
			  </el-menu-item>
			  <el-menu-item index="6">
			     <router-link to="/admin/userinfo"  tag="i"> <i class="el-icon-s-comment"></i></router-link>
			    <router-link to="/admin/userinfo"  tag="span">用户信息</router-link>
			  </el-menu-item>
		    </el-menu>
		</el-aside>
	    <el-main>
			<router-view></router-view>
		</el-main>
		
	  </el-container>
	</el-container>
	
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		name:'admin',
		data(){
			return{
				 isCollapse: true
			}
		},
		methods:{
			btnout(){
				axios({
					url: '/api2/users/logout',
				}).then((res) => {
					console.log(res)
					var status = res.data.status
					var timer = 0;
					if (status == 0) {
						this.$alert('退出成功', '退出', {
							confirmButtonText: '确定',
							callback: action => {
								this.$message({
									type: 'info',
									message: res.data.msg
								});
							}
						});
						localStorage.removeItem('name');
						localStorage.removeItem('userHead');
						localStorage.removeItem('isAdmin');
						this.$store.commit('USER_NAME', {
							name: '',
							isAdmin: false,
							userHead: ''
						});
						this.timer = setInterval(() => {
							this.$router.push('/center/login')
						}, 1000)
					}
				
				})
				/* var timer= 0;
				localStorage.removeItem('name');
				localStorage.removeItem('isAdmin');
				this.$store.commit('USER_NAME',{name:'',isAdmin:false});
				this.timer = setInterval(()=>{
					this.$router.push('/center/login')
				},1000) */
			},
			btnreturn(){
			this.$router.push('/center/user')
			}
		},
		beforeRouteEnter(to,from,next){
			axios({
				url: '/api2/admin',
			}).then((res) => {
				console.log(res)
				var status = res.data.status
				if(status==0){
					next();
						
				}else{
					next('/center/login');
				}
				
			});
		},
		beforeDestroy(){
			clearInterval(this.timer)
		},
	}
</script>

<style>
	 .el-header, .el-footer {
	    
	    color: #333;
		font-size: 20px;
		padding-left:60px ;
	    line-height: 60px;
	  }
	  
	  .el-aside {
		height: 100%;
	    color: #333;
	    text-align: center;
	    line-height: 200px;
	  }
	  
	  .el-main {
		  margin-top: 5px;
	    color: #333;
	    text-align: center;
	  }
	  body > .el-container {
	    margin-bottom: 40px;
		
	  }
	  
	  .el-container:nth-child(5) .el-aside,
	  .el-container:nth-child(6) .el-aside {
	    line-height: 260px;
	  }
	  
	  .el-container:nth-child(7) .el-aside {
	    line-height: 320px;
	  }
	
	  #btnreturn{
		  display: block;
		  margin-right: 20px;
		  margin-top: 10px;
		  float: right;
	  }
</style>
