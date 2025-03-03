import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCr7bxd_5gdXquhae24LL5U6WBiBrpk6GY",
  authDomain: "dynamic-portfolio-ad6a2.firebaseapp.com",
  projectId: "dynamic-portfolio-ad6a2",
  storageBucket: "dynamic-portfolio-ad6a2.firebasestorage.app",
  messagingSenderId: "204345448218",
  appId: "1:204345448218:web:268030090aade5f7dfbea3"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };