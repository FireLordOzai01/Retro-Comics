const express = require('express');
const router = express.Router();

const usersController = require('./../controllers/users-controller');
// const { isAuthenticated } = require('./../passport/users-auth')
 
router.get('/', usersController.getAllUsers);
router.get('/:id', usersController.getUserById);
router.post('/login', usersController.login)
router.post('/', usersController.createUser);
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);
router.post('/seedUsers', usersController.seedDBUsers);

module.exports = router;