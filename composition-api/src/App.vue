<template>
  <div>
    <p>{{ num }}</p>
    <button @click="increment">Update</button>

    <p>{{ name }}</p>

    <p>
      <input type="text" v-model="phrase" />
      <div>{{ reversePhrase }}</div>
    </p>
  </div>
</template>

<script>import { reactive, ref, toRefs, watch } from "vue";

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



    return {
      num,
      increment,
      ...toRefs(user),
      phrase,
      reversePhrase
    }
  }
}


</script>