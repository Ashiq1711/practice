// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXqqAWPpsK6wBLCfD4i8mZPcgBT1lGyj0",
  authDomain: "practice-4276d.firebaseapp.com",
  projectId: "practice-4276d",
  storageBucket: "practice-4276d.appspot.com",
  messagingSenderId: "1074359282032",
  appId: "1:1074359282032:web:6e2a1eca7abeb5d19c47b5",
  measurementId: "G-3SZ0VLXVFJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default firebaseConfig