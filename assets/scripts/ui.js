'use strict'

const showBooksTemplate = require('./templates/display-books.handlebars')

const onIndexSuccess = (data) => {
  const showBooksHtml = showBooksTemplate(data)
  $('.container').html(showBooksHtml)
}

const onIndexFailure = (data) => {
  $('#action-feedback').removeClass()
  $('#action-feedback').addClass('failure')
  $('#action-feedback').text('Loading failed')
  $('#action-feedback').show()
  setTimeout(function () {
    $('#action-feedback').hide()
  }, 4000)
}

module.exports = {
  onIndexFailure,
  onIndexSuccess
}
