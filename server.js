//importing express
const express = require('express');
const connectDB = require('./config/db');

//import routes like these that can be used as one variable like auth
const auth = require('./routes/api/auth');
const profile = require('./routes/api/profile');

//intialize app varaible with express
const app = express();

//Connect Database
connectDB();

// save port to a variable. process.env will look for a port in the .env file.
// If there is no env file it will run on port 5000 by default
const PORT = process.env.PORT || 5000;

//Listen to a port
const server = app.listen(PORT, () =>
  console.log(`Server is running on port ${PORT}`)
);

//get the request and then send the
app.get('/', (req, res) => res.send('API Running'));

//Define Routes  - There are Two ways. One way is
app.use('/api/users', require('./routes/api/users'));
//we can set the path to anything we want regardless here we have done /posts so the url would be localhost:5000/posts
app.use('/posts', require('./routes/api/posts'));

//Other way is to define the require above in the imports
app.use('/api/auth', auth);
app.use('/api/profile', profile);

//ok
