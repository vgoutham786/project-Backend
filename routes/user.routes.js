const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// Define user-related routes
router.post('/users', userController.createUser);
router.get('/users/:id', userController.getUserById);
router.get('/users', userController.getAllUsers);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
