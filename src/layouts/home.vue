<script setup lang="ts">
	import NavBar from '@/components/Navbar.vue';
	import {
		ref
	} from 'vue';
	import {
		useRouter
	} from 'vue-router';
	
	const bgColor = ref('yellow')
	const setBg = (color) => {
		bgColor.value = color
	}
	
	const _requiresAuth = useRouter().currentRoute.value.meta.requiresAuth;
	const _value = useRouter().currentRoute.value.meta.value;
	
	console.log(_value, _requiresAuth);
</script>

<template>
	<h1 :style="`background: ${bgColor};`">Home layout {{_value}} - {{_requiresAuth}}</h1>
	<NavBar />
	<hr>
	<router-view @set-color="setBg" />
</template>
