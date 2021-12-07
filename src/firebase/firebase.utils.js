import firebase from 'firebase/compat/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"

const config = {
  apiKey: "AIzaSyAHh5bJa20d4g_NwreRUf6xkZtxvYiBHvg",
  authDomain: "cr0wn-db.firebaseapp.com",
  projectId: "cr0wn-db",
  storageBucket: "cr0wn-db.appspot.com",
  messagingSenderId: "179770859158",
  appId: "1:179770859158:web:1ced4db17a52443eceecb7",
  measurementId: "G-MMH30K6456"
}

firebase.initializeApp(config)

export const auth = getAuth()
export const firestore = getFirestore()

const provider = new GoogleAuthProvider()
export const signInWithGoogle = () => signInWithPopup(auth, provider)

export default firebase