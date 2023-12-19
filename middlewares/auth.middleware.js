/* middlewares/auth.middleware.js */

const isAuthorized = (req, res, next) => {
    if (req.headers.authorization === process.env.SECRET_KEY) {
        next();
    } else {
        res.status(401).send();
    }
};

module.exports = { isAuthorized };