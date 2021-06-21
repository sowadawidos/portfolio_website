import firebase from "firebase";
import "firebase/auth"

export const app = firebase.initializeApp({
    apiKey: "AIzaSyDTwlBHJ6iTG_EaVRHcBWzhVI-31biB2RQ",
    authDomain: "portfolio-lab-coderslab.firebaseapp.com",
    projectId: "portfolio-lab-coderslab",
    storageBucket: "portfolio-lab-coderslab.appspot.com",
    messagingSenderId: "226724299957",
    appId: "1:226724299957:web:b6262f9fb6c810882eaafc",
    measurementId: "G-8M3S4DM5DC"
})

export const auth = app.auth()
export const db = app.firestore()
export default app
