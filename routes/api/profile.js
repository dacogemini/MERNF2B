// Create user profile
const express = require('express');
const router = express.Router();

// Instead of app.get, we now use router.get/.post. etc. 
// Don't need to use ./API/users/ because we already did that in our server file
// '/test' takes in a request and a response
//* @route GET api/profile/test
//* @desc Testing profile route
//* @access PUBLIC

router.get('/test', (req, res) => res.json({msg: "Profile successful"}));

module.exports = router;