<template>

    <div>
        <app-form>
            <template v-slot:help>
                <div>{{ help }}</div>
            </template>

            <template v-slot:fields>
                <div>
                    <input type="text" placeholder="Enter name">
                </div>

            </template>
            <template v-slot:buttons>
                <div>
                    <button type="submit">Send</button>
                </div>
            </template>
        </app-form>
    </div>

    <!--    Dynamic Components-->
    <select v-model="componentName">
        <option value="AppHome">Home</option>
        <option value="AppAbout">About</option>
    </select>
    <keep-alive>
        <component :is="componentName"></component>
    </keep-alive>


</template>

<script>
import AppForm from '@/components/Form'
import AppHome from './components/Home'
import AppAbout from './components/About'

export default {
    name: "App",
    components: {
        AppForm,
        AppHome,
        AppAbout
    },
    data() {
        return {
            help: 'Help Message',
            componentName: 'AppHome'
        }
    }
}
</script>
