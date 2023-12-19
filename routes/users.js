/* routes/users.js */

const express = require('express');
const { getName } = require('../services/user.service');
const { isAuthorized } = require('../middlewares/auth.middleware');

const router = express.Router();

router.get('/', isAuthorized, function (req, res, next) {
  res.send('HELLO');
});

/* GET users listing. */
router.post('/', function (req, res, next) {
  const result = getName(req.body);

  if (result) {
    res.send(`Your name is ${result}`);
  } else {
    res.status(400).send("User wasn't sent");
  }
});

module.exports = router;