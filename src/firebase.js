// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBVG3Iz6u6EwPCfBvpEFS5zflv6BdJmgO8",
    authDomain: "clone-c298f.firebaseapp.com",
    projectId: "clone-c298f",
    storageBucket: "clone-c298f.appspot.com",
    messagingSenderId: "221920694852",
    appId: "1:221920694852:web:c252a14b7f9fb4691aa211",
    measurementId: "G-EXHC6B9XBT"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};