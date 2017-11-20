const express = require('express')
const app = express()

// Build Your Route Here
app.get('/', function(req, resp){
  resp.render("index", {
    name: "Nick"'
    school: "Flatiron School"'
  })

  
})

module.exports = app
