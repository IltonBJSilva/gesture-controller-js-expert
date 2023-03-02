export default class Controller {
  #view
  #camera
  #worker
  #blinkCounter = 0
  constructor({ view, worker, camera }) {

  }

  static async initialize(deps) {
    const controller = new CardsController(deps)
    return controller.init()
  }

  async init
}
