<template>
	<div>
		<div class="newstitle">
			<h1>{{datalist.subject}}</h1>
			<p>{{datalist.updatedAt}}</p>
		</div>
		<div class="newsview container" :id="datalist.category">
			<div class="center">
			<div class="title1">{{datalist.subject}}</div>
			<div class="news-date">{{datalist.updatedAt}}</div>
			</div>
	<div class="news-content" v-html="datalist.content">
	{{datalist.content}}
		</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import navbar from '@/components/Navbar.vue'
	import footerbar from '@/components/footerbar.vue'
	export default{
		// template:"{{datalist}}",
		// props:['id'],
		data (){
			return {
				datalist:[]
			}
		},
		mounted() {
			// console.log("id信息",this.$route.params.id)
			// https://www.ubisoft.com.cn/api/news/14
		axios({
					
					 url: `/api/news/${this.$route.params.id}`,
		}).then(res => {
		  // console.log(res.data)
		  this.datalist = res.data
		  
		})
		},
		components: {
			navbar,
			footerbar
		},
	}
</script>

<style lang="scss">
@media screen and (min-width: 768px){
.news-content video {
    max-width: 80%;
	height: 500px;
	
}
.news-content p img {
    width: 50%;
}
}
.news-content video{
	width: 100%;
}
.news-content p {
	font-size: 18px;
}
.news-content p img{
	width: 100%;
}
	.newsview{
		padding: 50px 0 30px;
	}
	.bimg{
		background: url(https://www.ubisoft.com.cn/img/newsbg.jpg) left top;
		height: 100px;
		    background-size:cover;
		    padding-top: 300px;
	}
	.news-content{
		padding: 50px 0 0 ;
	}
	.newsview .center{
		text-align: center;
		.title1{
			font-size: 30px;
			    font-weight: bold;
			    line-height: 1.2;
				color: #454545;
		}
		.news-date{
			    font-size: 18px;
			    
			    line-height: 2;
		}
	
	}
</style>
