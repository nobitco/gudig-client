'use strict'

const request = require('request-promise')
const Promise = require('bluebird')

class Client {
  constructor (options) {
    this.options = options || {
      endpoint: {
        pictures: 'http://api.gudig.com/picture',
        users: 'http://api.gudig.com/user',
        auth: 'http://api.gudig.com/auth'
      }
    }
  }
  getUser (username, callback) {
    let opts = {
      method: 'GET',
      uri: `${this.options.endpoints.users}/${username}`,
      json: true
    }

    return Promise.resolve(request(opts)).asCallback(callback)
  }

  auth () {}

  saveUser () {}
}

module.exports = Client
