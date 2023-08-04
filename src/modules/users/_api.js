const express = require('express');
const { isLoggedIn } = require('../../shared/auth');
const {
  loginUser,
  postUser,
  getUsers,
  getUser,
  patchUser,
  deleteUser
} = require('./_controllers');

const router = express.Router();

router.post('/login', loginUser);
router.post('/users', isLoggedIn, postUser);
router.get('/users', isLoggedIn, getUsers);
router.get('/users/:id', isLoggedIn, getUser);
router.patch('/users/:id', isLoggedIn, patchUser);
router.delete('/users/:id', isLoggedIn, deleteUser);

module.exports = router;