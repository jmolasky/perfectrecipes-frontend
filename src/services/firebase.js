import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAAqu7mnZlOzlrGPuY-GYJZMkAPPQ1kK6Y",
  authDomain: "react-firebase-projects-7bf04.firebaseapp.com",
  projectId: "react-firebase-projects-7bf04",
  storageBucket: "react-firebase-projects-7bf04.appspot.com",
  messagingSenderId: "705622567197",
  appId: "1:705622567197:web:7aed1143dde9d13c74d9f4",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

function loginWithGoogle() {
  return auth.signInWithPopup(provider);
}

function logout() {
  return auth.signOut();
}

export { auth, loginWithGoogle, logout };
