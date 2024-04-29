// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    authDomain: "trade-manager-91a41.firebaseapp.com",
    projectId: "trade-manager-91a41",
    storageBucket: "trade-manager-91a41.appspot.com",
    messagingSenderId: "906564430141",
    appId: "1:906564430141:web:1ca4ee29c829b46f623d54",
    measurementId: "G-L50R46Z7YM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export { auth };
