'use strict'

const test = require('ava')
const gudig = require('../')
const nock = require('nock')
const fixtures = require('./fixtures')

let options = {
  endpoints: {
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

test('getUser', async t => {
  const client = t.context.client

  let user = fixtures.getUser()

  nock(options.endpoints.users)
    .get(`/${user.username}`)
    .reply(200, user)

  let result = await client.getUser(user.username)

  t.deepEqual(result, user)
})
