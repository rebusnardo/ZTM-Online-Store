import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChdTG9YGkjEEONUs_x6QOncIGb47eMw_4",
  authDomain: "online-store-db-be8dd.firebaseapp.com",
  projectId: "online-store-db-be8dd",
  storageBucket: "online-store-db-be8dd.appspot.com",
  messagingSenderId: "320291407751",
  appId: "1:320291407751:web:13bb21902deb9558aa3522",
  measurementId: "G-QYRQ63WLDF",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
