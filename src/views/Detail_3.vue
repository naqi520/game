<template>
	<div>
		<navbar></navbar>
		<div class="detail_3">
			<div class="gameHeader">
				<div class="container detail_Img">
					<div class="row">
						<div class="col-md-6 col-xs-6" style="width: 158px;margin-top: 20px;">
							<img :src="datalist.gameIcon" alt="" width="100%">
						</div>
						<div class="col-md-6 col-xs-6 detail_3_text">
							<h1>{{datalist.gameName}} <strong style="color: red;">{{datalist.gameScore}}</strong></h1>
							<p>{{datalist.gameNameEn}}</p>
							<a :href="datalist.gameDownloadUrl" target="_blank">{{datalist.gameDownloadText}}</a>
						</div>
					</div>
					<el-divider></el-divider>
				</div>
			</div>
			<div>
				<div class="container">
					<div class="row">
						<div class="col-md-7 detail_3_item ">
							<h3>游戏类型：{{gameTypes[0]}}/{{gameTypes[1]}}

							</h3>
							<p>{{datalist.gameDesc}}</p>
							<el-divider></el-divider>
							<h3>资讯</h3>
							<ul>
								<li v-for="data in newlist"><a :href="data.url" target="_blank">{{data.title}}</a> <i>{{data.source}}</i></li>
							</ul>
							<el-divider></el-divider>
							<div v-if="videolist.length !==0">
								<h3>视频</h3>
								<div class="row">
									<div class="col-md-4 " v-for="data in videolist">
										<div class="detail_3-video">
											<a :href="data.url" target="_blank"><img :src="data.poster" alt=""> </a>
										</div>
										<div style="padding-top: 15px; ">
											<a :href="data.url" target="_blank">
												<p>{{data.desc}}</p>
											</a>
										</div>
									</div>
								</div>
								<el-divider></el-divider>
							</div>
							<div v-else></div>
							<div>
								<h3>相关推荐</h3>
								<div class="row">
									<div class="col-md-4 detail_3_gameRecommends" v-for="data in gameRecommends">
								<div>
									<img :src="data.gameIcon" alt="" height="200px" width="150px">
								</div>
								<p>{{data.gameName}}</p>
								<p class="detail_3_p"> <strong>{{data.gameTags[0]}}</strong> <strong>{{data.gameTags[1]}}</strong></p>
								<p @click="chang(data.gameName,data.gameId)" style="cursor: pointer;">点击进入专区</p>
								</div>
								
								</div>
								<el-divider></el-divider>
							</div>
						</div>

						<div class="col-md-4 detail_3_item ">
							<h3>官方信息</h3>
							<p>开发商：{{datalist.gameMadeBy}}</p>
							<p>游戏官网：<a :href="datalist.gameSiteUrl" target="_blank">{{datalist.gameSiteUrl}}</a></p>
							<p>发售时间:
{{datalist.gamePublishAt}}</p>
<p>所属游戏：{{datalist.gamePublishBy}}</p>
							<div v-if="!datalist.gameBuyUrl">
								<a :href="datalist.gameSiteUrl" target="_blank"><button class="btn">{{datalist.gameDownloadText}}</button></a>
								<el-divider></el-divider>
								<h3>服务区</h3>
								<a :href="datalist.gameSiteUrl" target="_blank"><button class="btn btn-danger btn-block">{{datalist.gameDownloadText}}</button></a>
							</div>
							<div v-else>

								<a :href="datalist.gameBuyUrl" target="_blank"><button class="btn">{{datalist.gameDownloadText}}</button></a>
								<el-divider></el-divider>
								<h3>服务区</h3>
								<a :href="datalist.gameDownloadUrl" target="_blank"><button class="btn btn-danger btn-block">{{datalist.gameDownloadText}}</button></a>
							</div>
							<el-divider></el-divider>
							<h3>单机游戏排行榜</h3>
							<div class="row">
								<div class="col-md-4 detail_3_title" v-for="data in rankStandalone" @click="chang(data.gameName,data.gameId)">
									<div>
										<img :src="data.gameIcon" alt="" width="100%">

									</div>
									<p style="padding-top: 10px;">{{data.gameName}}</p>
								</div>
							</div>
							<el-divider></el-divider>
							<h3>网络游戏排行榜</h3>
							<div class="row">
								<div class="col-md-4 detail_3_title" v-for="data in rankClient" @click="chang(data.gameName,data.gameId)">
									<div>
										<img :src="data.gameIcon" alt="" width="100%">
								
									</div>
									<p style="padding-top: 10px;">{{data.gameName}}</p>
									
								</div>
							</div>
<el-divider></el-divider>
						</div>


					</div>
				</div>

			</div>
		</div>
		<footerbar></footerbar>
	</div>
</template>

<script>
	import axios from 'axios'
	import navbar from '@/components/Navbar.vue'
	import footerbar from '@/components/footerbar.vue'
	import swiper from '@/views/film/Swiper.vue'
	export default {
		components: {
			navbar,
			footerbar,
			swiper
		},
		data() {
			return {
				show:false,
				gameLinks: [],
				gameTypes: [],
				datalist: [],
				videolist: [],
				newlist: [],
				tablist: [],
				rankStandalone: [],
				rankClient: [],
				gameRecommends:[]
			}
		},
		methods:{
			chang(name,id){
				this.$router.push(`/detail_3/${name}/${id}`)
				this.$router.go(0)
			}
		},
		mounted() {
			axios({
				url: `/lewanapi?action=community_game_info&gameName=${this.$route.params.name}&type=&gameType=&gameId=${this.$route.params.id}`
			}).then((res) => {
				console.log(res.data)
				this.datalist = res.data.result.data.gameInfo
				this.newlist = res.data.result.data.gameNews
				this.tablist = res.data.result.data.gameTabs
				this.videolist = res.data.result.data.gameVideos
				this.gameTypes = res.data.result.data.gameInfo.gameTypes
				this.gameLinks = res.data.result.data.gameInfo.gameLinks[0]
				this.rankClient = res.data.result.data.rankClient
				this.rankStandalone = res.data.result.data.rankStandalone
				this.gameRecommends =res.data.result.data.gameInfo.gameRecommends
			})
		},
		
		}
</script>

<style>
	.detail_3_title{
		cursor: pointer;
	}
	.detail_3-video {
		overflow: hidden;
	}

	.detail_3-video:hover {
		cursor: pointer;
	}

	.detail_3-video img {
		width: 100%;
		transition: .5s;
	}

	.detail_3-video img:hover {
		transform: scale(1.2);

	}

	.detail_3_item {
		background: white;
		margin: 20px;
		padding-left: 20px;
		padding-bottom: 10px;
	}

	.detail_3_item h3 {
		padding: 15px 0;


	}

	.detail_3_item ul {
		list-style: circle;
		padding-left: 15px;
	}

	.detail_3_item ul li {
		list-style: circle;
	}

	.detail_3_item ul li i {
		float: right;
		padding-right: 15px;
	}

	.detail_3_item a {
		color: #000000;
		text-decoration: none;
		transition: .5s;
	}

	.detail_3_item a:hover {
		text-decoration: none;
		color: red;
	}

	.detail_Img .detail_3_text {
		color: white;
		margin-top: 20px;
		font-size: 20px;
		
	}

	.detail_Img .detail_3_text a {
		color: red;
		transition: 1s;
		text-decoration: none;
	}

	.detail_Img .detail_3_text a:hover {
		color: white;

	}

	.detail_3 {
		margin-top: 50px;
		min-height: 800px;
		background: ghostwhite;
	}

	.gameHeader {
		width: 100%;
		height: 310px;
		background: url(https://bj.bcebos.com/fenwan/cms/gamenow/2020-12/1607915611012/775394f0f360.jpg) 50% no-repeat;
		background-size: auto 100%;
	}
	.detail_3_gameRecommends p{
		padding: 5px;
	}
	.detail_3_gameRecommends .detail_3_p strong{
		
		overflow: hidden;
		
	}
</style>
