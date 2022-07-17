// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB90sKGNNHV6vxv523-h0ZUGXSYRu9y8Io',
  authDomain: 'knust-counselling.firebaseapp.com',
  projectId: 'knust-counselling',
  storageBucket: 'knust-counselling.appspot.com',
  messagingSenderId: '944592825619',
  appId: '1:944592825619:web:fe9e5ed66cff94999afee6',
  measurementId: 'G-43KYDWED6P',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
