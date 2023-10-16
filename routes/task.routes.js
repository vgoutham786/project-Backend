const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task.controller');

// Define task-related routes
router.post('/tasks', taskController.createTask);
router.get('/tasks/:taskId', taskController.getTaskById);
router.get('/tasks', taskController.getAllTasks);
router.put('/tasks/:taskId', taskController.updateTask);
router.delete('/tasks/:taskId', taskController.deleteTask);

module.exports = router;
