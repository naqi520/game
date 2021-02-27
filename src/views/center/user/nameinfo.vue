<template>
	<div>
		<div class="calendar">
			<div class="daten">
				<div class="shijian">时间</div>
				<div>{{nowDate}}</div>
				<div>{{nowTime}}</div>
				<div>{{nowWeek}}</div>
			</div>
		</div>
	</div>
</template>
<script>
	import axios from 'axios'
	export default {
		data() {
			return {
			dialogFormVisible:false,
			address:'',
			profile:'',
			nowDate :'',
			nowTime :'',
			nowWeek:''
			}
		},
		mounted() {
			this.timer = setInterval(() => {
				this.setNowTimes()
			}, 1000)	
		},
		methods: {
			setNowTimes() {
				let myDate = new Date()
				// console.log(myDate)
				let wk = myDate.getDay()
				let yy = String(myDate.getFullYear())
				let mm = myDate.getMonth() + 1
				let dd = String(myDate.getDate() < 10 ? '0' + myDate.getDate() : myDate.getDate())
				let hou = String(myDate.getHours() < 10 ? '0' + myDate.getHours() : myDate.getHours())
				let min = String(myDate.getMinutes() < 10 ? '0' + myDate.getMinutes() : myDate.getMinutes())
				let sec = String(myDate.getSeconds() < 10 ? '0' + myDate.getSeconds() : myDate.getSeconds())
				let weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
				let week = weeks[wk]
				this.nowDate = yy + '年'+'-' + mm +'月'+ '-' + dd +'日'
				this.nowTime = hou + ':' + min + ':' + sec
				this.nowWeek = week
			},
		
	
		},
		
	}
</script>
<style>
.daten {
		width: 100%;
		text-align: center;
		font-size: 16px;
		float: right;
		border-radius: 5px;
		transition: 1s;
		/* box-shadow: 0 5px 25px 5px rgba(0, 0, 0, 0.2); */
	}
	.daten div{
		padding-top: 5px;
	}
	
</style>
