import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCxEHydGOmH8Omi2hGKqNoRluY9L-D4-Gs',
  authDomain: 'hbd-gayu.firebaseapp.com',
  databaseURL: 'https://hbd-gayu.firebaseio.com',
  projectId: 'hbd-gayu',
  storageBucket: 'hbd-gayu.appspot.com',
  messagingSenderId: '464372774609',
  appId: '1:464372774609:web:332d2e395523fd5de977f0',
  measurementId: 'G-7F210QWG0T'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase
