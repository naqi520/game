<template>
	<div>
		<div id="login">
			<div class="container" >
				<div class="card" >
					<div class="ubi-title animated  fadeInDown">
						<h2 style="color: black;">登录</h2>
					</div>
					<div class="card-body" >
						<div class="form-group" >
							<label for="username">
								用户名:
							</label>
							<el-input
							  placeholder="请输入用户名"
							  v-model="username"
							  clearable>
							</el-input>
							
							<label for="password">
								密码:
							</label>
							<el-input placeholder="请输入密码" v-model="password" show-password></el-input>
							
							<label for="verifyImg">
								验证码:
							</label>
							<el-input
							  placeholder="请输入验证码"
							  v-model="verifyImg"
							  clearable>
							</el-input>
							<img src="/api2/users/verifyImg" @click="dataImg" style="margin-top: 5px;">
						</div>
						<div class="row" style="text-align: center;">
							<router-link to="/center/register" tag="button" class="btn btn-danger col-xs-12 col-md-4 col-sm-4" style="float: left;">还没账号？还不马上注册</router-link>
							<button class="btn  col-xs-12 col-md-4 col-sm-4" style="" @click="Login">登录</button>
								<router-link to="/center/findPassword" tag="button" class="btn btn-danger col-xs-12 col-md-4 col-sm-4" style="float: right;">忘记密码了?点我找回</router-link>
							</div>	
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name: 'Login',
		data() {
			return {
				datalist: [],
				username: '',
				password: '',
				verifyImg: ""
			}
		},
		methods: {
			Login() {
				var data = {
					"username": this.username,
					"password": this.password,
					"verifyImg": this.verifyImg
				}
				axios({
					method: "post",
					url: '/api2/users/login',
					data

				}).then((res) => {
					console.log(res)
					var status = res.data.status
					var timer = 0;
					if (status == 0) {
						this.$alert('登录成功', '登录', {
							confirmButtonText: '确定',
							callback: action => {
								this.$message({
									type: 'info',
									message: res.data.msg
								});
								this.timer = setInterval(() => {
									this.$router.push('/center/user')
								}, 1000)
							},
							
						});
						
					}else{
						this.$alert('登录失败', '登录', {
							confirmButtonText: '确定',
							callback: action => {
								this.$message({
									type: 'info',
									message: res.data.msg
								});
							}
						});
					}

				})
			},
			dataImg(ev) {
				ev.target.src = '/api2/users/verifyImg?' + Math.random();
			}
		},
		beforeDestroy() {
			clearInterval(this.timer)
		}
	}
</script>

<style>
	#login {
		height: 750px;
		padding-top: 150px;
	}
</style>
