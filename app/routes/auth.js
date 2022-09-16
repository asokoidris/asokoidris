const express = require('express');


const UserAuthController
    = require('../controllers/auth')

const router = express.Router();



router.post('/register',
    UserAuthController.userSignUp
)



router.post('/login',
    UserAuthController.userSignIn
)


module.exports = router;