<template>
    <!-- Main Content -->
    <section class="container mx-auto mt-6">
        <div class="md:grid md:grid-cols-3 md:gap-4">
            <div class="col-span-1">
                <app-upload></app-upload>
            </div>
            <div class="col-span-2">
                <div class="bg-white rounded border border-gray-200 relative flex flex-col">
                    <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
                        <span class="card-title">My Songs</span>
                        <i class="fa fa-compact-disc float-right text-green-400 text-2xl"></i>
                    </div>
                    <div class="p-6">
                        <!-- Composition Items -->
                        <composition-item v-for="song in songs" :key="song.id"></composition-item>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import store from "@/store";
import AppUpload from "@/components/Upload";
import { db, auth } from "@/includes/firebase";
import { collection, where, query, getDocs } from "firebase/firestore";
import CompositionItem from "@/components/CompositionItem";

export default {
    name: "AppManage",
    components: { CompositionItem, AppUpload },
    data() {
        return {
            songs: []
        };
    },
    async created() {
        try {
            const songsRef = collection(db, "users");
            const q = query(songsRef, where("uid", "==", auth.currentUser.uid));
            const snapshot = await getDocs(q);
            snapshot.forEach(doc => {
                const song = {
                    ...doc.data(),
                    id: doc.id
                };
                this.songs.push(song);
            });
        } catch (error) {
            console.log(error);
        }
    }
    // beforeRouteLeave(to, from, next) {
    //     this.$refs.upload.cancelUploads();
    // }
    // beforeRouteEnter(to, from, next) {
    //     if (store.state.isLoggedIn) {
    //         next();
    //     } else {
    //         next({ name: "home" });
    //     }
    // }
};
</script>

