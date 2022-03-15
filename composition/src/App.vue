<template>
    <div id="app">
        <div class="scrollPosition">{{ offset }}</div>
    </div>
</template>

<script>
import mixin from "./mixin";

export default {
    name: "App",
    mixins: [ mixin ],
    data() {
        return {
            offset: 0
        }
    },
    mounted() {
        console.log('App is mounted');
    }
}

</script>

<style>
#app {
    width: 100%;
    height: 2000px;
    position: relative;
}

.scrollPosition {
    position: fixed;
}
</style>