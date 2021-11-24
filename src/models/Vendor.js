const { DataTypes, Model } = require('sequelize')

const { sequelize } = require('./connection')

class Vendor extends Model {}

Vendor.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  vendor_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  vendor_referralcode: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'vendor',
  timestamps: true,
  underscored: true,
})

exports.Vendor = Vendor
