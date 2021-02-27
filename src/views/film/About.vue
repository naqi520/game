<template>
	<div class="about">
		<div class="container">
			<div v-for="data in datalist"  class="container item">
			<div class="ubi-title"><h2>{{data.name}}</h2></div>
				<h3>{{data.list}}</h3>
				<p>{{data.item}}</p>
				</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				datalist:[
					{"id": "1",
					"name":"关于",
					"list":"你可以在多款游戏中选择下载也可以在此查看游戏的资讯,信息和动态",
					"item":"集合了各类平台，如：wegame，steam，育碧，EA，R星，网易，橙子，金山，战网等的平台游戏可供下载，支持各种主机，如:apple，Microsoft，xbox，wii，ps4，ubuntu等"		
					}
				]
			}
		},
		/* beforeRouteEnter (to,from,next){
			console.log("1111")
			if(isLogin){
				next();
			}else{
				next('/login')
			}
		} */
	
	}
</script>

<style>
	
	.about{
		margin-top: -100px;
		padding-top: 50px;
		width: 100%;
		min-height: 400px;
		background: gainsboro;
		/* box-shadow: 0 5px 25px 5px rgba(0, 0, 0, 0.2); */
	}
	.about h2{
		color: black;
		
	}
	.about .item{
		text-align: center;
		font-size: 20px;
	}
	.about .item p{
		font-size: 20px;
		padding-top: 5px;
	}
</style>
