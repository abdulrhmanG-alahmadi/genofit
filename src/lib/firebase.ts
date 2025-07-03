// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPWh9ARIyViIENSiwUQELJqDykXYLGT3o",
  authDomain: "genofit-5f83f.firebaseapp.com",
  projectId: "genofit-5f83f",
  storageBucket: "genofit-5f83f.firebasestorage.app",
  messagingSenderId: "402204555782",
  appId: "1:402204555782:web:4cb71f56c321180e682187",
  measurementId: "G-02RNS4YBNB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (only in browser)
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

// Initialize Firestore
export const db = getFirestore(app);

export { analytics };
export default app; 