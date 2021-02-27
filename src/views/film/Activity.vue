<template>
	<div>
		<div class="paihang">
		<div class="ubi-title">
			<h2 style="color: black;">排行榜</h2>
		</div>
		<el-divider></el-divider>
		<div class="container">
			<div class="row">
				<div class="col-md-2 col-xs-3">
					<div v-for="(data,index) in name" :key="index" @click="change(data.typeId,index)" :class="{Mactive : index === onindex1}"
					 style="text-align: center;margin-top: 15px;cursor: pointer;padding-top: 15px;height: 50px;"><p>{{data.typeName}}</p></div>
				</div>
				<div class="col-md-10 col-xs-9">
					<div class="activity" style="margin: 15px 0;">
						<div>排名</div>
						<div>
							游戏信息</div>
						<div>专栏</div>
					</div>
					
						<div class="row title-item" v-for="(data,index) in gamelist">
							<div class="title-img" >
								<div class="col-md-2 col-xs-4" @click="changa(data.gameName,data.gameId)">
									<div class="first">
										{{index+1}}
									</div>
									<img :src="data.gameIcon" alt="" width="100%">
									<p class="pingfen">{{data.gameScore}}</p>
								</div>
								<div class="col-md-6 col-xs-6">
									<p>{{data.gameName}}</p>
									<small>{{data.gameNameEn}}</small>
									<p class="title-text">{{data.gameDesc}}</p>

									<div v-if="data.gameLoginUrl">
										<p><a :href="data.gameLoginUrl" target="_blank">开始游戏</a></p>
									</div>
									<div v-else></div>
								</div>
								<div class="col-md-2 col-xs-2">
									<p @click="changa(data.gameName,data.gameId)" style="padding-top: 15px;">进入专区</p>
									<p v-if="data.gameOfficialUrl !==''" style="padding-top: 15px;">
										<a :href="data.gameOfficialUrl" target="_blank">官网</a>
									</p>
									<p v-else style="padding-top: 15px;"></p>
								</div>
							</div>

						</div>


					
				</div>




			</div>
		
		</div>
	<div class="pagination" >
		<el-pagination 
		 @current-change="handleCurrentChange" 
		 :current-page="currentPage"  
		 layout="prev, pager, next"
		 :total="page.total"> 
		</el-pagination>
	</div>
	<button class="ubimore" @click="chang()" style="margin-top: 20px;">其他排行</button>
	<el-divider></el-divider>
	</div>
	</div>
</template>
<script>
	import axios from 'axios'

	export default {
		data() {
			return {
				Id:'5964',
				page: [],
				currentPage: 1,
				gamelist: [],
				onindex1: 0,
				datalist: [],
				name: [{
						typeId: "5964",
						typeName: "动作游戏"
					},
					{
						typeId: "5914",
						typeName: "角色扮演"
					},
					{
						typeId: "6034",
						typeName: "冒险游戏"
					},
					{
						typeId: "5995",
						typeName: "第一人称射击"
					},
					{
						typeId: "5961",
						typeName: "策略战棋"
					},
					{
						typeId: "6010",
						typeName: "模拟经营"
					},
					{
						typeId: "5997",
						typeName: "休闲益智"
					},
					{
						typeId: "5970",
						typeName: "第三人称射击"
					},
					{
						typeId: "6018",
						typeName: "赛车竞速"
					},
					{
						typeId: "5916",
						typeName: "即时战略"
					},
					{
						typeId: "16290",
						typeName: "策略"
					},
					{
						typeId: "70473",
						typeName: "生存"
					},
					{
						typeId: "5972",
						typeName: "格斗游戏"
					},
					{
						typeId: "6015",
						typeName: "体育竞技"
					},
					{
						typeId: "70472",
						typeName: "模拟"
					},
					{
						typeId: "6048",
						typeName: "动作射击"
					},
					{
						typeId: "70470",
						typeName: "竞技"
					},
					{
						typeId: "70474",
						typeName: "武侠"
					},
					{
						typeId: "70478",
						typeName: "沙盒"
					},
					{
						typeId: "70480",
						typeName: "火影忍者"
					},
					{
						typeId: "70479",
						typeName: "街机"
					},
					{
						typeId: "70471",
						typeName: "模拟战争"
					},
					{
						typeId: "5989",
						typeName: "桌面棋牌"
					},
					{
						typeId: "5999",
						typeName: "飞行游戏"
					},
					{
						typeId: "6245",
						typeName: "其他游戏"
					},
					{
						typeId: "70476",
						typeName: "文字"
					},
					{
						typeId: "70475",
						typeName: "回合制"
					},

				]
			}
		},
		mounted() {
			console.log(this.Id)
			axios({
				url: '/lewanapi?action=aladdin_rank_games_by_type&page=1&typeId=5964&gameSource=standalone'
			}).then(res => {
				console.log(res.data.result)
				this.gamelist = res.data.result.data.list
				this.page = res.data.result.data
			})
		},
		methods: {
			handleCurrentChange: function(currentPage){
			        this.currentPage = currentPage;
					console.log(this.Id)
					axios({
						url:`/lewanapi?action=aladdin_rank_games_by_type&page=${currentPage}&typeId=${this.Id}&gameSource=standalone`
					}).then((res)=>{
						console.log(res.data.result)
						this.gamelist = res.data.result.data.list
						this.page = res.data.result.data
					})
					
				
			},
			changa(name,id){
				this.$router.push(`/detail_3/${name}/${id}`)
			},
			change(id, index) {
				this.Id = id
				console.log(this.Id)
				this.onindex1 = index
				this.currentPage = 1
				axios({
					url: `/lewanapi?action=aladdin_rank_games_by_type&page=1&typeId=${id}&gameSource=standalone`
				}).then(res => {
					console.log(res.data.result)
					this.page = res.data.result.data
					this.gamelist = res.data.result.data.list
				})
			},
			chang(){
				this.$router.push(`/games`)
			}
		}
	}
</script>
<style>
	.first{
		width: 20px;
		height: 20px;
		background: gainsboro;
		position: absolute;
		top: 12px;
		left: 28px;
		line-height: 20px;
		text-align: center;
		border-radius: 5px;
		z-index: 9;
	}
	.activity {
		display: flex;
	}

	.activity div{
		text-align: center;
		/* border: 1px solid black; */
		height: 50px;
		line-height: 50px;
		
	}
.activity div:nth-child(1){
		flex: 2;	
	}
	.activity div:nth-child(2){
			flex: 4;	
		}
		.activity div:nth-child(3){
				flex: 3;	
			}
	.news {
		padding-bottom: 30px;

	}

	.newsitem {
		width: 80%;
		margin: 20px auto;
		font-size: 0;
		line-height: 0;
		/* box-shadow: 0 5px 25px 5px rgba(0, 0, 0, 0.2); */
	}

	.newsitem .news-bg2 {
		width: 100%;
		min-height: 200px;
		display: inline-block;
		transition: 1s;
		vertical-align: top;
		overflow: hidden;
		position: relative;
		border-radius: 5px;
	}

	.newsitem .news-bg2:hover {
		transform: translateY(10px);
		box-shadow: 0 5px 25px 5px rgba(0, 0, 0, 0.2);

	}

	.pic {
		margin-top: 10px;
		width: 100%;
		height: 100%;
		display: inline-block;
		vertical-align: top;
	}

	.pic img {
		width: 100%;
		height: 100%;
		opacity: 1;
		cursor: pointer;
	}

	.newsitem .index {
		padding: 0 10px;
		width: 100%;
		height: 200px;
		display: inline-block;
		position: relative;
		overflow: hidden;
	}

	.newsitem .index h3 a {
		color: #000;
		font-weight: bold;
		font-size: 18px;
		line-height: 1.2;
		cursor: pointer;
	}

	.newsitem .index .date {
		color: #666;
		font-size: 14px;
		line-height: 30px;
		font-style: italic;
	}

	.newsitem .index p {
		color: #666;
		font-size: 14px;
		line-height: 18px;
	}

	@media screen and (min-width: 768px) {
		.newsitem {
			width: 640px;
		}

		.pic {
			width: 40%
		}

		.newsitem .index {
			width: 60%
		}
	}

	@media screen and (min-width: 992px) {
		.newsitem {
			width: 800px;
		}

		.pic {
			width: 50%
		}
	}

	@media screen and (min-width: 1200px) {
		.newsitem {
			width: 1140px;

		}

		.newsitem .news-bg2 {
			width: 50%;
		}

		.pic {
			width: 50%
		}

		.newsitem .index {
			width: 50%
		}
	}
</style>
