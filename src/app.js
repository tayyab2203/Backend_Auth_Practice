const express = require('express');
const authRoutes = require('./routes/auth.route');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cookieParser());

// prefixing the auth routes with /api/auth so that all auth related routes will be accessed via /api/auth
app.use('/api/auth', authRoutes);

module.exports = app;