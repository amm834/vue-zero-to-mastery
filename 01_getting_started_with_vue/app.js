const vm = Vue.createApp({
    data() {
        return {
            firstName: "John",
            lastName: "Doe",
            url: "https://facebook.com",
            raw_data: "<h1>Hello</h1>",
        };
    },
    methods: {
        fullname() {
            return `${this.firstName} ${this.lastName}`;
        },
    },
}).mount("#app");
