// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdvGVOtWwRaMS9yHKx4EN56b9qQ17pBJU",
  authDomain: "job-portal-7170d.firebaseapp.com",
  projectId: "job-portal-7170d",
  storageBucket: "job-portal-7170d.firebasestorage.app",
  messagingSenderId: "651317299986",
  appId: "1:651317299986:web:8017c6c777ea53a60f01cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;