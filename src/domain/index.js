/* eslint standard/computed-property-even-spacing:0 */
import config from './config'

import UsersFactory from './factories/users'
import BandsFactory from './factories/bands'

class PlanDeGira {
  constructor () {
    this._config = config
    this._map = {}

    this._map['config'] = this._config

    this._map['current_users_use_case'] = UsersFactory.currentUsersUseCase()
    this._map['login_users_use_case'] = UsersFactory.loginUsersUseCase()
    this._map['logout_users_use_case'] = UsersFactory.logoutUsersUseCase()
    this._map['signup_users_use_case'] = UsersFactory.signUpUserUseCase()
    // eslint-disable-next-line
    this._map[
      'stream_bands_users_use_case'
    ] = UsersFactory.streamBandsUsersUseCase()

    this._map['create_bands_use_case'] = BandsFactory.createBandsUseCase()
  }

  get (key) {
    return this._map[key]
      ? this._map[key]
      : {
        execute: () =>
            Promise.reject(new Error(`[PlanDeGira#get] ${key} not defined`))
      }
  }

  // Export all the use cases
  get useCases () {
    return this._map
  }

  config (key, value) {
    this._config.set(key, value)
    return this
  }
}

export default PlanDeGira
