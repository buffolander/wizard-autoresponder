const { DataTypes, Model } = require('sequelize')

const { sequelize } = require('./connection')

class Affiliation extends Model {}

Affiliation.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  vendor_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'affiliation',
  timestamps: true,
  underscored: true,
})

exports.Affiliation = Affiliation
