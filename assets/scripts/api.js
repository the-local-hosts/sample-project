'use strict'

const config = require('../config.js')

const index = () => {
  return $.ajax({
    url: config.apiUrl + '/books',
    method: 'GET'
  })
}

const destroy = (id) => {
  return $.ajax({
    url: config.apiUrl + '/books/' + id,
    method: 'DELETE'
  })
}

module.exports = {
  index,
  destroy
}
