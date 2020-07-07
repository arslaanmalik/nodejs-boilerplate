//importing express
const express = require('express');

//intialize app varaible with express
const app = express();

//get the request and then send the
app.get('/', (req, res) => res.send('API Running'));

// save port to a variable. process.env will look for a port in the .env file.
// If there is no env file it will run on port 5000 by default
const PORT = process.env.PORT || 5000;

//Listen to a port
app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));

//ok
