<template>
    <div> {{ msg }}</div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Greeting",
    data() {
        return {
            msg: 'Hello World'
        }
    }
}
</script>

