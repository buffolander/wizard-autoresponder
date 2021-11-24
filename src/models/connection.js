const { Sequelize } = require('sequelize')

const { DATABASE_CNX_STR } = require('../constants')

let sequelize

exports.initDb = async () => {
  if (sequelize) {
    return sequelize
  }
  sequelize = new Sequelize(DATABASE_CNX_STR)
}

exports.sequelize = sequelize
