const passport = require("passport");

const authenticate = async (req, res) => {
    passport.authenticate("jwt", (err, user, info) => {
        if (err) {
            return res
                .status(500)
                .send({ data: null, success: false, error: info });
        }
        if (!user) {
            return res.send({ data: null, success: false, error: info });
        }
        req.user = user;
    })(req, res, next);
};

module.exports = authenticate;
