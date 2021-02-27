<template>
	<nav class="navbar navbar-default navbar-fixed-top" style="height: 50px; border: none; box-shadow: 0 5px 25px 5px rgba(0, 0, 0, 0.2);">
		<div class="container-fluid">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
				 aria-expanded="false">
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<router-link to="/film" tag="a" class="navbar-brand">NGAME </router-link>
			</div>
			<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				<div class="container">
					<ul class="nav navbar-nav" id="router">
						<li>
							<router-link to="/film" tag="a" active-class="myactive">首页</router-link>
						</li>

						<!-- 	<li>
							<router-link to="/news" tag="a" active-class="myactive">资讯</router-link>
						</li> -->
						<li>
							<router-link to="/notice" tag="a" active-class="myactive">更新</router-link>
						</li>
						<li>
							<router-link to="/games" tag="a" active-class="myactive">排行</router-link>
						</li>
						<li>
							<router-link to="/ranking" tag="a" active-class="myactive">游戏</router-link>
						</li>
					</ul>
					<form class="navbar-form navbar-left">
						<div class="form-group">
							<input type="text" class="form-control" placeholder="你想找啥游戏" v-model="game" v-on:input="chang()" @focus="changa()"
							 @blur="change()">

						</div>
						<button type="button" class="btn btn-default" @click="changd()"><i class="el-icon-search"></i>搜索</button>

						<div class="sousuo" ref="sousuo">

							<ul>

								<li v-for="data in datalist" @click="changb(data.gameName,data.gameId)">
									<div class="row pic-img">
										<div class="col-md-6"><img :src="data.gameIcon" alt=""></div>
										<div class="col-md-6">
											<p>{{data.gameName}}</p>
											<p>{{data.gameTypes[0]}} / {{data.gameTypes[1]}}</p>

										</div>

									</div>
								</li>

							</ul>

						</div>

					</form>
					<ul class="nav navbar-nav navbar-right" id="right">
						<!-- <li>
							<router-link to="/aboutme" tag="a" active-class="myactive">关于我</router-link>
						</li> -->
						<li class="dropdown">

							<router-link to="" 
							tag="a" 
							active-class="myactive" 
							class="dropdown-toggle" 
							data-toggle="dropdown" 
							role="button"
							 aria-haspopup="true" 
							 aria-expanded="false">
								<img :src="$store.state.userHead" alt="" style="height: 25px;"> 
								<strong v-if="this.$store.state.name">欢迎你
								</strong>
								<strong v-else> 请登录 </strong>
								<strong v-if="this.$store.state.username">{{$store.state.username}}</strong>
								<strong v-else>{{$store.state.name}}</strong>
								<span class="caret"></span></router-link>
							<ul class="dropdown-menu">
								<li>
									<a href="#">
								<img :src="$store.state.userHead" alt="" style="height: 25px;">
								{{$store.state.name}}
									</a>
								</li>
								
								<li>
									<router-link to="/center/findPassword" tag="a" @click="findPassword()">修改密码</router-link>
								<li role="separator" class="divider"></li>
								<li>
									<router-link to="/center/user" tag="a">个人中心</router-link>
								</li>
								<li>
									<a href="#" @click="logOut">退出</a></li>
							</ul>
						</li>
					</ul>
				</div>

			</div><!-- /.navbar-collapse -->
		</div>
	</nav>

</template>

<script>
	import {
		Message
	} from 'element-ui';
	import axios from 'axios'
	export default {
		data() {
			return {
				gamelist: "",
				datalist: [],
				game: "",
				data: "",
				show: false,
				timer: null,
			};
		},
		methods: {
			longln(){
				this.$router.push("center/login")
			},
			changd() {
				//搜索
				if (!this.game) {
					return
				} else {
					this.$router.push(`/ranking/ranking1/${this.game}`)
					window.location.reload()
				}
			},
			changb(name, id) {
				//跳转
				this.$refs.sousuo.style.display = 'block'
				this.$router.push(`/detail_3/${name}/${id}`)
				window.location.reload()
			},
			changa() {
				//获取光标
				clearInterval(this.timer)
				if (!this.game) {
					this.$refs.sousuo.style.display = 'none'
				} else {
					this.$refs.sousuo.style.display = 'block'
				}
				if (this.datalist.length >= 10) {
					this.$refs.sousuo.style.height = '500px'
					this.$refs.sousuo.style.overflowY = 'auto'
				} else {
					this.$refs.sousuo.style.height = ''
					this.$refs.sousuo.style.overflowY = ''
				}
			},
			change() {
				//失去光标
				if (!this.game) {
					return
				} else {
					this.timer = setInterval(() => {
						this.$refs.sousuo.style.display = 'none'
					}, 1000)
				}
			},
			chang() {
				//实时监听
				if (!this.game) {
					this.datalist = [];
					this.$refs.sousuo.style.display = 'none'
				} else {
					this.$refs.sousuo.style.display = 'block'
					axios({
						url: `/lewanapi?action=game_query&gameName=${this.game}`
					}).then((res) => {
						// console.log(res.data)
						this.datalist = res.data.result.data
						if (this.datalist.length >= 10) {
							this.$refs.sousuo.style.height = '500px'
							this.$refs.sousuo.style.overflowY = 'auto'
						} else {
							this.$refs.sousuo.style.height = ''
							this.$refs.sousuo.style.overflowY = ''
						}
					})
				}

			},
			logOut() {
				axios({
					url: '/api2/users/logout',
				}).then((res) => {
					var status = res.data.status
					if (status == 0) {
						localStorage.removeItem('name');
						localStorage.removeItem('isAdmin');
						localStorage.removeItem('userHead');
						this.$store.commit('USER_NAME', {
							name: '',
							isAdmin: false,
							userHead: '',


						});
						this.$store.commit('USER_INFO', {
							imgHead: '',
							address: '',
							age: '',
							date: '',
							profile: '',
							sex: '',
							username: "",
							zodiac: ""
						})

						this.data = res.data.msg
						// console.log(res.data.msg)
						this.$alert('你确认退出吗', '退出登录', {
							confirmButtonText: '确定',
							callback: action => {

								this.$message({
									type: 'info',
									message: res.data.msg
								});
								this.$router.push("/film")
							}
						});
					}

				})
			},
		},
		beforeDestroy() {
			clearInterval(this.timer)
		}
	}
</script>

<style lang="scss">
	.sousuo::-webkit-scrollbar {
		width: 10px;
	}

	.sousuo::-webkit-scrollbar-thumb {
		background: gold;
		border-radius: 50px;
		box-shadow: 1px 1px 10px gray;
	}

	.sousuo::-webkit-scrollbar-track {
		background: gainsboro;
		box-shadow: inset 2px 2px 10px gainsboro;
	}

	.sousuo ul li:hover {
		background: bisque;
	}

	.sousuo {
		background: white;
		width: 250px;
		// height: 300px;
		// // overflow-y: auto;
		display: none;

		li {
			display: block;
			width: 100%;
			cursor: pointer;
			transition: 1s;
		}
	}

	.pic-img img:hover {

		transform: scale(1.2);

	}

	.pic-img {
		width: 200px;

		img {
			width: 100%;
			margin: 5px;
			transition: 1s;

		}

		p {
			width: 100%;
			margin-top: 5px;
			font-size: 6px;

		}
	}

	#router {
		li {
			a {
				color: gray;

			}

			a:hover {
				color: black;
			}
		}

		.myactive {
			background: gray;
			color: black;
		}
	}

	#right {
		a {
			color: gray;
		}

		a:hover {
			color: black;
		}
	}
</style>
