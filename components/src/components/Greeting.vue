<template>
    <div> {{ msg }}</div>
</template>

<script>
export default {
    name: "GreetingText",
    data() {
        return {
            msg: 'Hello World'
        }
    }
}
</script>

<style scoped>
div {
    color: red;
}
</style>
