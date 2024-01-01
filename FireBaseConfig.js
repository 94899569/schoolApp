import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyD1aEVzXoKimO_eqYiq5XGzA1lgD2uT5zU",
    authDomain: "auth-e61c9.firebaseapp.com",
    projectId: "auth-e61c9",
    storageBucket: "auth-e61c9.appspot.com",
    messagingSenderId: "589712120102",
    appId: "1:589712120102:web:7144db0c431858f32609e7"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DM = getFirestore(FIREBASE_APP);
