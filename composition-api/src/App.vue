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

<script>import { computed, reactive, ref, toRefs, watch } from "vue";

export default {
  name: "App",
  setup() {
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

    watch(() => {
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