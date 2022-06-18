const express = require("express");
const router = express.Router();
const User = require("../models/Users");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

// Route 1 : sign up for new user
router.post(
  "/signup",
  [
    body("name", "Name should be atleast 5 characters!").isLength({ min: 5 }),
    body("email", "Please enter a valid email").isEmail(),
    body("password", "password should be atleast be 8 characters").isLength({
      min: 8,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // check user exists
    const checkUser = await User.findOne({ email: req.body.email });
    if (checkUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // create user
    try {
      // taking salt size 10
      const salt = await bcrypt.genSalt(10);
      const hashPass = await bcrypt.hash(req.body.password, salt);

      //save user to database
      newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashPass,
      });

      // send auth token
      // using user id for jwt payload
      const data = { user: { id: newUser.id } };
      const authtoken = jwt.sign(data, JWT_SECRET_KEY);

      res.status(200).json({ authtoken: authtoken });
    } catch (error) {
      return res.status(500).send("Internal server error !");
    }
  }
);

// Route 2 : Login for user
router.post(
  "/login",
  [
    body("email", "Please enter valid email").isEmail(),
    body("password", "Password cannnot be blank").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(400).json({ error: "Enter valid credentials !" });
      }
      // compare password
      const passwordCompare = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!passwordCompare) {
        return res
          .status(400)
          .json({ error: "Please enter valid credentials !" });
      }
      // send auth token
      const data = { user: { id: user.id } };
      const authtoken = jwt.sign(data, JWT_SECRET_KEY);

      res.status(200).json({ authtoken: authtoken });
    } catch (error) {
      console.log(error);
      return res.status(500).send("Internal server error !");
    }
  }
);

// Route 3 : Get logged in user info
router.post("/getUser", fetchuser, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send("Internal server error !");
  }
});

module.exports = router;
