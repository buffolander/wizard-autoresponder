const { DataTypes, Model } = require('sequelize')

const { sequelize } = require('./connection')
const { UserLabel } = require('./UserLabel')

class User extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  phone_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'user',
  timestamps: true,
  underscored: true,
})

User.hasMany(UserLabel, { as: 'labels' })

exports.User = User
