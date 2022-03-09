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
            mode: 1,
            size: 200,
            fruits: ["Orange", "Apple", "Lemon"],
            users: [
                { name: "Mg Mg" },
                { name: "Hla Hla" },
                { name: "Mya Mya" },
            ],
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
        move() {
            const first = this.fruits.shift();
            this.fruits.push(first);
        },
    },
    computed: {
        fullname() {
            return `${this.firstName} ${this.middlename} ${this.lastName}`;
        },
        circle_classes() {
            return { purple: this.isPurple };
        },
        circle_sizes() {
            return {
                width: this.size + "px",
                height: this.size + "px",
                lineHeight: this.size + "px",
            };
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
