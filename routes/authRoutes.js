const router = require('express').Router();
const passport = require('passport');

router.get("/login", (req, res) => {

})

router.get("/logout", (req, res) => {
    // handle with passport
    res.json({message: "loggin out!"})
})

// auth with google
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

// callback router from 0auth api

router.get("/google/redirect",passport.authenticate('google') ,(req, res) => {
    res.json({message: "callback url", req: req.body})
})


module.exports = router;