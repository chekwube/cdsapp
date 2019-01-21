const express = require('express')
const app = express()
const blahblah = require('./api/routes/blah')

const morgan = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

mongoose.connect('', {useNewUrlParser: true})
app.use(morgan('dev'))

app.use('/blah', blahblah)

app.use((req, res, next)=>{
    const error = new Error('Not Found!')
    error.status = 404
    next(error)
})

app.use((error, req, res, next)=>{
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app