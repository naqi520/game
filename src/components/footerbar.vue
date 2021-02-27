<template>
<div class="footer">
<div class="copyright" v-for="data in datalist">
<p>{{data.head}}</p>
<p>{{data.text}}</p>
<p>{{data.item}}</p>
<p>
</p>
<div style="width:300px;margin:0 auto; padding:20px 0;">
		<p>{{data.list}}</p>
<a  style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
	<img src="https://ubicdn.com/beian.png" style="float:left;"><p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">黑ICP备2020006034号-1</p></a>
</div>
</div>
</div>
</template>

<script>
	export default{
		data(){
			return{
				datalist:[{
					"head":"NGAME 版权所有",
					"text":"Copyright 2020 作者：Naqi.",
					"item":"本游戏适合16岁以上的玩家进入。 积极健康的游戏心态是健康游戏的开端，",
					"list":"本网站游戏故事情节设置紧凑，请您合理控制游戏时间，避免沉溺游戏影响生活，注意自我保护，防范网络陷阱"
				}]
			}
		}
	}
</script>
<style>
.footer{
	    background-color: #000;
	    width: 100%;
	    color: #999999;
	    text-align: center;
	    padding: 30px 0;
}
.copyright {
    padding: 10px 0; 
}
</style>
