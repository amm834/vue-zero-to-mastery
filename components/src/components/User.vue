<template>
    <div>
        He is {{ age }} yerars old
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "User",
    props: ['age']
}
</script>
