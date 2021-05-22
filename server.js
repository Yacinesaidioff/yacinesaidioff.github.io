var http = require('http');
var fs = require('fs');
const express = require('express');
const { request, response } = require('express');
const app = express()
var bodyParser = require('body-parser')


app.set('view engine', 'ejs')

////////////////// M I D D L E W A R E S

app.use('/assets', express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(session({
  secret: '787898',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))
app.use(require('./middlewares/flash'))


//////////////////////////////////////////

app.get('/', (request, response) => {
  response.render('pages/index')
})





app.post('/', (request, response) => {
  if (request.body.username1 === undefined || request.body.username1 === '') {
    if (request.body.username2 === undefined || request.body.username2 === '') {
      request.flash('error', "Nom d'utilisatrur invalide !.")
      response.redirect('/')
    }
    request.flash('error', "Nom d'utilisatrur invalide !.")
    response.redirect('/')
  }

})


//////////////////////////////// L I S T E N I N G
app.listen(8080, console.log('listening at 8080.'))