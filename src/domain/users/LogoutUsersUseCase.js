export default class LogoutUsersUseCase {
  constructor ({repository} = {}) {
    this._repository = repository
  }

  execute () {
    return this._repository.logout()
  }
}
