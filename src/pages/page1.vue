<template>
	<h2>This is Page-1</h2>
	<hr>
	<button @click="count++">{{count}}</button>
</template>

<script>
	export default {
		data(){
			return{
				count: 0
			}
		},
		mounted() {
			console.log(this.count);
		}
	};
</script>

<style>
</style>