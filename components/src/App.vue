<template>
    <div>
        <greeting></greeting>
        <user :age="age" @age-change="updateAge"></user>
    </div>
</template>

<script>
import Greeting from "@/components/Greeting";
import User from "@/components/User";

export default {
    name: "App",
    components: {
        Greeting,
        User
    },
    data() {
        return {
            age: 19,
        }
    },
    methods:{
        updateAge(){
            this.age += 1
        }
    }
}
</script>
