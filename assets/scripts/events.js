'use strict'

const ui = require('./ui.js')
//const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')

const onIndex = event => {
  event.preventDefault()
  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

const onDelete = () => {
  const id = $(event.target).data('id')
  api.destroy(id)
    .then(() => {
      onIndex()
    })
    .catch(ui.onDeleteFailure)
}

module.exports = {
  onIndex,
  onDelete
}
