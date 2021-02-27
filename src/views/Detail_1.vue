<template>
<div>
	<navbar></navbar>
		<div class="newstitle">
			<h1>{{datalist.title}}</h1>
			<p>{{datalist.send_date}}</p>
		</div>
		<div class="newsview container" :id="datalist.article_id">
			<div class="center">
			<div class="title1">{{datalist.title}}</div>
			<div class="news-date">{{datalist.send_date}}</div>
			<div class="title1">{{datalist.abstract}}</div>
			</div>
	<div class="news-content" v-html="datalist.content">
	{{datalist.content}}
		</div>
		</div>
		<footerbar></footerbar>
	</div>
</template>

<script>
	import axios from 'axios'
	import navbar from '@/components/Navbar.vue'
	import footerbar from '@/components/footerbar.vue'
	export default{
		data (){
			return {
				datalist:[],
				
			}
		},
		mounted() {
			// console.log("id信息",this.$route.params.myid,this.$route.params.myid1)
		axios({
			url: `/forum/lua/wegame_feeds_article/get_article?p=%7B%22uid%22:0,%22iid%22:%22${this.$route.params.myid1}%22,%22article_id%22:%22${this.$route.params.myid}%22%7D`
		}).then(res => {
		 // console.log(res.data)
		 this.datalist = res.data.data.article_info
		})
		},
		components: {
			navbar,
			footerbar
		},
	}
</script>

<style lang="scss">
	
</style>
