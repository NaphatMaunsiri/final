import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAbIhVesMo-cb3DtYMFbcSw6KTiyd_hfhk",
  authDomain: "final-project-ba251.firebaseapp.com",
  projectId: "final-project-ba251",
  storageBucket: "final-project-ba251.appspot.com",
  messagingSenderId: "705303301215",
  appId: "1:705303301215:web:b0ae11be9833f6e21f5fea",
  measurementId: "G-HR1LLLEN0X"
});

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
export { db, auth };
