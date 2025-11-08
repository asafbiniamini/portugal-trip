// Firebase Configuration
// This file contains your Firebase project configuration

const firebaseConfig = {
  apiKey: "AIzaSyA4woxruSTX7XY1IZK7iy9vU4nsnniL0M8",
  authDomain: "portugal-trip-2025.firebaseapp.com",
  projectId: "portugal-trip-2025",
  storageBucket: "portugal-trip-2025.firebasestorage.app",
  messagingSenderId: "873786444277",
  appId: "1:873786444277:web:04f6d64cbfeeae426838bc",
  measurementId: "G-WL7PGXS3K4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();

