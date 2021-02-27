<template>
	<div>
		<div class="banner" id="banner">
			<div class="swiper-container bannerswiper" ref="bannerswiper">
				<div class="swiper-wrapper">
					<slot></slot>
				</div>
				<div class="swiper-scrollbar"></div>
			</div>
			
		</div>
		<div class="banner_np">		
				</div>
		<div class="bannerprev" @click="bprev()"></div>
		<div class="bannernext" @click="bnext()"></div>
	</div>

</template>

<script>
	import Swiper from 'swiper/swiper-bundle.min.js'
	import 'swiper/swiper-bundle.min.css'
	export default {
		data() {
			return {
				datalist: [

				]
			}
		},
		mounted() {
			var bannerswiper = new Swiper('.bannerswiper', {
				autoplay: {
					delay: 3000, //1秒切换一次
				},
				 effect : 'fade',
				loop: true,
				speed: 1000,
				keyboard : true,
				pagination: {
					el: '.swiper-pagination',
					 clickable :true,
	},
	scrollbar: {
	    el: '.swiper-scrollbar',
		draggable: true,
		
	  },
	
			})
			  bannerswiper.scrollbar.$dragEl.css('background','yellow');
			  
		},
		methods: {
			bprev() {
				this.$refs.bannerswiper.swiper.slidePrev();
			},
			bnext() {
				this.$refs.bannerswiper.swiper.slideNext();
			},
			
		},
		components: {
			Swiper
		}
	}
</script>
<style>
	.banner {
		padding-top: 50px;
		width: 100%;
		
	}

	.banner .swiper-container {
		width: 100%;
		height: 700px;
		position: relative;
	}

	.banner .swiper-wrapper {
		transition: 2s cubic-bezier(0.68, -0.4, 0.27, 1.34) 0.2s;
	}


	.banner .swiper-slide {
		position: relative;
		color: #fff;
		overflow: hidden;
		background-size: cover;
		background-repeat: no-repeat;
	}

	.banner .swiper-slide::after {
		content: "";
		position: absolute;
		z-index: 1;
		right: -115%;
		bottom: -10%;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.7);
		box-shadow: -230px 0 150px 60vw rgba(0, 0, 0, 0.7);
		border-radius: 100%;
	}

	.banner .swiper-slide-content {
		position: absolute;
		text-align: center;
		width: 80%;
		min-width: 310px;
		right: 50%;
		top: 20%;
		-webkit-transform: translate(50%, 0);
		transform: translate(50%, 0);
		font-size: 12px;
		z-index: 2;
	}

	.banner .swiper-slide .banner-year {
		display: block;
		font-style: italic;
		font-size: 30px;
		margin-bottom: 50px;
		-webkit-transform: translate3d(20px, 0, 0);
		transform: translate3d(20px, 0, 0);
		color: #d4a024;
		font-weight: 400;
		opacity: 0;
		transition: .2s ease .4s;
	}

	.banner .swiper-slide .banner-title {
		/* font-weight: 1000; */
		font-size: 30px;
		margin: 0 0 30px;
		opacity: 0;
		-webkit-transform: translate3d(20px, 0, 0);
		transform: translate3d(20px, 0, 0);
		transition: .2s ease .5s;
	}

	.banner .swiper-slide .banner-text {
		line-height: 1.5;
		font-size: 30px;
		opacity: 0;
		-webkit-transform: translate3d(20px, 0, 0);
		transform: translate3d(20px, 0, 0);
		transition: .2s ease .6s;
	}

	.banner .swiper-slide-active .banner-year {
		opacity: 1;
		-webkit-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
		transition: .4s ease 1.6s;
	}

	.banner .swiper-slide-active .banner-title {
		opacity: 1;
		-webkit-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
		transition: .4s ease 1.7s;
	}

	.banner .swiper-slide-active .banner-text {
		opacity: 1;
		-webkit-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
		transition: .4s ease 1.8s;
	}

	.banner_np {
		background: url(https://cdn.hommk.com/pcgame/ubi2015/img/u2019/bar.png);
		width: 100%;
		height: 100px;
		z-index: 9;
		transition: .2s;
		position: relative;
		top: -30px;

	}

	.bannerprev,
	.bannernext {
		position: relative;
		top: -100px;
		z-index: 10;
	}

	.bannerprev {
		float: left;
		padding: 14px 25px;
		background-color: rgba(0, 0, 0, .15);
		border-bottom-right-radius: 30px;
		border-top-right-radius: 30px;
		transition: background-color 0.5s;
		cursor: pointer;
	}

	.bannernext {
		float: right;
		padding: 14px 25px;
		background-color: rgba(0, 0, 0, .15);
		border-bottom-left-radius: 30px;
		border-top-left-radius: 30px;
		transition: background-color 0.5s;
		cursor: pointer;
	}

	.bannerprev:after {
		content: url(../../assets/ban_prev.png);
	}

	.bannernext:after {
		content: url(../../assets/ban_next.png);
	}

	.bannerprev:hover {
		background-color: gray;
	}

	.bannernext:hover {
		background-color: gray;
	}

	@media screen and (min-width: 768px) {
		.banner .swiper-container {
			height: 700px;
			width: 100%;
			position: relative;
		}

		.bannerprev,
		.bannernext {
			position: relative;
			top: -220px;
		}

		.banner_np {
			background: url(https://cdn.hommk.com/pcgame/ubi2015/img/u2019/bar.png);
			width: 100%;
			height: 100px;
			z-index: 9;
			transition: .2s;
			position: relative;
			top: -150px;
		}

		.banner .swiper-slide .banner-year {
			display: block;
			font-style: italic;
			font-size: 30px;
			margin-bottom: 50px;

		}

		.banner .swiper-slide .banner-title {
			font-weight: 1000;
			font-size: 30px;

		}

		.banner .swiper-slide .banner-text {
			line-height: 1.5;
			font-size: 30px;

		}

	}

	@media screen and (min-width: 992px) {
		.banner .swiper-container {
			height: 700px;
			width: 100%;
			position: relative;
		}

		.bannerprev,
		.bannernext {
			position: relative;
			top: -220px;
		}

		.banner_np {
			background: url(https://cdn.hommk.com/pcgame/ubi2015/img/u2019/bar.png);
			width: 100%;
			height: 100px;
			z-index: 9;
			transition: .2s;
			position: relative;
			top: -150px;
		}

		.banner .swiper-slide .banner-year {
			display: block;
			font-style: italic;
			font-size: 30px;
			margin-bottom: 50px;

		}

		.banner .swiper-slide .banner-title {
			font-weight: 1000;
			font-size: 50px;

		}

		.banner .swiper-slide .banner-text {
			line-height: 1.5;
			font-size: 30px;

		}

	}

	@media screen and (min-width: 1200px) {
		.banner .swiper-container {
			height: 700px;
			width: 100%;
			position: relative;
		}

		.bannerprev,
		.bannernext {
			position: relative;
			top: -220px;
		}

		.banner_np {
			background: url(https://cdn.hommk.com/pcgame/ubi2015/img/u2019/bar.png);
			width: 100%;
			height: 100px;
			z-index: 9;
			transition: .2s;
			position: relative;
			top: -150px;
		}

		.banner .swiper-slide .banner-year {
			display: block;
			font-style: italic;
			font-size: 40px;
			margin-bottom: 50px;

		}

		.banner .swiper-slide .banner-title {
			font-weight: 1000;
			font-size: 80px;

		}

		.banner .swiper-slide .banner-text {
			line-height: 1.5;
			font-size: 30px;

		}

	}
</style>
