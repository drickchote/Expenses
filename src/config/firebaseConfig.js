// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// import {...} from "firebase/firestore";

// Your web app's Firebase configuration
const { firebaseConfig } = require("./config.json");

// Initialize Firebase
export const firestone = initializeApp(firebaseConfig);
