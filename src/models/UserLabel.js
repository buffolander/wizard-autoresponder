const { DataTypes, Model } = require('sequelize')

const { sequelize } = require('./connection')
const { User } = require('./User')

class UserLabel extends Model {}

UserLabel.init({
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
  label: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'userlabel',
  timestamps: true,
  underscored: true,
})

UserLabel.belongsTo(User, { foreignKey: 'user_id' })

exports.UserLabel = UserLabel
