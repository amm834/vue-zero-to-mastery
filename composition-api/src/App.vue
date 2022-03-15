<template>
  <main>
    <p>{{ num }}</p>
    <p>{{ double }}</p>
    <button @click="increment">Update</button>

    <p>{{ name }}</p>

    <input type="text" v-model="phrase" />
    <p>{{ reversePhrase }}</p>

    <Alert :user="user"></Alert>
  </main>
</template>

<script>
import { computed, onBeforeMount, onMounted, reactive, ref, toRefs, watch, watchEffect } from "vue";
import Alert from "./components/Alert.vue";
import { usePhrase } from './hooks/phrase'
import { useNumber } from './hooks/number'

export default {
  name: "App",
  setup(props) {
    onBeforeMount(() => {
      console.log("onBeforeMount()");
    });
    onMounted(() => {
      console.log("onMounted()");
    });
    const user = reactive({
      name: "John",
    });
    const { phrase, reversePhrase } = usePhrase()
    const { num, increment, double } = useNumber()


    return {
      num,
      increment,
      ...toRefs(user),
      phrase,
      reversePhrase,
      double,
      user,
    };
  },
  components: { Alert }
}


</script>