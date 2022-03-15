<template>
  <main>
    <h1>About Page</h1>
    <div>{{ route.params.member }}</div>
  </main>
</template>

<script setup>

import { useRoute, useRouter } from "vue-router";

const route = useRoute()
const router = useRouter()

router.push({
  hash: "#hello"
})

</script>

