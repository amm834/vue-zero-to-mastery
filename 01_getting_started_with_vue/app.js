const vm = Vue.createApp({
    data() {
        return {
            firstName: "John",
            lastName: "Doe",
            url: "https://facebook.com",
            raw_data: "<h1>Hello</h1>",
            count: 0,
        };
    },
    methods: {
        fullname() {
            return `${this.firstName} ${this.lastName}`;
        },
        add() {
            this.count = this.count + 1;
        },
        reduce(event) {
            console.log(event.target);
            this.count -= 1;
        },
    },
}).mount("#app");
