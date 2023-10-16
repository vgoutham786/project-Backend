const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('Admin', 'Project Manager', 'Team Member'),
    allowNull: false,
  },
  profile_picture: {
    type: DataTypes.STRING,
  },
}, {
  timestamps: false, // Disable timestamps
})

module.exports = User;
