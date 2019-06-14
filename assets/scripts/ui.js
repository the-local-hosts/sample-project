'use strict'

const showBooksTemplate = require('./templates/display-books.handlebars')


const onIndexSuccess = (data) => {

   const showBooksHtml = showBooksTemplate({ books: data.books })
  $('.content').html(showBooksHtml)
  chart.render()
  $('#action-feedback').removeClass()
  $('#action-feedback').addClass('success')
  $('#action-feedback').text('updated successfully')
  $('#action-feedback').show()
  setTimeout(function () {
    $('#action-feedback').hide()
  }, 3000)
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
