export default class StreamBandsUsersUseCase {
  constructor ({repository} = {}) {
    this._repository = repository
  }

  async execute ({userId} = {}) {
    return this._repository.bands$({userId})
  }
}
