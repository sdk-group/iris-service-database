'use strict'

let emitter = require("global-queue");
let Couchbird = require('Couchbird')();

class Database {
	constructor() {
		this.emitter = emitter;
	}
	init(config) {
		console.log("CONFIG", config);
		this.default_bucket = config.default_bucket;
	}
	launch() {
		return Promise.resolve(true);
	}

	_handle(bucket = this.default_bucket, method, args) {
		let db = Couchbird.bucket(bucket);
		return db[method] && db[method].apply(db, args)
			.catch((err) => {
				return Promise.resolve(undefined);
			});
	}

	_nodesHandle(bucket = this.default_bucket, method, args) {
		let promises = {};
		let triples = args[0];
		let options = args[1] || {};
		let db = Couchbird.bucket(bucket);

		return Promise.resolve(_.castArray(triples))
			.then((res) => {
				_.map(res, (val) => {
					let opts = options[val["@id"]] || {};
					promises[val["@id"]] = db[method](val["@id"], val, opts);
				});
				return Promise.props(promises);
			});
	}

	get({
		args = [],
		bucket
	}) {
		return this._handle(bucket, 'get', args);
	}

	getMulti({
		args = [],
		bucket
	}) {
		return this._handle(bucket, 'getMulti', args);
	}

	upsert({
		args = [],
		bucket
	}) {
		return this._handle(bucket, 'upsert', args);
	}

	upsertNodes({
		args = [],
		bucket
	}) {
		return this._nodesHandle(bucket, 'upsert', args);
	}

	insert({
		args = [],
		bucket
	}) {
		return this._handle(bucket, 'insert', args);
	}

	insertNodes({
		args = [],
		bucket
	}) {
		return this._nodesHandle(bucket, 'insert', args);
	}

	replace({
		args = [],
		bucket
	}) {
		return this._handle(bucket, 'replace', args);
	}

	replaceNodes({
		args = [],
		bucket
	}) {
		return this._nodesHandle(bucket, 'replace', args);
	}

	remove({
		args = [],
		bucket
	}) {
		return this._handle(bucket, 'remove', args);
	}

	counter({
		args = [],
		bucket
	}) {
		return this._handle(bucket, 'counter', args);
	}

	lock({
		args = [],
		bucket
	}) {
		return this._handle(bucket, 'lock', args);
	}

	getAndLock({
		args = [],
		bucket
	}) {
		return this._handle(bucket, 'getAndLock', args);
	}

	touch({
		args = [],
		bucket
	}) {
		return this._handle(bucket, 'touch', args);
	}

	getAndTouch({
		args = [],
		bucket
	}) {
		return this._handle(bucket, 'getAndTouch', args);
	}

	append({
		args = [],
		bucket
	}) {
		return this._handle(bucket, 'append', args);
	}

	prepend({
		args = [],
		bucket
	}) {
		return this._handle(bucket, 'prepend', args);
	}

	reconnect(bucket = this.default_bucket) {
		Couchbird.bucket(bucket)
			.reconnect();
	}
}


module.exports = Database;