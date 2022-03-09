const vm = Vue.createApp({
    data() {
        return {
            firstName: "John",
            middlename: "",
            lastName: "Doe",
            url: "https://facebook.com",
            raw_data: "<h1>Hello</h1>",
            count: 0,
            isPurple: false,
            textColor: "",
        };
    },
    methods: {
        add() {
            this.count = this.count + 1;
        },
        reduce(event) {
            console.log(event.target);
            this.count -= 1;
        },
        triggerMe(msg, event) {
            console.log(msg);
            event.preventDefault();
        },
        updateMiddleName(event) {
            this.middlename = event.target.value;
        },
    },
    computed: {
        fullname() {
            return `${this.firstName} ${this.middlename} ${this.lastName}`;
        },
        circle_classes() {
            return { purple: this.isPurple };
        },
    },
    watch: {
        fullname(newVal, oldVal) {
            setTimeout(() => {
                this.firstName = "Jone";
            }, 3000);
        },
    },
}).mount("#app");
