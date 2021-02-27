<template>
	<div>
		<navbar></navbar>
	<transition name="fade">
			  <router-view></router-view>
	</transition>
	

	<footerbar></footerbar>
	</div>
</template>

<script>
	import navbar from '@/components/Navbar.vue'
	import footerbar from '@/components/footerbar.vue'
	export default{
		components: {
			navbar,
			footerbar

		},
	}
</script>

<style>
</style>
