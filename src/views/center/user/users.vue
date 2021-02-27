<template>
	<div>
		<div class="ubi-title animated  fadeInDown">
			<h2 style="color: black;">个人信息</h2>
		</div>
		<div class="row  animated  fadeInLeft " style="position: relative; margin-bottom: 15px;">
			<div class=" col-md-4 " >
				<div class="Img">
					<label for="img"><i class="el-icon-picture">更改封面</i></label>
					<input type="file" name="file" @change="upload" id="img" >
					<img :src="$store.state.imgHead" alt="">
					
				</div>
				<div class="qianming animated  tada">个性签名：<strong >{{$store.state.profile}}</strong></div>
			</div>
			<div class=" col-md-8  " >
				<div class="usertext">
					<div class="title"><i class="el-icon-user-solid"></i><strong>{{$store.state.name}}</strong><div class="usershow" style="float: right;margin-right: 10px;line-height: 50px; cursor: pointer;" @click="dialogFormVisible = true">编辑资料</div></div>
					<div class="title"><i class="el-icon-female"></i><strong >{{$store.state.sex}}</strong><strong >{{$store.state.age}}</strong><strong>{{$store.state.zodiac}}</strong></div>
					<div class="title"><i class="el-icon-user"></i>生日：<strong >{{$store.state.date}}</strong></div>
					<div class="usershow text-center" @click="usershow" >更多资料</div>
					<div v-show="show" class="animated  fadeInDown" >
						 <el-divider></el-divider>
						<div class="title"><i class="el-icon-user"></i><strong >姓名：{{$store.state.username}}</strong></div>
						<div class="title"><i class="el-icon-location"></i><strong>地址：{{$store.state.address}}</strong></div>
					</div>
				</div>

			</div>
		</div>
	
	<el-dialog title="编辑个人信息" :visible.sync="dialogFormVisible">
		<div class="card-body text-left">
				<div class="form-group">
					<label for="username">
						用户名:
					</label>
					<el-input v-model="$store.state.name" disabled ></el-input>
					<label for="name">
						你的姓名:
					</label>
					<input type="text" class="form-control" id="name" v-model="$store.state.username" >
					<label for="sex">
						您的性别:
					</label>
					<input type="text" class="form-control" id="sex" v-model="$store.state.sex" >
					<label for="date">
						您的生日:
					</label>
		
					<input type="date" class="form-control" id="date" v-model="$store.state.date" >
		
					<label for="address">
						您的地址:
					</label>
					<el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="$store.state.address" id="address" >
					</el-input>
		<label for="age">
			您的年龄:
		</label>
		<input type="text" class="form-control" id="age" v-model="$store.state.age" >
		<label for="zodiac">
			您的生肖:
		</label>
		<input type="text" class="form-control" id="zodiac" v-model="$store.state.zodiac" >
					<label for="profile">
						个性签名
					</label>
					<el-input type="textarea" :rows="4" placeholder="请输入内容" v-model="$store.state.profile" id="profile" >
					</el-input>
				</div>
			</div>
		<div slot="footer" class="dialog-footer">
			<button class="btn btn-border"  @click="baocun" style="position: absolute; left: 10px; bottom: 10px;">保存</button>
			
			<button class="btn btn-border"  @click="xiugai" style="position: absolute; right: 10px; bottom: 10px;">修改</button>
			
		</div>
	</el-dialog>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {

				show: false,
				dialogFormVisible:false,
		
			}
		},

		beforeRouteEnter(to, from, next) {
			var This = this
			axios({
				url: '/api2/userinfo/getuserinfo',
			}).then((res) => {
				console.log(res.data.data)
				var status = res.data.status
				if (status == 0) {
					next(vm => {
						if(res.data.data.result[0] ==null){
							console.log(vm.$store.state)
						}else{
							vm.$store.commit('USER_INFO', {
								imgHead:res.data.data.result[0].Img,
								address :res.data.data.result[0].address,
								age : res.data.data.result[0].age,
								date : res.data.data.result[0].date,
								profile : res.data.data.result[0].profile,
								sex : res.data.data.result[0].sex,
								username :res.data.data.result[0].name,
								zodiac : res.data.data.result[0].zodiac
							});
						}
						
						
					});
		
				} else {
					next('/center/login');
				}
		
			})
		},
		methods: {
			usershow() {
				this.show = !this.show
			},
			xiugai(){
				var data ={
					"username": this.$store.state.name,
					"address": this.$store.state.address,
					"profile": this.$store.state.profile,
					"age":this.$store.state.age,
					"name":this.$store.state.username,
					"zodiac":this.$store.state.zodiac,
					"date":this.$store.state.date,
					"sex":this.$store.state.sex
				}
				axios({
				  method:'post',
					url:'/api2/userinfo/uploaduserinfo',
					data
				}).then((res)=>{
					console.log(res)
					var status = res.data.status
					var This = this;
					if(status==0){
						this.$alert('编辑成功', '编辑资料', {
							confirmButtonText: '确定',
							callback: action => {
								this.$message({
									type: 'info',
									message: res.data.msg
								});
								this.dialogFormVisible = false
							},
							
						});
					}
					
				})
			},
			upload(ev) {
				var file = ev.target.files[0];
				var param = new FormData();
				param.append('file', file, file.name);
				axios({
						method: "post",
						url: '/api2/userinfo/updateImg',
						data: param,
						headers: {
			
							'Content-Type': 'multipart/form-data'
						}
					}
			
				).then((res) => {
					console.log(res.data.data);
					var status = res.data.status;
					this.datalist = res.data
					var This = this;
					if (status == 0) {
						this.$alert('修改成功', '修改封面', {
							confirmButtonText: '确定',
							callback: action => {
								this.$message({
									type: 'info',
									message: res.data.msg
								});
								This.$store.commit('USER_INFO', {
										address :This.$store.state.address,
										age : This.$store.state.age,
										date : This.$store.state.date,
										profile : This.$store.state.profile,
										sex : This.$store.state.sex,
										username :This.$store.state.name,
										zodiac : This.$store.state.zodiac,
									imgHead:res.data.data.Img + '?' + Math.random(),
								});
							},
							
						});
				
					}
				})
			},
			baocun(){
				var data ={
					"username": this.$store.state.name,
					"address": this.$store.state.address,
					"profile": this.$store.state.profile,
					"age":this.$store.state.age,
					"name":this.$store.state.username,
					"zodiac":this.$store.state.zodiac,
					"date":this.$store.state.date,
					"sex":this.$store.state.sex
				}
				axios({
						method: "post",
						url: '/api2/userinfo/registeruserinfo',
						data,
					}
							
				).then((res) => {
					console.log(res.data)
					var status = res.data.status;
					this.datalist = res.data
					var This = this;
					if (status == 0) {
						this.$alert('保存成功', '保存个人信息', {
							confirmButtonText: '确定',
							callback: action => {
								this.$message({
									type: 'info',
									message: res.data.msg,
									
								});
								This.dialogFormVisible = false
							},
							
						});
					}else{
						this.$alert('保存失败', '保存个人信息', {
							confirmButtonText: '确定',
							callback: action => {
								this.$message({
									type: 'info',
									message: res.data.msg
								});
								
							},
							
						});
					}
				})
			}
		},
		
		beforeDestroy() {
			clearInterval(this.timer)
		},
		
	}
</script>

<style>
	@media screen and (min-width: 1024px) {
		.Img {
			min-height: 300px;
		}
		.qianming {
			font-size: 16px;
		}

		.usertext strong {
			font-size: 10px;
		}

		.usertext i {
			line-height: 50px;
			font-size: 20px;
			margin-right: 10px;
			margin-left: 0px;
		}
		.usertext strong {
			font-size: 6px;
			margin-right: 10px;
		}
	}

	.usershow {
		height: 50px;
		line-height: 50px;
		font-size: 20px;
		font-weight: 800;
		transition: 1.5s;
		
	}

	.usershow:hover {
		cursor: pointer;
		color: blueviolet;
	}

	.Img {
		width: 100%;
		min-height: 300px;
		position: relative;
		box-shadow: 0 5px 25px 5px rgba(0, 0, 0, 0.2);
		overflow: hidden;
		/* border: 1px black solid; */
		border-radius: 5px;
	}

	.Img i {
		height: 20px;
		line-height: 20px;
		background: transparent;
		border-radius: 15px;
		color: yellow;
		position: absolute;
		top: 10px;
		left: 10px;
		z-index: 20;
		font-size: 10px;
		cursor: pointer;
	}

	.Img input {
		display: none;
	}

	.Img img {
		width: 100%;
		box-shadow: 0 5px 25px 5px rgba(0, 0, 0, 0.2);
		height: 100%;
		transition: .5s;
		position: absolute;
		top: 0;
		
	}

	.Img img:hover {
		transform: scale(1.2);
	}

	.usertext {
		box-shadow: 0 5px 25px 5px rgba(0, 0, 0, 0.2);
		width: 100%;
		height: 100%;
		transition: 2s;
		margin-bottom: 10px;
		/* border: 1px black solid; */
		transition: .5s;
	}
	.usertext:hover{
		transform: translateY(15px);
	}
	.usertext .title {
		width: 100%;
		height: 50px;
		/* border: 1px solid black; */
	}

	.usertext i {
		line-height: 50px;
		font-size: 8px;
		margin-right: 10px;
		margin-left: 15px;
	}

	.usertext strong {
		font-size: 15px;
		margin-right: 10px;
	}

	.qianming {
		font-size: 20px;
		width: 100%;
		margin-top: 15px;
		display: inline-block;
		margin-bottom: 10px;
		transition: 1s;
	}
	.qianming:hover{
		color: #66B1FF;
		cursor: pointer;
	}
</style>
