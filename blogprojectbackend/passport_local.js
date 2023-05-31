
const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20").Strategy
const FacebookStrategy = require("passport-facebook").Strategy;



passport.use(
    new GoogleStrategy(
        {
            clientID:"YOUR_CLIENT_ID",
            clientSecret:"YOUR_CLIENT_SECRET",
            callbackURL:"auth/google/callback"
        },(accessToken,refreshToken,profile,done)=>{
            return done(null,profile)
        }
    )
)

passport.serializeUser((user,done)=>{
    done(null,user)
})

passport.deserializeUser((user,done)=>{
    done(null,user)
})





// Facebook OAuth ayarları
passport.use(
  new FacebookStrategy(
    {
      clientID: "FACEBOOK_APP_ID",
      clientSecret: "FACEBOOK_APP_SECRET",
      callbackURL: "/auth/facebook/callback",
      profileFields: ["id", "displayName", "email"],
    },
    (accessToken, refreshToken, profile, done) => {
     
      return done(null, profile);
    }
  )
);

// Oturum yönetimi için kullanıcıyı kimliklendirme
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

