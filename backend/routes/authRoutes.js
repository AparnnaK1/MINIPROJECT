const express = require('express');
const router = express.Router();
const cors = require('cors');
const {test,signupuser,signinuser} = require ('../controllers/authController')

//middleware
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'

    })
)

router.get('/',test)
router.post('/SignUp',signupuser)
router.post('/SignIn',signinuser)
module.exports = router