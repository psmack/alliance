// import { boot } from 'quasar/wrappers'

// // "async" is optional;
// // more info on params: https://v2.quasar.dev/quasar-cli/boot-files
// export default boot(async (/* { app, router, ... } */) => {
//   // something to do
// })

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT6TsQIQgPDColpwriY5qpUI9MpMhY2JY",
  authDomain: "alliance-914bd.firebaseapp.com",
  projectId: "alliance-914bd",
  storageBucket: "alliance-914bd.appspot.com",
  messagingSenderId: "427730532949",
  appId: "1:427730532949:web:5f0487750e2dd3a79a32dc"
};

// Initialize Firebase
let app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
let db = getFirestore(app);

export default db
