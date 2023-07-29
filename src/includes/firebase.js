import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyA7AXoJVRHQArpmhmNw2XLNQhjP7ld_qfE',
  authDomain: 'music-f3d7a.firebaseapp.com',
  projectId: 'music-f3d7a',
  storageBucket: 'music-f3d7a.appspot.com',
  appId: '1:114336503333:web:024395f3f9ec2fb10551cc'
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

db.enablePersistence().catch((error) => {
  console.log(`firebase persistence error ${error.code}`)
})

const usersCollection = db.collection('users')

const songsCollection = db.collection('songs')
const commentsCollection = db.collection('comments')

export { auth, db, usersCollection, storage, songsCollection, commentsCollection }
