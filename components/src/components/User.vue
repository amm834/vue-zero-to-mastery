<template>

    <button @click="onUpdateAge">Update age</button>

    <div v-if="age > 25">
        He is {{ age }} years old
    </div>
    <div v-else>You are not enough {{ age }} to see message</div>
</template>

<script>
export default {
    name: "UserComponent",
    props: {
        age: {
            type: Number,
            required: true,
            // default:20,
            validator(value) {
                return value < 130
            }
        }
    },
    emits: ['age-change'],
    methods: {
        onUpdateAge() {
            this.$emit('age-change')
        }
    }
}
</script>
