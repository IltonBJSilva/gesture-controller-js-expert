import Camera from "../../../lib/shared/camera.js"
import { supportsWorkerType } from "../../../lib/shared/util.js"
import Controller from "./controller.js"
import Service from "./service.js"
import View from "./view.js"





//Parte importada
const worker = await getWorker()

const camera = await Camera.init()
const [rootPath] = window.location.href.split('/pages/')
const factory = {
  async initialize() {
    return Controller.initialize({
      view: new View(),
      worker,
      camera
    })
  }
}

export default factory
