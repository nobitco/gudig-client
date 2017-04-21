'use strict'

const uuid = require('uuid-base62')

const fixtures = {
  getUser () {
    return {
      id: uuid.uuid(),
      name: 'A random user',
      username: 'platzigram',
      createAt: new Date().toString()
    }
  }
}

module.exports = fixtures
