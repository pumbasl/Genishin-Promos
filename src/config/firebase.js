import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlkNOY85PQ9d-A5VZbmUIlEh-Yzczx5Ik",
  authDomain: "genshin-promo.firebaseapp.com",
  projectId: "genshin-promo",
  storageBucket: "genshin-promo.appspot.com",
  messagingSenderId: "441152080604",
  appId: "1:441152080604:web:d394d990ab490f7a098219",
  measurementId: "G-HYNJLJ8Z56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);