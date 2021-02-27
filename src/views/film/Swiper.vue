<template>
	<div>
		
			<div class="timeline">
				<div class="swiper-container timelineswiper  container">
					<div class="swiper-wrapper">
						<slot></slot>
					</div>
				</div>
			</div>
		
	</div>
</template>

<script>
	import Swiper from 'swiper/swiper-bundle.min.js'
	import 'swiper/swiper-bundle.min.css'
	export default {
		data() {
			return {
			}
		},
		mounted() {
			var mySwiper = new Swiper('.timelineswiper', {
				slidesPerView: 1,
				slidesPerGroup: 1,
				loop: true, // 循环模式选项
				autoplay: {
					delay: 3000, //1秒切换一次
				},
				// 如果需要分页器
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

		},
		methods: {
			
		}
	}
</script>

<style>
	.timeline {
		height: 400px;
	}

	.timeline img {
		width: 400px;
		height: 400px;
	}
</style>
