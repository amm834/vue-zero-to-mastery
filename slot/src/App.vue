<template>
	<hello-world #default="{ user, fruits }">
		<p>{{ user.name }}</p>
		<ul>
			<li v-for="fruit in fruits" :key="fruit">{{ fruit }}</li>
		</ul>
	</hello-world>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
export default {
	name: "App",
	components: {
		HelloWorld,
	},
};
</script>