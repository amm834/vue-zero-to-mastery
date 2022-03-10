<template>
    <button @click="flag = !flag">Toggle</button>
    <transition name="fade" mode="out-in">
        <h1 v-if="flag">Hello World!</h1>
        <h1 v-else>Another Hello World</h1>
    </transition>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            flag: false
        }
    }
}
</script>

<style>
.fade-enter-from {
    opacity: 0;
}

.fade-enter-active {
    transition: all 3s linear;
}

.fade-leave-to {
    opacity: 0;
    transition: all 3s linear;
}
</style>
