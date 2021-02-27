<template>
	<div id="app">
		<keep-alive>
		<transition name="fade">
				  <router-view></router-view>
		</transition>
		</keep-alive>
		
		<div class="top" @click="backtop">
			<img src="../public/img/top.jpg" alt="" width="100%">
			</div>
	</div>
</template>

<style lang="scss">
	a {
		text-decoration: none;
		color: red;
		transition: .5s;
	}
	a:hover{
		text-decoration: none;
		color: white;
	}
	.top{
		cursor: pointer;
		position: fixed;
		bottom: 10px;
		right: 10px;
		width: 50px;
		height: 50px;
	}
	
	* {
		margin: 0;
		padding: 0;
	}


	html::-webkit-scrollbar {
		width: 10px;
	}

	html::-webkit-scrollbar-thumb {
		background: gold;
		border-radius: 50px;
		box-shadow: 1px 1px 10px gray;
	}

	html::-webkit-scrollbar-track {
		background: gainsboro;
		box-shadow: inset 2px 2px 10px gainsboro;
	}

	li {
		list-style: none;
	}
	.fade-enter-active,
	.fade-leave-active {
	  transition: all .5s linear;
	  opacity: 0;
	}
	.fade-enter {
	  transform: rotate(100deg);
	  opacity: 0;
	}
	.fade-leave-to {
	  transform:  rotate(-100deg);
	   opacity: 0;
	}
	.about-enter-active,
	.about-leave-active {
	  transition: all .5s linear;
	  opacity: 0;
	}
	.about-enter {
	  transform: translateX(360%);
	  opacity: 0;
	  background-color: transparent;
	}
	.about-leave-to {
	  transform:  translateX(360%);
	   opacity: 0;
	}
	
</style>
<script>
	export default {
	    mounted() {
	       window.addEventListener("scroll",this.showbtn,true);
	    },
	    methods: {
	        // 显示回到顶部按钮
	       showbtn(){
	          let that = this;
	          let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
	          that.scrollTop = scrollTop
	       },
	      backtop(){
	          var timer = setInterval(function(){
	            let osTop = document.documentElement.scrollTop || document.body.scrollTop;
	            let ispeed = Math.floor(-osTop / 5); 
	            document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
	            this.isTop = true;
	            if(osTop === 0){
	              clearInterval(timer);
	            }
	          },50)
	      }
	    }
	  }
</script>
