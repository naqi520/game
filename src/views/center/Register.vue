<template>
	<div>
		<div class="container">
			<div class="card " id="zhuce">
				<div class="ubi-title animated  fadeInDown">
					<h2 style="color: black;">注册</h2>
				</div>
				<div class="card-body">
					<div class="form-group">
						<label for="email">
							邮箱:
						</label>
						<el-input
						  placeholder="请输入邮箱"
						  v-model="email"
						  clearable>
						</el-input>
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
						<router-link to="/center/login" tag="button" class="btn" style="float: left;">已有帐号？马上登录</router-link>
						<el-button type="primary"   @click="Register">注册</el-button>
							<router-link to="/center/findPassword" tag="button" class="btn" style="float: right;">找回密码</router-link>
						</div>	
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name: 'register',
		data() {
			return {
				datalist:'',
				username: '',
				password: '',
				email:'',
				verify:'',
				verifyinfo :'发送验证码',
				disabled:false
			}
		},
		methods: {
			Verify(){
				if(this.disabled){return;}
				var This=this;
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
			Register() {
				var data ={
						"email":this.email,
						"username": this.username,
						"password": this.password,
						"verify":this.verify
						}
				axios({
					method: "post",
					url: '/api2/users/register',
					data
					
				}).then((res) => {
					console.log(res)
					var status = res.data.status
					var timer = 0;
					if(status==0){
						this.$alert('注册成功', '注册', {
							confirmButtonText: '确定',
							callback: action => {
								this.$message({
									type: 'info',
									message: res.data.msg
								});
							}
						});
						if(this.$store.state.username !==""){
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
							this.timer = setInterval(()=>{
								this.$router.push('/center/login')
							},1000)
					}else{
						this.$alert('注册失败', '注册', {
							confirmButtonText: '确定',
							callback: action => {
								this.$message({
									type: 'info',
									message:res.data.msg + ',请重新注册'
								});
							}
						});
					}
					
				})
			}
		},
		
		beforeDestroy(){
			clearInterval(this.timer)
		}
	}
</script>

<style>
	#zhuce{
		height: 750px;
		padding-top: 150px;
	}
</style>
