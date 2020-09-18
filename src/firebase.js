import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD55QCsJPomnd7bx5PEPHR86YCKtqwtzk0",
  authDomain: "chatroom-7bc65.firebaseapp.com",
  databaseURL: "https://chatroom-7bc65.firebaseio.com",
  projectId: "chatroom-7bc65",
  storageBucket: "chatroom-7bc65.appspot.com",
  messagingSenderId: "221489607327",
  appId: "1:221489607327:web:14406a70455700c72768aa",
  measurementId: "G-0X5DK7J854",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
