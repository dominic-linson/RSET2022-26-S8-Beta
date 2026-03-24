// Firebase SDK Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔥 YOUR FIREBASE CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyAUvoAxwLMgwxwStJK4Q_xyGumLLY2kNU8",
  authDomain: "rbd-model.firebaseapp.com",
  projectId: "rbd-model",
  storageBucket: "rbd-model.firebasestorage.app",
  messagingSenderId: "497139499566",
  appId: "1:497139499566:web:d05c0357fdcb5f1891d5bf",
  measurementId: "G-BB11ZXYQG7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
