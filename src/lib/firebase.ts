import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCgVBSMUs0sNyqIvdGbHPQoXCowjaScyx8",
  authDomain: "nuxohub.firebaseapp.com",
  projectId: "nuxohub",
  storageBucket: "nuxohub.firebasestorage.app",
  messagingSenderId: "769535178293",
  appId: "1:769535178293:web:3e684f79209507f14fe37c",
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)