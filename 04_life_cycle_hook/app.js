// const vm = Vue.createApp({
//     data() {
//         return {
//             msg: "hi there",
//         };
//     },
//     beforeCreate() {
//         console.log("beforeCreate()", this.msg);
//     },
//     created() {
//         console.log("created()", this.msg);
//     },
//     beforeMount() {
//         console.log("beforeMount()", this.$el);
//     },
//     mounted() {
//         console.log("mounted()", this.$el);
//     },
//     beforeUpdate() {
//         console.log("beforeUpdate()");
//     },
//     updated() {
//         console.log("updated()");
//     },
//     beforeUnmount() {
//         console.log("beforeUnmount()");
//     },
//     unmounted() {
//         console.log("unmounted()");
//     },
// });

// vm.mount("#app");

const data = {
    name: "Jonny",
};

const observedData = new Proxy(data, {
    set(taraget, key, value) {
        document.getElementById("app").innerText = value;
        taraget[key] = value;
    },
});

observedData.name = "some";
console.log(observedData.name);
