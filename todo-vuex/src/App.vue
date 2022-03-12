<template>
    <div>
        {{ name }}
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name: "App",
    computed: {
        ...mapState(['name'])
    }
}
</script>
