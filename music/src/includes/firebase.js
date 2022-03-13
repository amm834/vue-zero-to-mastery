// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyCGVUj2EJBkpa5BGehP5YXQDSGQlvFGWQI",
    authDomain: "music-24add.firebaseapp.com",
    projectId: "music-24add",
    storageBucket: "music-24add.appspot.com",
    messagingSenderId: "326156841004",
    appId: "1:326156841004:web:3da8c26cedf8bf7f1de189",
    measurementId: "G-5XHT75NYBJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
// const analytics = getAnalytics(app);
const storage = getStorage(app);
export {
    db,
    auth,
    storage
};
