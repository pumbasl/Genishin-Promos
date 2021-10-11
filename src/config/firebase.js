import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAlkNOY85PQ9d-A5VZbmUIlEh-Yzczx5Ik",
  authDomain: "genshin-promo.firebaseapp.com",
  projectId: "genshin-promo",
  storageBucket: "genshin-promo.appspot.com",
  messagingSenderId: "441152080604",
  appId: "1:441152080604:web:d394d990ab490f7a098219",
  measurementId: "G-HYNJLJ8Z56"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
// export const storageRef = (name) => ref(storage, `/images/${name}`);
// export const analytics = getAnalytics(app);