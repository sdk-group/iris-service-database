'use strict'

let events = {
  reports: {}
}

let tasks = [];


module.exports = {
  module: require('./database.js'),
  permissions: [],
  tasks: tasks,
  exposed: true,
  events: {
    group: 'database',
    shorthands: events.reports
  }
};