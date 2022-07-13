import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD4pddk_-MfaKWfIYm4eChmZQ3wVrxDIEk",
  authDomain: "house-marketplace-app-f4073.firebaseapp.com",
  projectId: "house-marketplace-app-f4073",
  storageBucket: "house-marketplace-app-f4073.appspot.com",
  messagingSenderId: "420960501161",
  appId: "1:420960501161:web:55f1ad1101bdce13c6d8b8"
};

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()