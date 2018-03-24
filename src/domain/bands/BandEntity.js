export default class BandEntity {
  constructor ({id, name, members, location} = {}) {
    this._name = name
    this._members = members
    this._location = location
    this._id = id
  }

  get id () { return this._id }

  toJSON () {
    return {
      name: this._name,
      members: this._members,
      location: this._location,
      id: this._id
    }
  }
}
