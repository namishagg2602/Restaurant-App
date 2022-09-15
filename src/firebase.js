import { useEffect, useState } from "react";
import * as firebase from "firebase/app"
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAlxBQIqZeRpTew1nBpnA3iWz1BEAaA3hA",
    authDomain: "restaurant-eaec5.firebaseapp.com",
    projectId: "restaurant-eaec5",
    storageBucket: "restaurant-eaec5.appspot.com",
    messagingSenderId: "933498739476",
    appId: "1:933498739476:web:0d66180c2737cb81fb0001",
    measurementId: "G-DJBCDFSQTB"
  };
  
  // Initialize Firebase
  const Firebase = firebase.initializeApp(firebaseConfig);
  const auth = getAuth();
  export default Firebase;
  export function signup(email,password)
  {
    createUserWithEmailAndPassword(auth,email,password);
  }
export function logout(){
    return signOut(auth);
}
export  function useAuth()
{
    const [currentUser, setCurrentUser] = useState();
    useEffect(()=> {
       const unsub = onAuthStateChanged(auth, user  =>  setCurrentUser(user));
       return unsub;
    }, [])
    return currentUser;
}
 export function login(email,password) {
    return signInWithEmailAndPassword(auth, email, password);
 }
