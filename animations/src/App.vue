<template>
    <button @click="flag = !flag">Toggle</button>
    <!--    <transition name="fade" mode="out-in">
            <h1 v-if="flag">Hello World!</h1>
            <h1 v-else>Another Hello World</h1>
        </transition>-->

    <!--    <transition name="zoom" type="animation" appear>
            <h1 v-if="flage">Hello World</h1>
        </transition>-->

    <!--    <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
            @before-leave="beforeLeave"
            @leave="leave"
            @after-leave="afterLeave"
            :css="true"
            name="zoom"
        >
            <h1 v-if="flag">Animation with JavaScript</h1>
        </transition>-->
    <button @click="addItem()">Add</button>
    <ul>
        <transition-group
            name="fade"
            enter-active-class="animate__animated animate_flipInX"
            leave-active-class="animate__animated animate_flipOutX"
        >
            <li v-for="(number,index) in numbers"
                @click="removeItem(index)"
                :key="index"
            >
                {{ number }}
            </li>
        </transition-group>
    </ul>


</template>

<script>
export default {
    name: "App",
    data() {
        return {
            flag: false,
            numbers: [1, 2, 3, 4, 5]
        }
    },
    methods: {
        beforeEnter(el) {
            console.log('before-enter', el)
        },
        enter(el, done) {
            // const animation = el.animate([{transform: 'scale3d(0,0,0)'}, {}], {
            //     duration: 1000
            // })
            // animation.onfinish = () => done()
        },
        afterEnter(el) {
            console.log('after-enter', el)
        },
        beforeLeave(el) {
            console.log('before-leave', el)
        },
        leave(el, done) {
            // const animation = el.animate([{},{transform: 'scale3d(0,0,0)'}], {
            //     duration: 1000
            // })
            // animation.onfinish = () => done()
        },
        afterLeave(el) {
            console.log('after-leave', el)
        },
        addItem() {
            const randomNumber = Math.floor(Math.random() * 100 + 1)
            const index = Math.floor(Math.random() * this.numbers.length)
            this.numbers.splice(index, 0, randomNumber)
        },
        removeItem(index) {
            this.numbers.splice(index, 1)
        }

    }
}
</script>

<style>
h1 {
    width: 400px;
    padding: 20px;
    margin: 20px;
}

.fade-enter-from {
    opacity: 0;
}

.fade-enter-active {
    transition: all .25s linear;
}

.fade-leave-to {
    opacity: 0;
    transition: all .25s linear;
    position: absolute;
}

.fade-move {
    transition: all .25s linear;
}

@keyframes zoom-in {
    from {
        transform: scale(0, 0);
    }
    to {
        transform: scale(1, 1);
    }
}

@keyframes zoom-out {
    from {
        transform: scale(1, 1);
    }
    to {
        transform: scale(0, 0);
    }
}


.zoom-enter-active {
    animation: zoom-in 1s linear forwards;
    transition: all 2s linear;
}

.zoom-leave-active {
    animation: zoom-out 1s linear forwards;
    transition: all 2s linear;
}

.animate_flipOutX{
    position: absolute;
}

</style>
