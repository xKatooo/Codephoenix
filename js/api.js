  // Your web app's Firebase configuration
    var firebaseConfig = {
    apiKey: "AIzaSyBWbtvjoTohYksf3uFodyJ1IT8hfwIKeUI",
    authDomain: "code-phoenix.firebaseapp.com",
    databaseURL: "https://code-phoenix.firebaseio.com",
    projectId: "code-phoenix",
    storageBucket: "code-phoenix.appspot.com",
    messagingSenderId: "5466053452",
    appId: "1:5466053452:web:cde92511a7f6d9fcaa8de9",
    measurementId: "G-KX7DDSDS88"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const fs = firebase.firestore();
  firebase.analytics();