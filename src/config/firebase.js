import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCosoL0Fdg0uqge8-7HpjZMPN4avsTZLqs",
  authDomain: "fuzztube-72e3f.firebaseapp.com",
  projectId: "fuzztube-72e3f",
  storageBucket: "fuzztube-72e3f.appspot.com",
  messagingSenderId: "640308302112",
  appId: "1:640308302112:web:1ddb37606c42b89e7ac745",
};
//provide your own config from firebase
firebase.initializeApp(firebaseConfig);

export default firebase.auth();
