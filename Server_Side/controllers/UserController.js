const bcrypt = require("bcryptjs");
const auth = require("../models/User");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
exports.register = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashpass = await bcrypt.hash(req.body.pass, salt);
  const user = new auth({
    Name: req.body.name,
    Email: req.body.email,
    User_type_id: req.body.utid,
    Password: hashpass,
  });

  user
    .save()
    .then((registerduser) => {
      let payload = { id: registerduser._id || 0 };
      const token = jwt.sign(payload, config.TOKEN_SECRET);
      console.log("token genrated");
      console.log();
      res.status(200).json({ token });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

exports.all = (req, res) => {
  auth
    .find()
    .then((all) => {
      res.status(200).json(all);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

exports.login = (req, res) => {
  auth
    .findOne({ Email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(401).send("Invalid email/mobile");
      }

      bcrypt
        .compare(req.body.pass, user.Password)
        .then((validPass) => {
          if (!validPass) {
            return res.status(401).send("Mobile/Email or Password is wrong");
          }

          let payload = { id: user._id };
          const token = jwt.sign(payload, config.TOKEN_SECRET);

          //res.status(200).header("auth-token", token).send({ "token": token});
          res.status(200).json({ user, token });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.userEvent = (req, res) => {
  let events = [{}];
  res.json(events);
  return "..return succesfully";
};

exports.adminEvent = (req, res) => {
  let specialEvents = [{}];
  res.json(specialEvents);
};
