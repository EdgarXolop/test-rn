import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAD2ovljJrSBlamzSI7Hi_nR6E3bsaKDYY",
  authDomain: "foobarmusic-9190f.firebaseapp.com",
  databaseURL: "https://foobarmusic-9190f.firebaseio.com",
  projectId: "foobarmusic-9190f",
  storageBucket: "foobarmusic-9190f.appspot.com",
  messagingSenderId: "442038367374"
};

firebase.initializeApp(config);

export const firebaseAuth = firebase.auth();
export const firebaseDatabase = firebase.database();

export default firebase;