export default class UserEntity {
  constructor ({name, email, id, bands} = {}) {
    this._name = name
    this._email = email
    this._id = id
    this._bands = bands
  }

  toJSON () {
    return {
      email: this._email,
      name: this._name,
      id: this._id,
      bands: this._bands
    }
  }
}
