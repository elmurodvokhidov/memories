import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDGTv1boqf5yX7CgZDj09HpN9Zyvgg_1lQ",
    authDomain: "memories-74892.firebaseapp.com",
    projectId: "memories-74892",
    storageBucket: "memories-74892.firebasestorage.app",
    messagingSenderId: "782533905252",
    appId: "1:782533905252:web:7269a48140b1ad45740871"
};

// initialization the firebase
const app = initializeApp(firebaseConfig);

// getting the firestore
export const projectStore = getFirestore(app);