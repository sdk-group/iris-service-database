'use strict'

let emitter = require("global-queue");

let discover = function(model_name) {

}

class Database {
  constructor() {
    this.emitter = emitter;
  }
  init(config) {

  }
  launch() {
    return Promise.resolve(true);
  }
  get(model_name, query) {
    let Model = discover(model_name);
    let object = new Model(query);
  }
}



module.exports = Database;