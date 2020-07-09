const express = require('express');
const router = express.Router();

//Create a route    GET api/posts
//Description       Test Route
//Access            Public

router.get('/', (req, res) => res.send('Posts route'));

module.exports = router;
