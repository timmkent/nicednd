import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyBz9aIksJMJ8KKExD5thar2GfCAD4O2aMQ",
  authDomain: "bankaccounts-91d42.firebaseapp.com",
  databaseURL: "https://bankaccounts-91d42-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bankaccounts-91d42",
  storageBucket: "bankaccounts-91d42.appspot.com",
  messagingSenderId: "584176868101",
  appId: "1:584176868101:web:f935d6f7c9a0ef93bcf56c",
  measurementId: "G-NYWRXP3MZV"
};
const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export const database = app.database();

// STEPS FOR GESTOR

// - Have Banking Handy Ready
// - goto OpenBank 
// - CLick on cuenta
// - Goto Arrow Down to download PDF ()


// TODO: If we use a bank like fintech we might have an easy way to scrape movements
// TODO: Introduce Evelagant DND
// TODO: App in Dashboard: FOCUS
// TODO: Sperate Movements by Month...
// TODO: Add , automatisch
