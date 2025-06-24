// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZfgx6cHonWeozfD5b884XAYP-ysqElfA",
  authDomain: "giftoji-website.firebaseapp.com",
  projectId: "giftoji-website",
  storageBucket: "giftoji-website.firebasestorage.app",
  messagingSenderId: "834983071793",
  appId: "1:834983071793:web:144ecf08af3fdcd4488510",
  measurementId: "G-ZQTWHE56CC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = app.auth();