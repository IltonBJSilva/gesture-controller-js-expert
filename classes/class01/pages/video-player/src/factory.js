import Camera from "../../../lib/shared/camera.js"
import { supportsWorkerType } from "../../../lib/shared/util.js"
import Controller from "./controller.js"
import Service from "./service.js"
import View from "./view.js"


async function getWorker() {
  if (supportsWorkerType()) {
    console.log('initializing esm workers')
    const worker = new Worker('./src/worker.js', { type: 'module' })
    return worker
  }

  const workerMoch = {
    async postMessage() {},
    onmessage(msg) {}
  }


  console.log('Não Suporta')

  return workerMoch

}


const worker =  await getWorker()

worker.postMessage('Hey From factory!!')


const camera = await Camera.init()
const [rootPath] = window.location.href.split('/pages/')
const factory = {
  async initalize() {
    return Controller.initialize({
      view: new View(),
      service: new Service({})

    })
  }
}

export default factory
