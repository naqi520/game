<template>
	<div>
		<div class="userinfo">
			<div class="container">
				<div class="row">
			<div class="col-md-6 col-xs-6">
					<div class="admin_item">您的身份:</div>
					<div v-if="$store.state.isAdmin">
						<div class="admin_item">管理员</div>
						<div class="admin_item">
						<router-link to="/admin"  tag="div">
							进入后台管理
						</router-link>
					</div>
					</div>
					<div v-else class="admin_item ">游客</div>
			</div>
			
			<div class="col-md-6 col-xs-6">
				<nameinfo></nameinfo>
			</div>
				</div>
			</div>
			<el-divider></el-divider>
			<div class="link container">
				<router-link to="/center/user/users" id="btn" tag="div" active-class="Myactive">个人信息</router-link>
				<router-link to="/center/user/maininfo" id="btn" tag="div" active-class="Myactive">快捷查看</router-link>
				<div @click="dialogFormVisible = true">修改密码</div>
				<div  @click="feedback = true">反馈信息</div>
			</div>
			<el-dialog title="修改密码" :visible.sync="dialogFormVisible">
						<div class="card-body text-left">
							<div class="form-group">
								<label for="email">
									邮箱:
								</label>
								<el-input placeholder="请输入你的邮箱" v-model="email" clearable>
								</el-input>
								<label for="password">
									你要修改的密码:
								</label>
								<el-input placeholder="请输入密码" v-model="password" show-password></el-input>
								<label for="crity">
									<el-button type="primary" @click="Verify" :disabled='disabled'>{{verifyinfo}}:</el-button>
								</label>
								<el-input placeholder="请输入验证码" v-model="verify" clearable>
								</el-input>
							</div>
						</div>
			
						<div slot="footer" class="dialog-footer">
							<el-button @click="dialogFormVisible = false">取 消</el-button>
							<el-button type="primary" @click="findPassword">确 定</el-button>
						</div>
					</el-dialog>
				<el-dialog title="反馈信息" :visible.sync="feedback">
						<div class="card-body text-left">
							<div class="form-group">
								<label for="password">
									你的用户名:
								</label>
								<el-input placeholder="请输入密码" v-model="$store.state.name" disabled></el-input>
								<label for="email">
									您的邮箱:
								</label>
								<el-input placeholder="请输入你的邮箱" v-model="email" clearable>
								</el-input>
								<label for="email">
									写下您要反馈的信息:
								</label>
								<el-input
								  type="textarea"
								  :rows="2"
								  placeholder="请输入内容"
								  v-model="feedbackX">
								</el-input>
							</div>
						</div>
			
						<div slot="footer" class="dialog-footer">
							<el-button @click="feedback = false">取 消</el-button>
							<el-button type="primary" @click="Rfeedback">确 定</el-button>
						</div>
					</el-dialog>
			
				</div>
			
	</div>
	</div>
</template>
<script>
	import axios from 'axios'
	import nameinfo from '@/views/center/user/nameinfo'
	export default {
		data() {
			return {
				inputVisible: false,
				inputValue: "",
				dialogFormVisible: false,
				sex: '',
				address: '',
				profile: "",
				date: '',
				name: '',
				age: '',
				zodiac: '',
				datalist: [],
				feedback:false,
				feedbackX:"",
				password: '',
				email: '',
				verify: '',
				verifyinfo: '发送验证码',
				disabled: false,
				textarea: ''
			}
		},
		methods: {
		Verify() {
				axios({
					url: '/api2/users/verify?email=' + this.email
		
				}).then((res) => {
					console.log(res)
					var status = res.data.status
					if (status == 0) {
						this.disabled = true;
						var count = 60;
						var timer = setInterval(() => {
							count--;
							this.verifyinfo = '剩余' + count + '秒';
							if (count === 0) {
								this.disabled = false;
								count = 60;
								this.verifyinfo = '发送验证码';
								clearInterval(timer);
							}
						}, 1000);
						this.$alert('发送成功', '发送验证码', {
							confirmButtonText: '确定',
							callback: action => {
								this.$message({
									type: 'info',
									message: res.data.msg + ',请稍等'
								});
							}
						});
					} else {
						this.$alert('发送失败', '发送验证码', {
							confirmButtonText: '确定',
							callback: action => {
								this.$message({
									type: 'info',
									message: res.data.msg + ',请重新获取验证码'
								});
							}
						});
					}
		
				})
			},
			findPassword() {
		
				var data = {
					"email": this.email,
					"password": this.password,
					"verify": this.verify
				}
				axios({
					method: "post",
					url: '/api2/users/findPassword',
					data
		
				}).then((res) => {
					console.log(res)
					var status = res.data.status
					var timer = 0;
					if (status == 0) {
		
						this.$alert('修改成功', '修改密码', {
							confirmButtonText: '确定',
							callback: action => {
								this.$message({
									type: 'info',
									message: res.data.msg + ',请重新登录'
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
					} else {
						this.$alert('修改失败', '修改密码', {
							confirmButtonText: '确定',
							callback: action => {
								this.$message({
									type: 'info',
									message: res.data.msg + ',请重新修改'
								});
							}
						});
					}
		
				})
			},
		Rfeedback(){
			var data = {
				"email": this.email,
				"username": this.$store.state.name,
				"feedback": this.feedbackX
			}
			axios({
				method: "post",
				url: '/api2/feedback/feedback',
				data
			
			}).then((res) => {
				console.log(res)
				var status = res.data.status
				var timer = 0;
				if (status == 0) {
			
					this.$alert('提交成功', '反馈信息', {
						confirmButtonText: '确定',
						callback: action => {
							this.$message({
								type: 'info',
								message: res.data.msg
							});
						this.feedback = false
						},
						
					});
					
				} else {
					this.$alert('提交失败', '反馈信息', {
						confirmButtonText: '确定',
						callback: action => {
							this.$message({
								type: 'info',
								message: res.data.msg + ',请重新修改'
							});
							this.feedback = false
						},
						
					});
					
				}
			
			})
		}
		
		},
beforeDestroy(){
			clearInterval(this.timer)
		},
components: {
			nameinfo,
		
		},
	}
</script>

<style>
	.link{
		display: flex;
	}
	.link div{
		flex: 1;
	}
	.link div {
		margin-left: 10px;
		line-height: 50px;
		border-radius: 5px;
		box-shadow: 0 5px 25px 5px rgba(0, 0, 0, 0.2);
		text-align: center;
		cursor: pointer;
		transition: .5s;
		font-size: 10px;
	}
	.Myactive{
		background: wheat;
	}
	.admin_item{
	
	font-size: 20px;
	border-radius: 5px;
	transition: 1s;
	}
	.admin_item div{
	margin-top: 10px;
	width: 100px;
	line-height: 50px;
	border-radius: 5px;
	box-shadow: 0 5px 25px 5px rgba(0, 0, 0, 0.2);
	text-align: center;
	cursor: pointer;
	transition: .5s;
	font-size: 10px;
	}
	/* .userinfo {
		position: relative;
		height: 500px;

	}
	
	.admin_left {
		position: absolute;
		width: 100%;
		height: 200px;
		margin-top: 15px;
		box-shadow: 0 5px 25px 5px rgba(0, 0, 0, 0.2);
		transition: 1s;
	}

	.admin_left div {
		padding-top: 5px;
	}

	.admin_left:hover {
		background: wheat;
		transform: translateY(5px);

	}

	.admin_item {

		width: 100%;
		text-align: center;
		color: black;
		font-size: 16px;
	}

	.link {
		width: 100%;
		position: absolute;
		top: 50%;
		height: 200px;
		
	}

	 */
</style>
