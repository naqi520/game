<template>

	<div>
		<navbar></navbar>
		<div class="newstitle">
			<h1>精选游戏</h1>
			<div class="input-group">
				<input type="text" class="form-control" placeholder="你想找啥游戏？" v-model="game">
				<span class="input-group-btn">
					<button class="btn btn-danger" type="button" @click="chazhao">搜索</button>
				</span>
			</div><!-- /input-group -->
		</div>
		<div class="ranking" style="width: 100%;">
			<div class="container">
				<div class="row">
					<div class="ranking_emmu ">
						<div class="col-md-2  col-xs-5">
							<nav class="navbar" style="box-shadow: 0 5px 25px 5px rgba(0, 0, 0, 0.2);background: #151515; color: #aaa;">
								<h2>平台</h2>

								<p v-for="(data,index) in title" :key="index" :class="{Mactive : index === onindex1}" @click="change(index,data.id)">
									{{data.title}}
								</p>
							</nav>
							<nav class="navbar navbar-default" style="box-shadow: 0 5px 25px 5px rgba(0, 0, 0, 0.2);">
								<h2>标签</h2>

								<p v-for="(data , index) in title1" :key="index" :class="{Mactive : index === onindex}" @click="chang(index,data.id)">
									{{data.title}}
								</p>
							</nav>

						</div>
						<div class="col-md-10  col-xs-7">
							
								<section class="ranking_item">
									<div class="row ranking_title" v-for="data in datalist">
										<div class="col-md-4 " @click="changa(data.game_id)">
											<img :src="data.image" alt="">
										</div>
										<div class="col-md-8  ranking_text">
											<h2>{{data.game_name.zh}}</h2>
											<h2>{{data.game_name.en}}</h2>
											<p>{{data.publishDate}}</p>
											<p>{{data.tag.zh}}</p>
											<p v-show="show">{{data.tag.en}}</p>
											<p v-show="show">{{data.introduction}}</p>
											<p @click="show=!show">查看更多</p>
										</div>


									</div>
								</section>
								<div class="pagination">
									<el-pagination @current-change="handleCurrentChange" :current-page="currentPage" layout="prev, pager, next"
									 :total="page.last_page * 10">
									</el-pagination>
								</div>
							

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
	export default {
		data() {
			return {
				game: '',
				page: [],
				show: false,
				datalist: [],
				currentPage: 1,
				title: [{
						"title": "全部",
						"id": ''
					},
					{
						"title": "steam",
						"id": '1'
					},
					{
						"title": "uplay",
						"id": '4'
					},
					{
						"title": "Epic",
						"id": '5'
					},
					{
						"title": "Origin",
						"id": '2'
					},

				],
				title1: [{
						"title": "全部",
						"id": ''
					},
					{
						"title": "新游",
						"id": '1'
					},
					{
						"title": "恐怖",
						"id": '13'
					},
					{
						"title": "生存",
						"id": '4'
					},
					{
						"title": "独立",
						"id": '29'
					},
					{
						"title": "动作",
						"id": '8'
					},
					{
						"title": "冒险",
						"id": '20'
					},
					{
						"title": "角色扮演",
						"id": '10'
					},
					{
						"title": "策略",
						"id": '5'
					},
					{
						"title": "休闲",
						"id": '31'
					},
					{
						"title": "模拟",
						"id": '14'
					},
					{
						"title": "多人",
						"id": '2'
					}
				],
				game: "",
				datalist: [],
				onindex: 0,
				onindex1: 0,
				Id: ''
			}
		},
		components: {
			navbar,
			footerbar
		},
		methods: {
			handleCurrentChange: function(currentPage) {
				this.currentPage = currentPage;
				if (this.game !== "") {
					axios({
						url: `https://api-node.cdn.namejin.com/originApiQ/api/gog/gameList?channel=bdth10jj&page=${currentPage}&pageSize=20&key=${this.game}&platform=&tag_id=&isSupportArchive=&isAdded=`
					}).then((res) => {
						// console.log(res.data)
						this.datalist = res.data.data.data
						this.page = res.data.data
					})
					return
				}
				if (this.onindex == this.onindex1) {
					axios({
						url: `https://api-node.cdn.namejin.com/originApiQ/api/gog/gameList?channel=bdth10jj&page=${currentPage}&pageSize=20&key=&platform=&tag_id=&isSupportArchive=&isAdded=`
					}).then((res) => {
						// console.log(res.data)
						this.datalist = res.data.data.data
						this.page = res.data.data
					})
					return
				}
				if (this.Id == '') {
					axios({
						url: `https://api-node.cdn.namejin.com/originApiQ/api/gog/gameList?channel=bdth10jj&page=${currentPage}&pageSize=20&key=&platform=${this.Id1}&tag_id=&isSupportArchive=&isAdded=`
					}).then((res) => {
						// console.log(res.data)
						this.datalist = res.data.data.data
						this.page = res.data.data
					})
				} else {
					axios({
						url: `https://api-node.cdn.namejin.com/originApiQ/api/gog/gameList?channel=bdth10jj&page=${currentPage}&pageSize=20&key=&platform=&tag_id=${this.Id}&isSupportArchive=&isAdded=`
					}).then((res) => {
						// console.log(res.data)
						this.datalist = res.data.data.data
						this.page = res.data.data
					})
				}

			},
			chang(index, id) {
				this.game = ''
				this.onindex = index
				this.currentPage = 1
				if (this.onindex == 0) {
					this.onindex1 = index
				} else {
					this.onindex1 = ""
				}
				this.Id = id
				if (index == 1) {
					axios({
						url: `https://api-node.cdn.namejin.com/originApiQ/api/gog/gameList?channel=bdth10jj&page=1&pageSize=20&key=&platform=&tag_id=&isSupportArchive=&isAdded=${id}`
					}).then((res) => {
						// console.log(res.data)
						this.datalist = res.data.data.data
						this.page = res.data.data
					})
				} else {
					axios({
						url: `https://api-node.cdn.namejin.com/originApiQ/api/gog/gameList?channel=bdth10jj&page=1&pageSize=20&key=&platform=&tag_id=${id}&isSupportArchive=&isAdded=`
					}).then((res) => {
						// console.log(res.data)
						this.datalist = res.data.data.data
						this.page = res.data.data
					})
				}

			},
			changa(id) {
				this.$router.push(`/detail_2/${id}`)
			},
			change(index, id) {
				this.onindex1 = index
				this.Id1 = id
				this.game = ''
				this.currentPage = 1
				if (this.onindex1 == 0) {
					this.onindex = index
				} else {
					this.onindex = ""
				}
				axios({
					url: `https://api-node.cdn.namejin.com/originApiQ/api/gog/gameList?channel=bdth10jj&page=1&pageSize=20&key=&platform=${id}&tag_id=&isSupportArchive=&isAdded=`
				}).then((res) => {
					// console.log(res.data)
					this.datalist = res.data.data.data
					this.page = res.data.data
				})
			},
			chazhao() {
				axios({
					url: `https://api-node.cdn.namejin.com/originApiQ/api/gog/gameList?channel=bdth10jj&page=1&pageSize=20&key=${this.game}&platform=&tag_id=&isSupportArchive=`
				}).then((res) => {
					// console.log(res.data)
					this.datalist = res.data.data.data
					this.page = res.data.data
				})
			}
		},
		mounted() {
			axios({
				url: `https://api-node.cdn.namejin.com/originApiQ/api/gog/gameList?channel=bdth10jj&page=1&pageSize=20&key=&platform=&tag_id=&isSupportArchive=&isAdded=`
			}).then((res) => {
				// console.log(res.data)
				this.datalist = res.data.data.data
				this.page = res.data.data
			})
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

<style>
	.Mactive {
		background: gray;
		color: white;
		transition: 1s;
	}

	.Mactive:hover {
		transform: translateX(10px);
	}

	.ranking_title {
		border-radius: 50px;
		cursor: pointer;
		/* width: 100%; */
		/* margin-top: 20px;
		margin-left: 5px; */
		overflow: hidden;
		transition: 1s;
	}

	.ranking_title:hover {
		transform: translateY(10px);
		box-shadow: 0 5px 25px 5px rgba(0, 0, 0, 0.2);
	}

	.ranking_emmu {
		width: 100%;
		line-height: 50px;
		border-radius: 50px;
		margin-top: 20px;
	}

	.ranking_emmu p {
		cursor: pointer;
		text-align: center;
		transition: 1s;
	}

	.ranking_emmu div {
		cursor: pointer;
		border-radius: 50px;
		text-align: center;
	}

	.ranking_text {
		font-size: 10px;
	}

	.ranking_text h2 {
		font-size: 16px;
		font-style: oblique;
		font-weight: 500;
	}

	.ranking {
		width: 100%;
		color: rgba(0, 0, 0, .65);
		margin-bottom: 15px;
	}

	.ranking img {
		border-radius: 50px;
		width: 100%;
		height: 100%;
		margin-top: 10px;
	}
</style>
