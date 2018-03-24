import UsersRepository from './UsersRepository'

export default class FireBaseUsersRepository extends UsersRepository {
  constructor ({config, userEntityFactory} = {}) {
    super()

    this._config = config
    this._userEntityFactory = userEntityFactory
  }

  bands$ ({userId} = {}) {
    const refsManager = this._config.get('refsManager')
    const Observable = this._config.get('Observable')
    const bandsRef = refsManager.ref({path: `/users/${userId}/bands`})

    return Observable.create(observer => {
      bandsRef.on('value', snapshot => observer.next(Object.keys(snapshot.val())))
      return () => window.bandsRef.off()
    })
  }

  async addBand ({bandId, userId} = {}) {
    const refsManager = this._config.get('refsManager')
    const {bands = {}} = (await refsManager.ref({path: `/users/${userId}`}).once('value')).val()
    const nextBands = {...bands, [bandId]: true}

    await refsManager.ref({path: `/users/${userId}/bands`}).update(nextBands)
  }

  async current () {
    const firebase = this._config.get('firebase')
    const user = firebase.auth().currentUser

    if (!user) { return false }

    const {name, email, id, bands} = (await firebase.database().ref(`/users/${user.uid}`).once('value')).val()
    return this._userEntityFactory({name, email, id, bands})
  }

  async create ({email, name, password} = {}) {
    const firebase = this._config.get('firebase')
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    const user = firebase.auth().currentUser
    await firebase.database().ref(`/users/${user.uid}`).set({
      email,
      name,
      bands: {},
      id: user.uid
    })

    return this._userEntityFactory({name, email, id: user.uid})
  }

  async login ({email, password} = {}) {
    const firebase = this._config.get('firebase')
    const {uid} = await firebase.auth().signInWithEmailAndPassword(email, password)

    const user = (await firebase.database().ref(`/users/${uid}`).once('value')).val()
    return this._userEntityFactory(user)
  }

  logout () {
    const firebase = this._config.get('firebase')
    return firebase.auth().signOut()
  }
}
