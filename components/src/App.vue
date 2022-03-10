<template>
    <div>
        <greeting></greeting>
        <user :age="age"></user>
    </div>
</template>

<script>
import Greeting from "@/components/Greeting";
import User from '@/components/User'

export default {
    name: "App",
    components: {
        Greeting,
        User
    },
    data() {
        return {
            age: 19
        }
    }
}
</script>
