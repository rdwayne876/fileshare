// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDHZ01XX3KPm9trsNpynWMxLWi_PABo4zc",
    authDomain: "fileshare-fbffc.firebaseapp.com",
    projectId: "fileshare-fbffc",
    storageBucket: "fileshare-fbffc.appspot.com",
    messagingSenderId: "792871145889",
    appId: "1:792871145889:web:d512da6ec3bcb363adbbe0",
    measurementId: "G-0PFY0SYCMB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export const database = getFirestore(app)
const analytics = getAnalytics(app);

