import PlanDeGira from './index'

import * as firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyAO2KU0mgjMjhSkdqLnluZ1g3SxT-qvDgM',
  authDomain: 'plandegira-359d8.firebaseapp.com',
  databaseURL: 'https://plandegira-359d8.firebaseio.com',
  projectId: 'plandegira-359d8',
  storageBucket: 'plandegira-359d8.appspot.com',
  messagingSenderId: '416314462852'
}
firebase.initializeApp(config)

const domain = new PlanDeGira()
domain.config('firebase', firebase)

export const fb = firebase
export default domain
