// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-ZfWRwVVFFkM1w3Nw4oomVII6NT8U65c",
  authDomain: "fir-auth1-fc4b4.firebaseapp.com",
  projectId: "fir-auth1-fc4b4",
  storageBucket: "fir-auth1-fc4b4.appspot.com",
  messagingSenderId: "926781393779",
  appId: "1:926781393779:web:11439d039820558387d306"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;