'use strict'

const events = require('./events')
const ui = require('./ui')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#books-index').on('click', events.onIndex)
  $('#books-clear').on('click', ui.clearBooks)
  $('.container').on('click', '.delete-book', events.onDelete)
})
