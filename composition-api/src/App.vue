<template>
  <main>
    <p>{{ num }}</p>
    <p>{{ double }}</p>
    <button @click="increment">Update</button>

    <p>{{ name }}</p>

    <input type="text" v-model="phrase" />
    <p>{{ reversePhrase }}</p>
  </main>
</template>

<script>import { computed, onBeforeMount, onMounted, reactive, ref, toRefs, watch, watchEffect } from "vue";

export default {
  name: "App",
  setup() {

    onBeforeMount(() => {
      console.log('onBeforeMount()');
    })

    onMounted(() => {
      console.log('onMounted()');
    })

    let num = ref(0);
    const increment = () => num.value++;
    const user = reactive({
      name: 'John'
    })

    setTimeout(() => {
      user.name = 'Doe'
    }, 2000)

    let phrase = ref("")
    let reversePhrase = ref("")

    watchEffect(() => {
      reversePhrase.value = phrase.value.split("").reverse().join("")
    })

    const double = computed(() => num.value * 2)



    return {
      num,
      increment,
      ...toRefs(user),
      phrase,
      reversePhrase,
      double
    }
  }
}


</script>