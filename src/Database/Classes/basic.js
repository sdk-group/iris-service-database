'use strict'

let emitter = require('global-queue');

class BasicDocument {
  constructor() {
    this.emitter = emitter;
  }
  save() {

  }
}

module.exports = BasicDocument;