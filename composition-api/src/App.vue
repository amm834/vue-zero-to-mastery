<template>
  <div>
    <p>{{ num }}</p>
    <button @click="increment">Update</button>

    <p>{{ name }}</p>
  </div>
</template>

<script>import { reactive, ref, toRefs } from "vue";

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

    return {
      num,
      increment,
      ...toRefs(user)
    }
  }
}


</script>