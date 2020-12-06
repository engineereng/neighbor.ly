var express = require('express');

// Add the Firebase products that you want to use
require("firebase/auth");

var router = express.Router();

const createUser = async (req, res) => {
  const {
    email,
    phoneNumber,
    password,
    firstName,
    lastName
  } = req.body;

  const user = await admin.auth().createUser({
    email,
    phoneNumber,
    password,
    displayName: `${firstName} ${lastName}`
  });

  return res.send(user);
}

router.post('/signup', createUser);

module.exports = router;
module.exports = createUser;