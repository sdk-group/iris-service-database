'use strict'

class Service {
  static description() {
    return {
      "key": "service-%department%-%counter%",
      "parent": "global-service-%department%-%counter%"
      "counter": "counter-service-%department%"
    };
  }
  constructor(params) {

  }
}