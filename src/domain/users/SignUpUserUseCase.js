export default class SignUpUserUseCase {
  constructor ({repository} = {}) {
    this._repository = repository
  }

  execute ({email, name, password} = {}) {
    return this._repository.create({email, name, password})
  }
}
