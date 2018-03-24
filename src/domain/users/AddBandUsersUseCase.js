export default class AddBandUsersUseCase {
  constructor ({repository} = {}) {
    this._repository = repository
  }

  execute ({bandId, userId} = {}) {
    return this._repository.addBand({bandId, userId})
  }
}
