<template>
	<div>
		<slot :user="user" :fruits="fruits"></slot>
	</div>
</template>

<script>
export default {
	name: "HelloWorld",
	data() {
		return {
			user: {
				name: "Mg Mg",
			},
			fruits: ["Orange", "Apple", "Mango"],
		};
	},
};
</script>