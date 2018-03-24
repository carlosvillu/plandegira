import PlanDeGira from './index'

import * as firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

import generateFireBaseID from '../libs/generateFireBaseID'

import {Observable} from 'rxjs/Observable'
import RefsManager from './RefsManager'

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
domain.config('refsManager', new RefsManager({firebase}))
domain.config('generateFireBaseID', generateFireBaseID)
domain.config('Observable', Observable)

export const fb = firebase
export default domain
