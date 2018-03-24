export default class DetailsBandsUseCase {
  constructor ({repository} = {}) {
    this._repository = repository
  }

  execute ({bands} = {}) {
    return this._repository.details({bands})
  }
}
