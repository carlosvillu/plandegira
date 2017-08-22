export default class LoginUsersUseCase {
  constructor ({repository} = {}) {
    this._repository = repository
  }

  execute ({email, password} = {}) {
    return this._repository.login({email, password}).then(user => {
      return !user ? user : user.toJSON()
    })
  }
}
