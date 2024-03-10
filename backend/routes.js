const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');
const messageController = require('./controllers/messageController');

router.post('/users', userController.createUser);
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.post('/messages', messageController.createMessage);
router.get('/messages', messageController.getAllMessages);

module.exports = router;
