import BandsRepository from './BandsRepository'

export default class FireBaseUsersRepository extends BandsRepository {
  constructor ({config, bandEntityFactory} = {}) {
    super()

    this._config = config
    this._bandEntityFactory = bandEntityFactory
  }

  async create ({name, members, location} = {}) {
    const firebase = this._config.get('firebase')
    const id = firebase.database().ref().child('bands').push().key

    const band = {
      id,
      name,
      location,
      members
    }

    await firebase.database().ref(`/bands/${id}`).set(band)

    return this._bandEntityFactory(band)
  }

  async details ({bands} = {}) {
    // const refsManager = this._config.get('refsManager')
    // const refBands = refsManager.ref({path: 'bands'})
  }
}
