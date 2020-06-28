const passport = require("passport");
const GoogleStretgy = require('passport-google-oauth20');


passport.use(new GoogleStretgy({
    //options for strategy
    clientID: process.env.CLIENTID,
    clientSecret: process.env.CLIENTSECRET,
    callbackURL: '/auth/google/redirect'
}, (accessToken, refreshToken, profile, done) => {
    // passport callback function 
    console.log("profile", profile.displayName)
}))