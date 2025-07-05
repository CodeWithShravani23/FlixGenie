// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSYmpWqWuL1HdA6t8zZniqUrvRf07rCj8",
  authDomain: "flixgenie-2906e.firebaseapp.com",
  projectId: "flixgenie-2906e",
  storageBucket: "flixgenie-2906e.firebasestorage.app",
  messagingSenderId: "331662450972",
  appId: "1:331662450972:web:fa389035b0e0e9b95bdad9",
  measurementId: "G-JED3RGMQQW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
