

const firebaseConfig = {
    apiKey: "AIzaSyAKrzNUaidB7sL9l9xKbgeWAChtuxFIQTc",
    authDomain: "disneyplus-clone-a6cf0.firebaseapp.com",
    projectId: "disneyplus-clone-a6cf0",
    storageBucket: "disneyplus-clone-a6cf0.appspot.com",
    messagingSenderId: "244281813464",
    appId: "1:244281813464:web:d0caaf77bd2821ebfd2aad",
    measurementId: "G-0T5L3Y7962"
  };
  
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth, provider, storage};
  export default db;