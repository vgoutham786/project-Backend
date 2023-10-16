const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

const Task = sequelize.define('Task', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  due_date: {
    type: DataTypes.DATE,
  },
  priority: {
    type: DataTypes.ENUM('High', 'Medium', 'Low'),
  },
  status: {
    type: DataTypes.ENUM('To Do', 'In Progress', 'Done'),
  },
},{
  timestamps: false, // Disable timestamps
});

module.exports = Task;
