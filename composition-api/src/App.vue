<template>
  <div>
    <p>{{ num }}</p>
    <button @click="increment">Update</button>
  </div>
</template>

<script>import { ref } from "vue";

export default {
  name: "App",
  setup() {
    let num = ref(0);
    const increment = () => num.value++;

    return {
      num,
      increment
    }
  }
}

</script>