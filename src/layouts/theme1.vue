<template>
	<h1>This is Theme-1: page = {{val}}</h1>
	<hr>
	<h2>This is [slot]</h2>
	<slot></slot>
	<hr>
	<h2>This is [router-view]</h2>
	<router-view />
</template>

<script>
	export default {
		props: {
			page: {
				type: Number,
				required: true,
				default: 0
			}
		},
		data(){
			return{
				val: 0
			}
		},
		mounted() {
			console.log(this.val);
		}
	};
</script>

<style>
</style>
