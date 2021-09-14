import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDHmdL39mW7KIPZ3Kc3bsCdoSxY7QvS8uA',
  authDomain: 'fb-clone-1ca92.firebaseapp.com',
  projectId: 'fb-clone-1ca92',
  storageBucket: 'fb-clone-1ca92.appspot.com',
  messagingSenderId: '542373635712',
  appId: '1:542373635712:web:2d087e3683e092a42d2865',
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
const storage = getStorage(app)

export { db, storage }
