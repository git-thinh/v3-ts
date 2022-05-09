<script setup>
	const emit = defineEmits(['color'])
	emit('setColor', 'green')
</script>

<template>
	<h2>Index pages</h2>
	<button @click="emit('setColor', 'red')">Set Red color for layout</button>
	<button @click="emit('setColor', 'blue')">Set Blue color for layout</button>
</template>

<route lang="json">
	{ "name": "homepage", "meta": { "requiresAuth": false, "value": "13579" } }
</route>
