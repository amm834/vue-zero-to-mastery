const vm = Vue.createApp({
    data() {
        return {
            perspective: 0,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
        };
    },
    methods: {
        reset() {
            this.perspective = 0;
            this.rotateX = 0;
            this.rotateY = 0;
            this.rotateZ = 0;
        },
        copy() {
            const input = document.createElement("input");
            input.value = JSON.stringify(this.box_classes).replace("\\n", "");
            document.body.appendChild(input);
            input.select();
            document.execCommand("copy");
            document.body.removeChild(input);
        },
    },
    computed: {
        box_classes() {
            return {
                transform: `
                perspective(${this.perspective}px)
                rotateX(${this.rotateX + "deg"})
                rotateY(${this.rotateY + "deg"})
                rotateZ(${this.rotateZ + "deg"})
                `,
            };
        },
    },
}).mount("#app");
