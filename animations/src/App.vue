<template>
    <button @click="flag = !flag">Toggle</button>
    <!--    <transition name="fade" mode="out-in">
            <h1 v-if="flag">Hello World!</h1>
            <h1 v-else>Another Hello World</h1>
        </transition>-->

    <!--    <transition name="zoom" type="animation" appear>
            <h1 v-if="flage">Hello World</h1>
        </transition>-->

    <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
        :css="false"
    >
        <h1 v-if="flag">Animation with JavaScript</h1>
    </transition>

</template>

<script>
export default {
    name: "App",
    data() {
        return {
            flag: false
        }
    },
    methods: {
        beforeEnter(el) {
            console.log('before-enter', el)
        },
        enter(el, done) {
            const animation = el.animate([{transform: 'scale3d(0,0,0)'}, {}], {
                duration: 1000
            })
            animation.onfinish = () => done()
        },
        afterEnter(el) {
            console.log('after-enter', el)
        },
        beforeLeave(el) {
            console.log('before-leave', el)
        },
        leave(el, done) {
            const animation = el.animate([{},{transform: 'scale3d(0,0,0)'}], {
                duration: 1000
            })
            animation.onfinish = () => done()
        },
        afterLeave(el) {
            console.log('after-leave', el)
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
    transition: all 3s linear;
}

.fade-leave-to {
    opacity: 0;
    transition: all 3s linear;
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

</style>
