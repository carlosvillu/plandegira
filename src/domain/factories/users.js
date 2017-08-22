import config from '../config'

import UserEntity from '../users/UserEntity'
import FireBaseUsersRepository from '../users/FireBaseUsersRepository'
import SignUpUserUseCase from '../users/SignUpUserUseCase'
import CurrentUsersUseCase from '../users/CurrentUsersUseCase'
import LoginUsersUseCase from '../users/LoginUsersUseCase'
import LogoutUsersUseCase from '../users/LogoutUsersUseCase'

export default class UsersFactory {
  static userEntity = ({name, email, id}) =>
    new UserEntity({name, id, email})

  static fireBaseUsersRepository = () =>
    new FireBaseUsersRepository({
      config,
      userEntityFactory: UsersFactory.userEntity
    })

  static signUpUserUseCase = () =>
    new SignUpUserUseCase({
      repository: UsersFactory.fireBaseUsersRepository()
    })

  static currentUsersUseCase = () =>
    new CurrentUsersUseCase({
      repository: UsersFactory.fireBaseUsersRepository()
    })

  static loginUsersUseCase = () =>
    new LoginUsersUseCase({
      repository: UsersFactory.fireBaseUsersRepository()
    })

  static logoutUsersUseCase = () =>
    new LogoutUsersUseCase({
      repository: UsersFactory.fireBaseUsersRepository()
    })
}
