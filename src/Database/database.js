'use strict'

let emitter = require("global-queue");

let discover = function (model_name) {

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

	get({}) {}
	getMulti({}) {}
	getNodes({}) {}
	upsert({}) {}
	upsertNodes({}) {}
	insert({}) {}
	insertNodes({}) {}
	replace({}) {}
	replaceNodes({}) {}
	remove({}) {}
	counter({}) {}

}


module.exports = Database;