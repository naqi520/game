<template>
	<div>
		<navbar></navbar>
		<div class="newstitle">
			<h1>游戏排行</h1>
			<p>了解最新游戏排行</p>
		</div>
		<div class="game container">
			<div class="menu">
				<ul>
					<li v-for="(data,index) in menulist" @click="change(index,data.title)" :key="index" :class="{myactive:index===onindex}">{{data.name}}</li>
				</ul>
			</div>

		</div>

		<div class="container">
			<div class="row">
				<div v-if="gamelist.length !==0">
					<div class="col-md-4 col-xs-12">
						<h3><i class="el-icon-sort-down"></i>即将发售排行榜</h3>
						<el-divider></el-divider>
						<div class="row title-item" v-for="(data,index) in gamelist">

							<div class="title-img">
								<div class="col-md-4 col-xs-4" @click="chang(data.gameName,data.gameId)"><img :src="data.gameIcon" alt="" width="100%">
									<p class="pingfen">{{data.gameScore}}</p>
								</div>
								<div class="col-md-6 col-xs-6">
									<p>{{data.gameName}}</p>
									<small v-if="data.gameNameEn !== null">{{data.gameNameEn}}</small>
									<p class="title-text">{{data.gameDesc}}</p>
									<p>{{data.gameTypes[0]}} {{data.gameTypes[1]}}</p>
									<div v-if="data.gameLoginUrl">
										<p><a :href="data.gameLoginUrl" target="_blank">开始游戏</a></p>
									</div>
									<div v-else></div>
								</div>
								<div class="col-md-2 col-xs-2">
									<p>{{index+1}}</p>
								</div>
							</div>

						</div>

						<el-divider></el-divider>
					</div>
				</div>
				<div v-else>
					<div class="col-md-4 col-xs-12">
						<div v-if="latestlist.length !==0">
							<h3><i class="el-icon-sort-down"></i>最新开服表</h3>
							<el-divider></el-divider>
						</div>
						<div v-else></div>

						<div class="row title-item" v-for="(data,index) in latestlist">

							<div class="title-img">
								<div class="col-md-4 col-xs-4"><img :src="data.gameIcon" alt="" width="100%">
									<p class="pingfen">{{data.gameScore}}</p>
								</div>
								<div class="col-md-6 col-xs-6">
									<p>{{data.gameName}}</p>

									<p class="title-text">{{data.gameDesc}}</p>

									<div v-if="data.gameLoginUrl">
										<p><a :href="data.gameLoginUrl" target="_blank">开始游戏</a></p>
									</div>
									<div v-else></div>
								</div>
								<div class="col-md-2 col-xs-2">
									<p>{{index+1}}</p>
								</div>
							</div>

						</div>

						<div v-if="latestlist.length !==0">
							<el-divider></el-divider>
						</div>
						<div v-else></div>
					</div>
				</div>

				<div class="col-md-4 col-xs-12">
					<h3> <i class="el-icon-sort-down"></i>新游戏排行榜</h3>
					<el-divider></el-divider>
					<div class="row title-item" v-for="(data,index) in newlist">

						<div class="title-img">
							<div class="col-md-4 col-xs-4" @click="chang(data.gameName,data.gameId)"><img :src="data.gameIcon" alt="" width="100%">
								<p class="pingfen">{{data.gameScore}}</p>
							</div>
							<div class="col-md-6 col-xs-6">
								<p>{{data.gameName}}</p>

								<small>{{data.gameNameEn}}</small>

								<p class="title-text">{{data.gameDesc}}</p>
								<p>{{data.gameTypes[0]}} {{data.gameTypes[1]}}</p>
								<div v-if="data.gameLoginUrl">
									<p><a :href="data.gameLoginUrl" target="_blank">开始游戏</a></p>
								</div>
								<div v-else></div>
							</div>
							<div class="col-md-2 col-xs-2">
								<p>{{index+1}}</p>
							</div>
						</div>

					</div>
					<el-divider></el-divider>
				</div>
				<div class="col-md-4 col-xs-12">
					<h3><i class="el-icon-sort-down"></i>热搜排行榜</h3>
					<el-divider></el-divider>
					<div class="row title-item" v-for="(data,index) in annuallist">

						<div class="title-img">
							<div class="col-md-4 col-xs-4" @click="chang(data.gameName,data.gameId)"><img :src="data.gameIcon" alt="" width="100%">
								<p class="pingfen">{{data.gameScore}}</p>
							</div>
							<div class="col-md-6 col-xs-6">
								<p>{{data.gameName}}</p>
								<small>{{data.gameNameEn}}</small>

								<p class="title-text">{{data.gameDesc}}</p>
								<p>{{data.gameTypes[0]}} {{data.gameTypes[1]}}</p>
								<div v-if="data.gameLoginUrl">
									<p><a :href="data.gameLoginUrl" target="_blank">开始游戏</a></p>
								</div>
								<div v-else></div>
							</div>
							<div class="col-md-2 col-xs-2">
								<p>{{index+1}}</p>
							</div>
						</div>

					</div>
					<el-divider></el-divider>
				</div>

			</div>
		</div>
		<footerbar></footerbar>
	</div>

</template>

<script>
	import Vue from 'vue'
	import axios from 'axios'
	import navbar from '@/components/Navbar.vue'
	import footerbar from "@/components/footerbar.vue"
	export default {
		components: {
			navbar,
			footerbar

		},
		data() {
			return {
				show: false,
				menulist: [{
						"id": "1",
						"name": "单机游戏",
						"title": "standalone"
					},
					{
						"id": "2",
						"name": "网络游戏",
						"title": "client"
					},
					{
						"id": "3",
						"name": "网页游戏",
						"title": "web"
					},
					{
						"id": "4",
						"name": "小游戏",
						"title": "mini"
					},
					{
						"id": "5",
						"name": "手机游戏",
						"title": "mobile"
					},
				],
				onindex: 0,
				gamelist: [],
				newlist: [],
				annuallist: [],
				latestlist: [],
				currentPage: "",
				title: "standalone"
			}
		},
		mounted() {
			axios({
				url: `/lewanapi?action=aladdin_rank_games&gameSource=${this.title}`
			}).then((res) => {
				console.log(res.data)
				this.gamelist = res.data.result.data.upcoming
				this.newlist = res.data.result.data.new
				this.annuallist = res.data.result.data.annual
				this.latestlist = res.data.result.data.latest
			})
		},
		methods: {
			chang(name, id) {
				this.$router.push(`/detail_3/${name}/${id}`)
			},
			change(index, title) {
				this.onindex = index
				axios({
					url: `/lewanapi?action=aladdin_rank_games&gameSource=${title}`
				}).then((res) => {
					console.log(res.data)
					this.gamelist = res.data.result.data.upcoming
					this.newlist = res.data.result.data.new
					this.annuallist = res.data.result.data.annual
					this.latestlist = res.data.result.data.latest
				})
			}
		},
		beforeRouteEnter(to, from, next) {
			axios({
				method: "post",
				url: '/api2/users/getUser',
			}).then((res) => {
				// console.log(res)
				var status = res.data.status
				if (status == 0) {
					next();

				} else {
					next('/center/login');
				}

			});
		},
	}
</script>

<style lang="scss">
	.game {
		margin-top: 50px;

		// min-height: 500px;
		.menu {
			ul {
				display: flex;
				background: #f1f1f1;
				border: 1px solid #f1f1f1;

				.myactive {
					background: white;
					border: none
				}

				li {
					width: 100%;
					height: 50px;
					text-align: center;
					line-height: 50px;
					cursor: pointer;
					flex: 1;
				}
			}
		}
	}

	.title-img {
		border-radius: 10px;
		position: relative;
		cursor: pointer;

		.pingfen {
			background: rgba(0, 0, 0, 0.2);
			position: absolute;
			color: red;
			bottom: 0;
			font-size: 16px;
			right: 25px;
		}

		img {
			position: relative;
			padding: 10px;
		}

		small {
			padding-left: 5px;

		}

		p {
			padding: 5px;
		}

	}

	.title-text {
		overflow: hidden;
		height: 45px;
	}

	.title-item {
		transition: 1s;
		border-radius: 10px;
	}

	.title-item:hover {
		box-shadow: 0 5px 25px 5px rgba(0, 0, 0, 0.2);
	}
</style>
