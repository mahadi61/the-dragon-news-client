// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1KC3mNd7NXKAIUEp6C4HVIsp8uYM_MRc",
  authDomain: "the-dragon-news-client-39348.firebaseapp.com",
  projectId: "the-dragon-news-client-39348",
  storageBucket: "the-dragon-news-client-39348.appspot.com",
  messagingSenderId: "558949399367",
  appId: "1:558949399367:web:b1eab8bd6e22e9c90b2a62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;