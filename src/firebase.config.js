import { initializeApp } from "firebase/app"
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfrK_pgT9KOwaB9W89dY4Fnaal9OZvMi0",
  authDomain: "house-marketplace-app-22a6f.firebaseapp.com",
  projectId: "house-marketplace-app-22a6f",
  storageBucket: "house-marketplace-app-22a6f.appspot.com",
  messagingSenderId: "333485007513",
  appId: "1:333485007513:web:c7a9b4407183dfc6d68e08"
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()