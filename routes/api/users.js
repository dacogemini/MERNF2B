// Deals with authentication

const express = require('express');
const router = express.Router();

// Instead of app.get, we now use router.get/.post. etc. 
// Don't need to use ./API/users/ because we already did that in our server file
// '/test' takes in a request and a response
//* @route GET api/users/test
//* @desc Testing users route
//* @access PUBLIC << Note: in order to access a private route, you'll need a JSON Web Token
router.get('/test', (req, res) => res.json({msg: "Users successful"}));

module.exports = router;

