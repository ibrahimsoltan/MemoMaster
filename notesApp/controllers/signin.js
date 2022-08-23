const bcrypt = require("bcrypt");
const User = require("../models/users");
module.exports = (req, res) => {
  const { userName, password } = req.body;
  User.findOne({ userName }, (error, user) => {
    if (user) {
      bcrypt.compare(password, user.password, (error, rightData) => {
        if (rightData) {
          req.session.userId = user._id;
          res.json({ data: user, code: 200 });
        } else {
          res.json({ error: "Invalid Password" });
        }
      });
    } else {
      res.json({ error: "No User Found" });
    }
  });
};
