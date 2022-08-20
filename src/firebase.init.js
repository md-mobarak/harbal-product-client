// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCp5MqU-IlBqN2ADRb-Lw47dahjGWJL4GQ",
    authDomain: "herbal-products-eb716.firebaseapp.com",
    projectId: "herbal-products-eb716",
    storageBucket: "herbal-products-eb716.appspot.com",
    messagingSenderId: "606538612353",
    appId: "1:606538612353:web:e8b8a0db6339042ac59780"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth