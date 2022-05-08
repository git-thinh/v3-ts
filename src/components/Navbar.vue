<template>
	<header>
		<div>
			<p>index.vue</p>
			<router-link to="/blog">
				blog
			</router-link> |
			<router-link to="/about">
				about
			</router-link> |
			<router-link to="/components">
				components
			</router-link> |
			<router-link to="/markdown">
				markdown
			</router-link> |
			<router-link to="/xxx/xxx">
				not exists
			</router-link> |
			<router-link to="/features/dashboard">
				features:dashboard
			</router-link> |
			<router-link to="/features/admin">
				features:admin
			</router-link> |
			<router-link to="/admin">
				admin
			</router-link>
		</div>

		<div>
			<p>index.vue</p>
			<router-link to="/about">
				about
			</router-link>
			<p>
				<router-link to="/news">
					news
				</router-link> |
				<router-link :to="{ name: 'named-news-page' }">
					today's news
				</router-link>
			</p>
			<p>
		 	<router-link to="/sublayout">
					sub layout
				</router-link>
			</p>
		</div>
	</header>
</template>
