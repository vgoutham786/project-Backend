const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

const Project = sequelize.define('Project', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  start_date: {
    type: DataTypes.DATE,
  },
  end_date: {
    type: DataTypes.DATE,
  },
  project_manager: {
    type: DataTypes.INTEGER,
  },
},{
  timestamps: false, // Disable timestamps
});

// Define associations with other models, if any

module.exports = Project;


