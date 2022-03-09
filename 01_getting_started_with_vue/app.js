const vm = Vue.createApp({
    data() {
        return {
            firstName: "John",
            lastName: "Doe",
        };
    },
    methods: {
        fullname() {
            return `${this.firstName} ${this.lastName}`.toUpperCase();
        },
    },
}).mount("#app");
