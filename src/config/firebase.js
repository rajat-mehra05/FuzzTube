import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "",
  authDomain: "fuzztube-72e3f.firebaseapp.com",
  projectId: "fuzztube-72e3f",
  storageBucket: "fuzztube-72e3f.appspot.com",
  messagingSenderId: "",
  appId: "1::web:",
};
//provide your own config from firebase
firebase.initializeApp(firebaseConfig);

export default firebase.auth();
