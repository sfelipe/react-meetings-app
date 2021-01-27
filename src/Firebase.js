import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCMC8zzyBIRWuHo0N20tXalAuBi86asXSw",
  authDomain: "react-spas-82e90.firebaseapp.com",
  databaseURL: "https://react-spas-82e90-default-rtdb.firebaseio.com",
  projectId: "react-spas-82e90",
  storageBucket: "react-spas-82e90.appspot.com",
  messagingSenderId: "982649536483",
  appId: "1:982649536483:web:300cc4b7f68e4720026ad6",
};

// Initialize Firebase
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;
