<template>
	<div>
		<div class="allgameview">
			<div class="ubi-title">
				<h2 >新游预购</h2>
			</div>
		
			<div class="swiper-container gameswiper container" ref="gameswiper">
				<div class="swiper-wrapper container">
					<div class="swiper-slide" v-for="data in datalist" :key='data.id'>
						<div class="gamelist center-block" id="gamelist">
							<div class="game-item" @click="Chang(data.game_id)">
								<div class="thumbnail">
									<div class="thumb-pic">
											<img :src="data.image" alt="">
									</div>
									<div class="caption">
										<h3>{{data.game_name.zh}}</h3>
										<p>发布时间：{{data.publishDate}}</p>
										<div class="platform-ico">
											<div class="pc-ico"></div>
											<div class="cons-ico"></div>
										</div>
									</div>
									<img alt="" class="CardGame__shadow" src="https://cdn.hommk.com/pcgame/ubi2015/img/u2019/shadow.jpg">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- <div class="gamesprev" @click="prev()"></div>
			<div class="gamesnext" @click="next()"></div> -->
		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper/swiper-bundle.min.js'
	import 'swiper/swiper-bundle.min.css'
	import axios from 'axios'
	export default {
		data() {
			return {
				datalist: [],
				list: ["https://www.ubisoft.com.cn"]
			}
		},
		mounted() {
			axios({
				url:'https://api-node.cdn.namejin.com/originApiQ/api/gog/gameList?channel=bdth10jj&page=1&pageSize=20&ids=2089,890,290'
			}).then((res)=>{
				console.log(res.data.data.data)
				this.datalist = res.data.data.data
			})
		},
		methods: {
			// prev() {
			// 	this.$refs.gameswiper.swiper.slidePrev();
			// },
			// next() {
			// 	this.$refs.gameswiper.swiper.slideNext();
			// },
			Chang(id){
			this.$router.push(`/detail_2/${id}`)
							
		}
		},
		updated() {
			var gameSwiper = new Swiper('.gameswiper', {
				slidesPerView: 1,
				slidesPerGroup: 1,
				loop: false,
				 pagination: {
				    el: '.swiper-pagination',
					
				  },
				breakpoints: {
						500:{
							slidesPerView: 1,
							slidesPerGroup: 1,
						},
					    768: {
					      slidesPerView: 2,
						  slidesPerGroup: 2,
					    },
						950:{
							slidesPerView: 3,
							slidesPerGroup: 3,
						},
						1500:{
							slidesPerView: 3,
							slidesPerGroup: 3,
						}
					  }
			})
		}
	}
</script>

<style>
	.gamesprev {
		float: left;
		padding: 14px 25px;
		background-color: rgba(0, 0, 0, .15);
		border-bottom-right-radius: 30px;
		border-top-right-radius: 30px;
		transition: background-color 0.5s;
		cursor: pointer;
	}

	.gamesnext {
		float: right;
		padding: 14px 25px;
		background-color: rgba(0, 0, 0, .15);
		border-bottom-left-radius: 30px;
		border-top-left-radius: 30px;
		transition: background-color 0.5s;
		cursor: pointer;
	}

	.gamesprev:after {
		content: url(../../assets/ban_prev.png);
	}

	.gamesnext:after {
		content: url(../../assets/ban_next.png);
	}

	.gamesprev:hover {
		background-color: rgba(0, 0, 0, .3);
	}

	.gamesnext:hover {
		background-color: rgba(0, 0, 0, .3);
	}
</style>
