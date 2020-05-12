import * as firebase from 'firebase/app';
import "firebase/storage";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBGNMy95urz9ZqEkDrXZdzt-MjVnXPDwjs",
  authDomain: "sportplan-addc3.firebaseapp.com",
  databaseURL: "https://sportplan-addc3.firebaseio.com",
  projectId: "sportplan-addc3",
  storageBucket: "sportplan-addc3.appspot.com",
  messagingSenderId: "574962532143",
  appId: "1:574962532143:web:4951759f743ca968ceebda",
  measurementId: "G-ZKNN4QJMGL",
})

const storage = firebase.storage()

export { storage, firebaseApp as default }
