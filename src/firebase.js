import { initializeApp } from "firebase/app";
import { database } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBmqeuijMvLJk_LtuATny94DphfiXsm_YU",
  authDomain: "redux-db-tutorial.firebaseapp.com",
  projectId: "redux-db-tutorial",
  storageBucket: "redux-db-tutorial.appspot.com",
  messagingSenderId: "482844330619",
  appId: "1:482844330619:web:cca1fc3a48186d6113f0de",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = database(app);
