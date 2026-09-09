// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "firebase/firestore";
import {initializeAuth, getReactNativePersistence, browserLocalPersistence} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Platform} from "react-native";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATjgvvFBjrwiNrtNXC1uG2AD53iAAaMyQ",
  authDomain: "primeiro-projeto-noite.firebaseapp.com",
  projectId: "primeiro-projeto-noite",
  storageBucket: "primeiro-projeto-noite.firebasestorage.app",
  messagingSenderId: "913294575875",
  appId: "1:913294575875:web:9f531bdd798077bb030136",
  measurementId: "G-KNSXFE536T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

const persistenceMode = Platform.OS === 'web' ? browserLocalPersistence : getReactNativePersistence(AsyncStorage);

const auth = initializeAuth(app, {persistence: persistenceMode});
export {db, auth};