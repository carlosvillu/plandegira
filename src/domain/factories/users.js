import config from '../config'

import UserEntity from '../users/UserEntity'

import FireBaseUsersRepository from '../users/FireBaseUsersRepository'

import AddBandUsersUseCase from '../users/AddBandUsersUseCase'
import CurrentUsersUseCase from '../users/CurrentUsersUseCase'
import LoginUsersUseCase from '../users/LoginUsersUseCase'
import LogoutUsersUseCase from '../users/LogoutUsersUseCase'
import SignUpUserUseCase from '../users/SignUpUserUseCase'
import StreamBandsUsersUseCase from '../users/StreamBandsUsersUseCase'

export default class UsersFactory {
  static userEntity = ({name, email, id, bands}) =>
    new UserEntity({name, id, email, bands})

  static fireBaseUsersRepository = () =>
    new FireBaseUsersRepository({
      config,
      userEntityFactory: UsersFactory.userEntity
    })

  static addBandUsersUseCase = () =>
    new AddBandUsersUseCase({
      repository: UsersFactory.fireBaseUsersRepository()
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

  static streamBandsUsersUseCase = () =>
    new StreamBandsUsersUseCase({
      repository: UsersFactory.fireBaseUsersRepository()
    })
}
