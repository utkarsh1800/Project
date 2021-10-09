// Import the functions you need from the SDKs you need
import { initializeApp } from "../node_modules/@firebase/app";
import { GithubAuthProvider } from "../node_modules/@firebase/auth";
import { getAuth, signInWithRedirect } from "../node_modules/@firebase/auth";
import { getRedirectResult, GithubAuthProvider } from "../node_modules/@firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDlz77ffO0HdW70qIO6_hd8bxOyD9fbFg",
  authDomain: "intership-listing.firebaseapp.com",
  projectId: "intership-listing",
  storageBucket: "intership-listing.appspot.com",
  messagingSenderId: "131026825229",
  appId: "1:131026825229:web:7d6ee692bd3e5dc6746544",
  measurementId: "G-LF39W2DBZE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const provider = new GithubAuthProvider();


const auth = getAuth();

export function signInWithRedirect(auth, provider);


const auth = getAuth();
    getRedirectResult(auth)
    .then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result);
      if (credential) {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const token = credential.accessToken;
        // ...
      }

      // The signed-in user info.
      const user = result.user;
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GithubAuthProvider.credentialFromError(error);
      // ...
    });