const express = require('express');
const router = express.Router();

//Create a route    GET api/users
//Description       Test Route
//Access            Public

router.get('/', (req, res) => res.send('User route'));

module.exports = router;
