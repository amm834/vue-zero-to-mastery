const vm = Vue.createApp({
    data() {
        return {
            firstName: "John",
            lastName: "Doe",
            url: "https://facebook.com",
        };
    },
    methods: {
        fullname() {
            return `${this.firstName} ${this.lastName}`;
        },
    },
}).mount("#app");
