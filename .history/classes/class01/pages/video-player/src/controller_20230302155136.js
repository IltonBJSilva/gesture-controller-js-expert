export default class Controller {
  #view
  #camera
  #worker
  #blinkCounter = 0
  constructor({ view, worker, camera }) {
    this.#view = view
    this.#camera = camera
    this.#worker = this.#configureWorker(worker)

    this.#view.configureOnBtnClick(this.onBtnStart.bind(this))
  }


}
