import app from "firebase/compat/app";
import "firebase/compat/firestore";
import firebaseConfig from "./config";

// Initialize Firebase
app.initializeApp(firebaseConfig);

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.db = app.firestore();
  }
}

const firebase = new Firebase();
export default firebase;
