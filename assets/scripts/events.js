'use strict'

const ui = require('./ui.js')
//const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')

const onIndex = event => {
  console.log('here')
  event.preventDefault()
  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

module.exports = {
  onIndex
}
