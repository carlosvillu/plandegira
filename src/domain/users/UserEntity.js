export default class UserEntity {
  constructor ({name, email, id} = {}) {
    this._name = name
    this._email = email
    this._id = id
  }

  toJSON () {
    return {
      email: this._email,
      name: this._name,
      id: this._id
    }
  }
}
