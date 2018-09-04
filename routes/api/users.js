// Deals with authentication

const express = require('express');
const router = express.Router();

// Load User model
const User = require('../../models/User');

// Instead of app.get, we now use router.get/.post. etc. 
// Don't need to use ./API/users/ because we already did that in our server file
// '/test' takes in a request and a response
//* @route GET api/users/test
//* @desc Testing users route
//* @access PUBLIC << Note: in order to access a private route, you'll need a JSON Web Token

router.get('/test', (req, res) => res.json({
    msg: "Users successful"
}));

//* @route GET api/users/register
//* @desc Register a user
//* @access PUBLIC << Note: in order to access a private route, you'll need a JSON Web Token

router.post('/register', (req, res) => {
        //todo | Use mongoose to find if email exists
        User.findOne({
                email: req.body.email
            }) //! << uses body-parser
            // Promise
            // A promise is a placeholder 
            // into which the successful result 
            // value or reason for failure will materialize.
            .then(user => {
                if (user) {
                    return res.status(400).json({
                        email: 'Email already exists'
                    });
                } else {
                    const newUser = new User({
                        name: req.body.name,
                        email: req.body.email,
                        avatar,
                        password: req.body.password
                    });
                }
            })
    }),

    module.exports = router;