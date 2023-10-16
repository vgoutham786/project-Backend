const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project.controller');

// Define project-related routes
router.post('/projects', projectController.createProject);
router.get('/projects/:projectId', projectController.getProjectById);
router.get('/projects', projectController.getAllProjects);
router.put('/projects/:projectId', projectController.updateProject);
router.delete('/projects/:projectId', projectController.deleteProject);

module.exports = router;
