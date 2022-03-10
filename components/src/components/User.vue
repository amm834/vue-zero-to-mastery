<template>

    <button @click="onUpdateAge">Update age</button>

    <div v-if="age > 25">
        He is {{ age }} years old
    </div>
    <div v-else>You are not enought {{ age }} to see message</div>
</template>

<script>
export default {
    name: "UserComponent",
    props: ['age'],
    emits:['age-change'],
    methods: {
        onUpdateAge() {
            this.$emit('age-change')
        }
    }
}
</script>
