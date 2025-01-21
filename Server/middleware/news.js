const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Middleware to verify JWT
exports.authenticateToken = (req, res, next) => {
    const token = req.cookies.token||req.headers['authorization'];
    if (!token) return res.status(403).json({ error: 'Access denied' });

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ error: 'Invalid token' });
        req.user = user;
        next();
    });
};
