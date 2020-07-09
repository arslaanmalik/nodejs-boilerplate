const express = require('express');
const router = express.Router();

//Create a route    GET api/auth
//Description       Test Route
//Access            Public

router.get('/', (req, res) => res.send('Auth route'));

module.exports = router;
