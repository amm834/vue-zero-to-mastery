const vm = Vue.createApp({
    data() {
        return {
            firstName: "John",
            lastName: "Doe",
        };
    },
}).mount("#app");

console.log(vm.firstName);
console.log(vm.$data);
