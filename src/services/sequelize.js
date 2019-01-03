const Sequelize = require('sequelize')
let DB = 'test'

const sequelize = new Sequelize(DB, 'root', null, {
  dialect: 'mysql',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

sequelize.sync()

module.exports = sequelize
