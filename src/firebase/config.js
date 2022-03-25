import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCuXsnEo3SBD7X-WoYxG0LOfxJquQVhKCs",
    authDomain: "muso-ninjas-8f477.firebaseapp.com",
    projectId: "muso-ninjas-8f477",
    storageBucket: "muso-ninjas-8f477.appspot.com",
    messagingSenderId: "784579184359",
    appId: "1:784579184359:web:6dcb2e63f62778779f8442"
  };


  firebase.initializeApp(firebaseConfig)

  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()

  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectFirestore, projectAuth, timestamp }