const express = require('express');

const path = require('path');

const rootdir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootdir, 'views', 'index.html'));
});

module.exports = router;