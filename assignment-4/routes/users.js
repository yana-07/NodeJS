const express = require('express');

const router = express.Router();

const users = [];

router.get('/users', (req, res, next) => {
    res.render('users', { pageTitle: 'Users',  users, hasUsers: users.length > 0 });
});

router.post('/add-user', (req, res, next) => {
    users.push({ name: req.body.username });
    res.redirect('/users');
});

module.exports = router;