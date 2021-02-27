<template>
	<div id="Ranking">
		<div class="ubi-title">
			<h2 style="color: black;">游戏</h2>
		</div>
		<el-divider></el-divider>
		<div class="swiper-container Rankingswiper container " ref="Rankingswiper">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="data in datalist">
					<div class="row" style="width: 100%;">
						<div class="col-md-9">
							<div class="rangking-pic">
								<img :src="data.image" alt="" width="100%">
							</div>
						</div>
						<div class="col-md-3">
							<div class="rangking-title">
								<h2>{{data.game_name.zh}}</h2>
								<h4>{{data.game_name.en}}</h4>
								<p class="rangking-text">{{data.tag.zh}}</p>
								<p>{{data.introduction}}</p>
								<button class="ubimore" @click="change(data.game_id)" style="margin-top: 20px;">查看详情</button>
							</div>

						</div>
					</div>
				</div>
		
			</div>

		</div>
	
		<div class="bannerprev" @click="bprev()"></div>
		<div class="bannernext" @click="bnext()"></div>
			<button class="ubimore" @click="chang()" style="margin-top: 20px;">更多steam游戏</button>
			<el-divider></el-divider>
	</div>
</template>

<script>
	import axios from 'axios'
	import Swiper from 'swiper/swiper-bundle.min.js'
	import 'swiper/swiper-bundle.min.css'
	export default {
		data() {
			return {
				datalist: [],
			}
		},
		components: {

		},
		methods: {
			chang(){
				axios({
					method: "post",
					url: '/api2/users/getUser',
				}).then((res) => {
					// console.log(res)
					var status = res.data.status
					if(status==0){
				this.$router.push("/ranking")
					}else{
						this.$router.push("/center/login")	
					}
					
				})
				
			},
			change(id) {
				console.log(id)
				this.$router.push(`/detail_2/${id}`)
			},
			bprev() {
				this.$refs.Rankingswiper.swiper.slidePrev();
			},
			bnext() {
				this.$refs.Rankingswiper.swiper.slideNext();
			},
		},
		mounted() {
			axios({
				url: `https://api-node.cdn.namejin.com/originApiQ/api/gog/gameList?channel=bdth10jj&page=1&pageSize=10&key=&platform=1&tag_id=&isSupportArchive=&isAdded=`
			}).then((res) => {
				// console.log(res.data.data)
				this.datalist = res.data.data.data
			})

		},
		updated() {
			var mySwiper = new Swiper('.Rankingswiper', {
				slidesPerView: 1,
				slidesPerGroup: 1,
				loop: true, // 循环模式选项
				autoplay: {
					delay: 3000, //1秒切换一次
				},
				effect: 'cube',
				keyboard: true,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},

			})
		}
	}
</script>

<style>
	#Ranking {
		width: 100%;
		
		overflow: hidden;
		
		background-color: gainsboro;
	}

	.rangking-pic {
		border-radius: 10px;
		margin: 15px;
		width: 100%;
		overflow: hidden;
		box-shadow: 0 1px 5px 5px rgba(0, 0, 0, 0.2);
	}

	.rangking-pic img {
		border-radius: 10px;
		width: 100%;
		height: 100%;
	}

	.rangking-title {
		margin: 15px;
		width: 100%;
		padding: 10px;
		min-height: 200px;
		border-radius: 10px;
		box-shadow: 0 1px 5px 5px rgba(0, 0, 0, 0.2);
	}

	.rangking-title p {
		padding-top: 25px;
	}
</style>
