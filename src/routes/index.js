var express = require('express')
var router = express.Router()
var user = require('./user')

router.use('/users', user)
router.get('/', (req, res) => {
  res.send({ Description: 'Api Sequelize com Express', Version: '1.0.0' })
})

module.exports = router
