import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyDjGyAoC4toMdlVOtdRC2cir5NqSUqwxa4",
  authDomain: "my-react-app-e04fd.firebaseapp.com",
  databaseURL: "https://my-react-app-e04fd.firebaseio.com",
  projectId: "my-react-app-e04fd",
  storageBucket: "my-react-app-e04fd.appspot.com",
  messagingSenderId: "965578201095",
  appId: "1:965578201095:web:80c8bed62ef575b9dc72a2",
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }
  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);

  currUser = () => this.auth.currentUser;

  data = () => this.db.ref("products");
  getProducts = (params, callback) =>
    this.data().on("value", (snap) => {
      let products = snap
        .val()
        .filter((pr) => pr.gender === params.gender)
        .filter((pr) => !params.category || pr.category === params.category);
      callback(products);
    });
}

export default Firebase;
