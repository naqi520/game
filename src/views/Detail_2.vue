<template>
	<div>
		<navbar></navbar>
		<div class="detail_2">
			<div>
				<div class="detail_img">
					<div v-if="datalist.bg_img !==null">
						<img :src="datalist.bg_img" alt="">
						<div class="detail_text container">
							<h2>{{namelist.zh}}</h2>
							<p>{{namelist.en}}</p>
						</div>
					</div>
					<div v-else>
						<div class="newstitle">
							<h1>{{namelist.zh}}</h1>
							<p>{{namelist.en}}</p>
						</div>
					</div>
				</div>
				<div class="container">
					<div class="row">
						<div v-if="datalist.myGameImg !==null && taglist.en !==null">
						<div class="col-md-4">
							<div class="myGameImg">
								<img :src="datalist.myGameImg" alt="">
							</div>
						</div>
						<div class="col-md-8 myGameImg_text">
							<h2>游戏类型：</h2>
							<p>{{taglist.zh}}</p>
							<p>{{taglist.en}}</p>
						</div>
						</div>
						<div v-else></div>
							
					</div>
					<div class="row">
						<div class="col-md-8">
							<h2>游戏介绍</h2>
							<div class="game_text">
								<div style="margin: 20px;padding:20px" v-html="desclist.zh"><br />{{desclist.zh}}</div>
							</div>
						</div>
						<div class="col-md-4">
							<h2>游戏信息</h2>

							<div class="game_text">
								<div class="game_title">
									<p class="Nactive">开发商：{{datalist.developer}}</p>
									<p>首发日期：{{datalist.publish_date}}</p>
									<p class="Nactive">支持的语言：{{languagelist.zh}}</p>
									<p>下载大小：{{datalist.size}}</p>
									<h3 style="padding-top: 20px;">最低配置</h3>
									<div v-if="system_requirementlist == null">
										<div v-html="system_requirementlist1.lowest"></div>
									</div>
									<div v-else>
										<div v-html="system_requirementlist.lowest"></div>
									</div>

								</div>
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
		components: {
			navbar,
			footerbar
		},
		data() {
			return {
				taglist: [],
				system_requirementlist1: [],
				system_requirementlist: [],
				languagelist: [],
				namelist: [],
				desclist: [],
				datalist: [],
			}
		},
		mounted() {
			// console.log("id信息", this.$route.params.id)
			axios({
				url: `https://api-node.cdn.namejin.com/originApiQ/api/gog/gameDetail?channel=bdth10jj&game_id=${this.$route.params.id}`
			}).then((res) => {
				console.log(res.data.data)
				this.datalist = res.data.data
				this.desclist = res.data.data.desc
				this.namelist = res.data.data.game_name
				this.languagelist = res.data.data.language
				this.system_requirementlist1 = res.data.data.system_requirement.en
				this.system_requirementlist = res.data.data.system_requirement.zh
				this.taglist = res.data.data.tag
			})
		}
	}
</script>

<style>
	.myGameImg_text {
		padding: 20px;
		border-radius: 20px;
		min-height: 300px;
		font-size: 20px;
		margin-top: 10px;
		box-shadow: 0 5px 25px 5px rgba(0, 0, 0, 0.2);
	}

	.myGameImg {
		border-radius: 20px;
		box-shadow: 0 5px 25px 5px rgba(0, 0, 0, 0.2);
		height: 300px;
		overflow: hidden;
		margin-top: 10px;
		margin-bottom: 20px;
	}

	.myGameImg img {
		border-radius: 20px;
		width: 100%;
		transition: 1s;
	}

	.myGameImg img:hover {
		transform: scale(1.5);
	}

	.game_text .Nactive {
		
		height: 40px;
		line-height: 40px;
		background-color: #353535;
	}

	.game_text p {
		padding: 15px;
		font-size: 14px;
	}

	.game_text ul li strong {
		width: 50%;
		text-align: left;
		padding-right: 10px;
	}

	.game_text ul li {
		padding-left: 10px;
		min-height: 40px;
		line-height: 40px;
	}
	.game_title {
		/* margin: 20px; */
		padding: 20px;
	}
	.game_text .game_title p{
		padding: 0;
		padding-left: 10px;
	}
	.game_text ul li:nth-child(1) {
		background-color: #353535;

	}

	.game_text ul li:nth-child(3) {
		background-color: #353535;
	}

	.game_text ul li:nth-child(5) {
		background-color: #353535;
	}

	.game_text ul li:nth-child(7) {
		background-color: #353535;
	}

	.game_text img {
		width: 100%;

	}

	.game_text {
		margin-bottom: 20px;
		color: #bbb;
		background-color: #2a2a2a;
		width: 100%;
		border-radius: 10px;
	}

	.detail_text {
		position: absolute;
		font-size: 20px;
		bottom: 0;
		left: 50px;
		z-index: 99;
		color: white;
	}

	.detail_2 {
		z-index: 4;
		
		padding-top: 50px;
		width: 100%;
		min-height: 500px;
	}

	.detail_img {
		position: relative;
	}

	.detail_img img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
