import firebase from "firebase";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

export const app = firebase.initializeApp({
  apiKey: "AIzaSyB8zmKBnCbWbrcqiyrVTycrVHbeRl8EFTk",
  authDomain: "easy-rentage.firebaseapp.com",
  projectId: "easy-rentage",
  storageBucket: "easy-rentage.appspot.com",
  messagingSenderId: "612246543888",
  appId: "1:612246543888:web:869f8bb1fd2b5c65ab3495",
});
