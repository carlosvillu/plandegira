export default class CurrentUsersUseCase {
  constructor ({repository} = {}) {
    this._repository = repository
  }

  execute () {
    return this._repository.current().then(user => !user ? user : user.toJSON())
  }
}
