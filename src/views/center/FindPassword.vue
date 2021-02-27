<template>
	<div>
	<div class="container">
		<div class="card " id="findpassword">
		<div class="ubi-title animated  fadeInDown">
			<h2 style="color: black;">找回密码</h2>
		</div>
			<div class="card-body">
				<div class="form-group">
					<label for="email">
						邮箱:
					</label>
					<el-input
					  placeholder="请输入你的邮箱"
					  v-model="email"
					  clearable>
					</el-input>
					<label for="password">
						你要修改的密码:
					</label>
					<el-input placeholder="请输入密码" v-model="password" show-password></el-input>
					<label for="crity">
						<el-button type="primary"  @click="Verify" :disabled='disabled'>{{verifyinfo}}:</el-button>
					</label>
				<el-input
				  placeholder="请输入验证码"
				 v-model="verify"
				  clearable>
				</el-input>
				</div>
				</div>
			<div style="text-align: center;">
				<router-link to="/center/register" tag="button" class="btn" style="float: left;">马上注册</router-link>
				<el-button type="primary"   @click="findPassword">修改</el-button>
					<router-link to="/center/login" tag="button" class="btn" style="float: right;">立即登录</router-link>
				</div>	
			</div>
		</div>
	</div>
	
	
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name: 'findPassword',
		data() {
			return {
				datalist:'',
				password: '',
				email:'',
				verify:'',
				verifyinfo :'发送验证码',
				disabled:false
			}
		},
		methods: {
			Verify(){
				axios({
					url: '/api2/users/verify?email='+this.email
					
				}).then((res) => {
					console.log(res)
					var status = res.data.status
					if(status==0){
						this.disabled = true;
						var count=60;
						var timer = setInterval(()=>{
							count--;
							this.verifyinfo = '剩余' + count + '秒';
							if(count ===0){
								this.disabled=false;
								count = 60;
								this.verifyinfo ='发送验证码';
								clearInterval(timer);
							}
						},1000);
						this.$alert('发送成功', '发送验证码', {
						      confirmButtonText: '确定',
						      callback: action => {
						        this.$message({
						          type: 'info',
						          message:res.data.msg+ ',请稍等'
						        });
						      }
						    });
					}else{
						this.$alert('发送失败', '发送验证码', {
						      confirmButtonText: '确定',
						      callback: action => {
						        this.$message({
						          type: 'info',
						          message:res.data.msg+ ',请重新获取验证码'
						        });
						      }
						    }); 
					}
					
				})
			},
			findPassword() {
				var data ={
						"email":this.email,
						"password": this.password,
						"verify":this.verify
						}
				axios({
					method: "post",
					url: '/api2/users/findPassword',
					data
					
				}).then((res) => {
					console.log(res)
					var status = res.data.status
					var timer = 0;
					if(status==0){
						
						this.$alert('修改成功', '修改密码', {
						      confirmButtonText: '确定',
						      callback: action => {
						        this.$message({
						          type: 'info',
						          message:res.data.msg+ ',请重新登录'
						        });
						      }
						    }); 
							localStorage.removeItem('name');
							localStorage.removeItem('isAdmin');
							localStorage.removeItem('userHead');
							this.$store.commit('USER_NAME', {
								name: '',
								isAdmin: false,
								userHead: ''
							});
						this.timer = setInterval(()=>{
							
							this.$router.push('/center/login')
						},1000)
					}else{
					this.$alert('修改失败', '修改密码', {
					      confirmButtonText: '确定',
					      callback: action => {
					        this.$message({
					          type: 'info',
					          message:res.data.msg+ ',请重新修改'
					        });
					      }
					    }); 
					}
					
				})
			}
		},
		beforeDestroy(){
			clearInterval(this.timer)
		},
	
		
	}
</script>

<style>
	#findpassword{
		height: 750px;
		padding-top: 150px;
	}
</style>
