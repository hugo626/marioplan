import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBY1-1EHQR9vsRiRM9MqZNaoJNliukGF0I",
  authDomain: "marioplan-92c4f.firebaseapp.com",
  databaseURL: "https://marioplan-92c4f.firebaseio.com",
  projectId: "marioplan-92c4f",
  storageBucket: "marioplan-92c4f.appspot.com",
  messagingSenderId: "687347706468"
};
firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;