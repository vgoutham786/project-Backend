const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

const Team = sequelize.define('Team', {
  teamName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  members: {
    type: DataTypes.JSON, // Store team member user IDs in JSON format
  },
},{
  timestamps: false, // Disable timestamps
});

module.exports = Team;
