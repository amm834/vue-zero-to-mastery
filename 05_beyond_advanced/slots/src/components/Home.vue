<template>
<h1>Home Component</h1>
</template>

<script>
export default {
    name: "AppHome",
    mounted() {
        console.log('Home component mounted')
    },
    unmounted() {
        console.log('Home component un-mounted')
    },
    activated() {
        console.log('Home component activated')
    },
    deactivated() {
        console.log('Home component de-activated')
    }
}
</script>

<style scoped>

</style>
