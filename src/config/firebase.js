// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqkAQz5AyltSpR-Lrd509rSm2-yLJRKwI",
  authDomain: "learning-management-3e35c.firebaseapp.com",
  projectId: "learning-management-3e35c",
  storageBucket: "learning-management-3e35c.firebasestorage.app",
  messagingSenderId: "418776229525",
  appId: "1:418776229525:web:675317e7fb938824949d9c",
  measurementId: "G-Y32TSF5R42"
};
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);