'use strict'

const config = require('./config.js')

const index = () => {
  return $.ajax({
    url: config.apiUrl + '/books',
    method: 'GET'
  })
}

module.exports = {
  index
}
