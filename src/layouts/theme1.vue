<template>
	<h1>This is Theme-1: val = {{val}}</h1>
	<hr>
	<router-link to="/">
		Home
	</router-link>
	|
	<router-link to="/page1">
		Page 1
	</router-link>
	<hr>
	<h2>This is [slot]</h2>
	<slot></slot>
	<hr>
	<h2>This is [router-view]</h2>
	<router-view />
</template>

<script>
	export default {
		data() {
			return {
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
