<template>
	<div>
		<div id="user" class="container">
			<div class="userH">
				<div class="upload">
					<label for="file">
						<input type="file" name="file" @change="upload" id="file">
						<img :src="$store.state.userHead" alt="" class="userHead"></label>
				</div>
				<div style="display: inline-block; font-size: 20px; margin-left: 5px; position: relative;top: -15px;">欢迎：帅气的
					{{$store.state.name}}
				</div>
				<el-button type="primary" id="btnout" @click="logOut">退出</el-button>
			</div>
			<el-divider></el-divider>
			<userinfo>
			</userinfo>
			<router-view></router-view>
					
				
			
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import userinfo from '@/views/center/user/userinfo'
	import nameinfo from '@/views/center/user/nameinfo'
	// import maininfo from '@/views/center/user/maininfo'
	export default {
		name: 'user',
		data() {
			return {
				datalist: [],
				name: "file",
				dialogFormVisible: false,
				feedback: false,
				feedbackX: "",
				password: '',
				email: '',
				verify: '',
				verifyinfo: '发送验证码',
				disabled: false,
				textarea: ''
			}
		},
		components: {
			userinfo,
			nameinfo,
			// maininfo
		},
		methods: {
			logOut() {
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
								this.timer = setInterval(() => {
									this.$router.push('/center/login')
								}, 1000)
							}
						});
						localStorage.removeItem('name');
						localStorage.removeItem('userHead');
						localStorage.removeItem('isAdmin');
						this.$store.commit('USER_NAME', {
							name: '',
							isAdmin: false,
							userHead: '',
						
						});
						this.$store.commit('USER_INFO',{
							imgHead:'',
							address :'',
							age : '',
							date : '',
							profile :'' ,
							sex : '',
							username :"",
							zodiac : ""
						})
					}

				})
			},
			upload(ev) {
				var file = ev.target.files[0];
				var param = new FormData();
				param.append('file', file, file.name);
				axios({
						method: "post",
						url: '/api2/users/uploadUserHead',
						data: param,
						headers: {

							'Content-Type': 'multipart/form-data'
						}
					}

				).then((res) => {
					var status = res.data.status;
					this.datalist = res.data
					var This = this;
					if (status == 0) {
						this.$alert('修改成功', '修改头像', {
							confirmButtonText: '确定',
							callback: action => {
								this.$message({
									type: 'info',
									message: res.data.msg
								});
							}
						});
						This.$store.commit('USER_NAME', {
							name: This.$store.state.name,
							isAdmin: This.$store.state.isAdmin,
							userHead: res.data.data.userHead + '?' + Math.random()
						});
					} else {
						console.log(res)
					}
				})
			},
		},
		beforeDestroy() {
			clearInterval(this.timer)
		},
		beforeRouteEnter(to, from, next) {
			axios({
				method: "post",
				url: '/api2/users/getUser',
			}).then((res) => {
				console.log(res)
				var status = res.data.status
				if (status == 0) {
					next(vm => {
						localStorage.setItem('name', res.data.data.username);
						localStorage.setItem('isAdmin', res.data.data.isAdmin);
						localStorage.setItem('userHead', res.data.data.userHead);
						vm.$store.commit('USER_NAME', {
							name: res.data.data.username,
							isAdmin: res.data.data.isAdmin,
							userHead: res.data.data.userHead
						});
					});

				} else {
					next('/center/login');
				}

			})
		}
	}
</script>

<style>
	#user {
		position: relative;
		padding-top: 100px;
		width: 100%;
		min-height: 800px;

		/* background: #00B7FF; */

	}

	#btnout {
		display: inline-block;
		margin-top: 5px;
		float: right;
		box-shadow: 0 5px 25px 5px rgba(0, 0, 0, 0.2);
	}

	.userH {
		width: 100%;
		height: 50px;
		border-radius: 20px 0 0 20px;
		box-shadow: 0 5px 25px 5px rgba(0, 0, 0, 0.2);
	}

	.upload {
		box-shadow: 0 5px 25px 5px rgba(0, 0, 0, 0.2);
		background-size: cover;
		display: inline-block;
		width: 50px;
		height: 50px;
		position: relative;
		border: 1px dashed #d9d9d9;
		border-radius: 50%;
		overflow: hidden;
	}

	.upload input {
		display: none;
	}

	.upload img {
		cursor: pointer;
	}
</style>
