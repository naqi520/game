<template>
	<div>
		<navbar></navbar>
		<div class="newstitle">
			<h1>最近更新</h1>
			<p>了解wegame游戏更新情况</p>
		</div>
		<div class="news">
			<div class="newsitem">
				<div class="news-bg2" v-for="data in datalist" :key="data.article_id">
					<div class="pic" @click="change(data.article_id,data.iid)"><img :src="data.cover" alt="">
					</div>
					<div class="index">
						<h3><a @click="change(data.article_id)">{{data.subject}}</a></h3>
						<div class="date">{{data.send_date}}</div>
						<p>{{data.abstract}}</p>
						<p>{{data.title}}</p>
						<div class="latestNews__shadow"></div>
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
				datalist: []
			}
		},
		mounted() {
			axios({
				url: '/forum/lua/wegame_feeds_article/get_version_article_list?p=%7B%22offset%22%3A0%2C%22count%22%3A10%2C%22client_type%22%3A1%2C%22uid%22%3A0%7D',
			}).then(res => {
				// console.log(res.data.data.article_list)
				this.datalist = res.data.data.article_list
			})
		},
		methods: {
			change(id, iid) {
				// console.log(id, iid)

				this.$router.push(`/detail_1/${id}/${iid}`)

			}
		},
		components: {
			navbar,
			footerbar
		},

	}
</script>

<style>
.newstitle {
	    background: #000 url(../assets/newsbg.jpg) no-repeat left top;
	    height: 350px;
	    background-size: cover;
	    padding-left: 50px;
	    padding-top: 150px;
	}
	.newstitle h1 {
	    font-size: 50px;
	    font-weight: bold;
	    color: #fff;
	    line-height: 1.2;
	}
	.newstitle p {
	    color: #fff;
	    font-size: 16px
	}
	.active{
		background-color: rgba(0,0,0,.15);
		border-radius: 50%;
	}
	.pagination{
		text-align: center;
		    margin: 0px;
		    padding: 20px 0;
		    border-radius: 0px;
		    width: 100%;;
	}
	.pagination .previous_page{
		float: left;
		    padding: 14px 25px;
		    background-color: rgba(0,0,0,.15);
		    border-bottom-right-radius: 30px;
		    border-top-right-radius: 30px;
		    transition: background-color 0.5s;
			transition: .5s;
	}
	.pagination .next_page{
		float: right;
		    padding: 14px 25px;
		    background-color: rgba(0,0,0,.15);
		    border-bottom-left-radius: 30px;
		    border-top-left-radius: 30px;
		    transition: background-color 0.5s;
			transition: .5s;
	}
	.pagination a {
	    display: inline-block;
		font-size: 20px;
	    line-height: 1;
	    color: #999;
	    padding: 0px 5px;
		text-decoration: none;
	}
	.pagination .previous_page:after {
	    content: url(../assets/ban_prev.png);
	    
	}
	.pagination .next_page:after {
	    content: url(../assets/ban_next.png);   
	}
	.pagination .previous_page:hover{
		background-color: rgba(0,0,0,.3);
	}
	.pagination .next_page:hover{
		background-color: rgba(0,0,0,.3);
	}
</style>
