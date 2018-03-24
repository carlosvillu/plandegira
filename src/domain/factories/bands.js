import config from '../config'

import UsersFactory from './users'

import BandEntity from '../bands/BandEntity'
import FireBaseUsersRepository from '../bands/FireBaseBandsRepository'
import CreateBandsUseCase from '../bands/CreateBandsUseCase'

export default class BandsFactory {
  static bandEntity = ({id, name, members, location} = {}) =>
    new BandEntity({id, name, members, location})

  static fireBaseBandsRepository = () =>
    new FireBaseUsersRepository({
      config,
      bandEntityFactory: BandsFactory.bandEntity
    })

  static createBandsUseCase = () =>
    new CreateBandsUseCase({
      repository: BandsFactory.fireBaseBandsRepository(),
      addBandUsersUseCase: UsersFactory.addBandUsersUseCase()
    })
}
