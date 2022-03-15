<template>
  <main>
    <router-link to="/">Home</router-link>|
    <router-link to="/about/admin" v-if="isAllowed">About</router-link>
    <router-view></router-view>
  </main>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from 'vuex'

const store = useStore()
const isAllowed = computed(() => store.getters.isAllowed)

setTimeout(() => {
  store.commit('allowNext', true)
}, 1000)


</script>