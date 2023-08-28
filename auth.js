// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAUPiZQMDaktuRgnhi3ZkngdymeGChauUs",
  authDomain: "my-weather-app-5459f.firebaseapp.com",
  projectId: "my-weather-app-5459f",
  storageBucket: "my-weather-app-5459f.appspot.com",
  messagingSenderId: "1018740818118",
  appId: "1:1018740818118:web:ed99cc175702dccf0857c7P",
};

firebase.initializeApp(firebaseConfig);

function signUp(email, password) {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
}

function logIn(email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}
// firebase.auth().onAuthStateChanged((user)=>{
//   if(!user){
//       // location.replace("trial.html")
//   }else{
//       document.getElementById("user").innerHTML = "Hello, "+user.email
//   }
// })

function logout() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      location.replace("trial.html");
      alert("Logout successful.");
    })
    .catch((error) => {
      console.error("Logout error:", error);
    });
}

function checkAuthState(callback) {
  firebase.auth().onAuthStateChanged(callback);
}
