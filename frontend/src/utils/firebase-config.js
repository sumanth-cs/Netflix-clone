import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCwHwemZ0h--cH5XWi_I9vSrjxxjHdxi_k",
  authDomain: "netflix-clone-6a512.firebaseapp.com",
  projectId: "netflix-clone-6a512",
  storageBucket: "netflix-clone-6a512.appspot.com",
  messagingSenderId: "691498066287",
  appId: "1:691498066287:web:37706bb328f47e09bf489a",
  measurementId: "G-LRJHMZTDDJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);