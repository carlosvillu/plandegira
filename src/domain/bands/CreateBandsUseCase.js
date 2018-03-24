export default class CreateBandsUseCase {
  constructor ({repository, addBandUsersUseCase} = {}) {
    this._repository = repository
    this._addBandUsersUseCase = addBandUsersUseCase
  }

  async execute ({userId, name, members, location} = {}) {
    const band = await this._repository.create({name, members, location})
    await this._addBandUsersUseCase.execute({bandId: band.id, userId})
    return band.toJSON()
  }
}
