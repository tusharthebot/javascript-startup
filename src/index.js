// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getFirestore, addDoc, collection , getDocs} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
// import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBe1z6-dRqzdtHGrWVhVydmbioYDMC8-N0",
  authDomain: "fir-startup-60e51.firebaseapp.com",
  projectId: "fir-startup-60e51",
  storageBucket: "fir-startup-60e51.appspot.com",
  messagingSenderId: "60304615000",
  appId: "1:60304615000:web:d334d542fd174237c68c2d",
  measurementId: "G-F5JBJDY9WX"
});

// Initialize Firebase
//  app = initializeApp(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const db = getFirestore(firebaseApp);

onAuthStateChanged(auth, user => {
  if(user !== null ) {
    console.log('logged in');
    const { displayName: name, email, photoURL } = auth.currentUser;
    console.log(name, email, photoURL);
    console.log(auth.currentUser);
  } else {
    console.log('no user');
  }
});

let $signInBtn = document.querySelector(".google-sign-in");
console.log($signInBtn);
$signInBtn.addEventListener('click',function(e) { 
  e.preventDefault();
  console.log('test');
  signInWithPopup(auth, provider);
});
