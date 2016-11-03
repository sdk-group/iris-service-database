'use strict'

let events = {
	database: {}
};

let tasks = [{
	name: 'database.get',
	handler: 'get'
}, {
	name: 'database.getMulti',
	handler: 'getMulti'
}, {
	name: 'database.upsert',
	handler: 'upsert'
}, {
	name: 'database.upsertNodes',
	handler: 'upsertNodes'
}, {
	name: 'database.insert',
	handler: 'insert'
}, {
	name: 'database.insertNodes',
	handler: 'insertNodes'
}, {
	name: 'database.replace',
	handler: 'replace'
}, {
	name: 'database.replaceNodes',
	handler: 'replaceNodes'
}, {
	name: 'database.remove',
	handler: 'remove'
}, {
	name: 'database.lock',
	handler: 'lock'
}, {
	name: 'database.getAndLock',
	handler: 'getAndLock'
}, {
	name: 'database.touch',
	handler: 'touch'
}, {
	name: 'database.getAndTouch',
	handler: 'getAndTouch'
}, {
	name: 'database.counter',
	handler: 'counter'
}, {
	name: 'database.append',
	handler: 'append'
}, {
	name: 'database.prepend',
	handler: 'prepend'
}, {
	name: 'database.reconnect',
	handler: 'reconnect'
	}];

module.exports = {
	module: require('./database.js'),
	name: 'database',
	permissions: [],
	tasks: tasks,
	exposed: true,
	events: {
		group: 'database',
		shorthands: events.database
	}
};