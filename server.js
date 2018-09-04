const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

//Initialize Express
const app = express();

// body-parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

// Connect to MongoDB | Mongoose creates a 'virtual object database'
// Mongoose converts Relational DB (firtName, lastName, Phone) info into (1) object
mongoose
    .connect(db)
    // Promise = success
    .then(() => console.log('MongoDB connected!'))
    // Catch = part of the promise
    .catch(err => console.log(err));


app.get('/', (req, res) => res.send('Test'));

// Use Routes | file users.js => users...
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

// Deploy to Heroku PORT or locally to port 5000
const port = process.env.PORT || 5000;

// Run Server | Use ES6 Template Literal
app.listen(port, () => console.log(`
server running on ${port}`));