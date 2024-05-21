import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4MhYjVO6eaZJmlNWFMidHofLDDI03yl8",
  authDomain: "auth-expense-tracker.firebaseapp.com",
  projectId: "auth-expense-tracker",
  storageBucket: "auth-expense-tracker.appspot.com",
  messagingSenderId: "304402608362",
  appId: "1:304402608362:web:169469811235ae4afe2793",
  measurementId: "G-86206Y2NKT",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
