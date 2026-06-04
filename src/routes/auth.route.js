// yahan py ab APIs create hon gi
const express = require('express');
const authController = require('../controllers/auth.controller');
const router = express.Router();


// POST /api/auth/register - to register a new user
router.post('/register', authController.registerUser);


module.exports = router;
