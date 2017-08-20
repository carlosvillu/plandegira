import UsersRepository from './UsersRepository'

export default class FireBaseUsersRepository extends UsersRepository {
  constructor ({config} = {}) {
    super()

    this._config = config
  }
  async create ({email, name, password} = {}) {
    const firebase = this._config.get('firebase')
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    const user = firebase.auth().currentUser
    await firebase.database().ref(`/users/${user.uid}`).set({
      email,
      name
    })

    return user.uid
  }
}
