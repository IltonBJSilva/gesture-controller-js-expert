import Controller from "./controller"


const [rootPath] = window.location.href.split('/pages/')
const factory = {
  async initialize() {
/*     return CardsController.initialize({
      worker: cardListWorker,
      view: new CardsView(),
      service: new CardsService({
        dbUrl: `${rootPath}/assets/database.json`,
        cardListWorker

      })
    }) */
  }
}

export default factory
