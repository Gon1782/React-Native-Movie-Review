import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth/react-native";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC4TcEbjjnQzW-MM1d4xX2WCPBRB_LAeS4",
  authDomain: "movie-4af2e.firebaseapp.com",
  projectId: "movie-4af2e",
  storageBucket: "movie-4af2e.appspot.com",
  messagingSenderId: "832427650026",
  appId: "1:832427650026:web:414e2fa6bb5d91ec18e093",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const storage = getStorage(app);
