import config from '../config'

import FireBaseUsersRepository from '../users/FireBaseUsersRepository'
import SignUpUserUseCase from '../users/SignUpUserUseCase'

export default class UsersFactory {
  static fireBaseUsersRepository = () =>
    new FireBaseUsersRepository({config})

  static signUpUserUseCase = () =>
    new SignUpUserUseCase({
      repository: UsersFactory.fireBaseUsersRepository()
    })
}
