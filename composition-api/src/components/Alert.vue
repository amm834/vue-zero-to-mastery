<template>
  <div v-if="!flag" style="color: red;">Name changed!</div>
</template>

<script>import { computed, onMounted } from "vue"

export default {
  name: "Alert",
  props: [ 'user' ],
  setup(props, context) {

    onMounted(() => {
      context.emit('alert-mounted')
    })

    const flag = computed(() => props.user.name === 'John')
    return {
      flag
    }
  }
}
</script>