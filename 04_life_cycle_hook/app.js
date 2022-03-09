const vm = Vue.createApp({
    data() {
        return {
            msg: "hi there",
        };
    },
    beforeCreate() {
        console.log("beforeCreate()", this.msg);
    },
    created() {
        console.log("created()", this.msg);
    },
    beforeMount() {
        console.log("beforeMount()", this.$el);
    },
    mounted() {
        console.log("mounted()", this.$el);
    },
    beforeUpdate() {
        console.log("beforeUpdate()");
    },
    updated() {
        console.log("updated()");
    },
    beforeUnmount() {
        console.log("beforeUnmount()");
    },
    unmounted() {
        console.log("unmounted()");
    },
});

vm.mount("#app");
