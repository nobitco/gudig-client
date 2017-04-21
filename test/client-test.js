'use strict'

const test = require('ava')
const gudig = require('../')
// const fixtures = require('./fixtures')

let options = {
  endpoints: {
    pictures: 'http://gudig.test/picture',
    users: 'http://gudig.test/user',
    auth: 'http://gudig.test/auth'
  }
}

test.beforeEach(t => {
  t.context.client = gudig.createClient(options)
})

test('client', t => {
  const client = t.context.client

  t.is(typeof client.saveUser, 'function')
  t.is(typeof client.getUser, 'function')
  t.is(typeof client.auth, 'function')
})
