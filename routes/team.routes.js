const express = require('express');
const router = express.Router();
const teamController = require('../controllers/team.controller');

// Define team-related routes
router.post('/teams', teamController.createTeam);
router.get('/teams/:id', teamController.getTeamById);
router.get('/teams', teamController.getAllTeams);
router.put('/teams/:id', teamController.updateTeam);
router.delete('/teams/:id', teamController.deleteTeam);

module.exports = router;
