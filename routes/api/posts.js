const express = require('express');
const router = express.Router();

// Instead of app.get, we now use router.get/.post. etc. 
// Don't need to use ./API/users/ because we already did that in our server file
// '/test' takes in a request and a response
//* @route GET api/posts/test
//* @desc Testing post route
//* @access PUBLIC

router.get('/test', (req, res) => res.json({msg: "Posts successful"}));

module.exports = router;