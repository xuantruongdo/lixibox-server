const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const argon2 = require("argon2");

class userController {
  async register(req, res) {
    const { username, email, password } = req.body;
    try {
      if (!username || !password || !email) {
        return res.status(400).json({
          success: false,
          message: "Please fill full the information",
        });
      }
      const checkUsername = await User.findOne({ username: username });
      if (checkUsername) {
        return res.status(400).json({
          success: false,
          message: `Username ${username} already in use`,
        });
      }

      const checkEmail = await User.findOne({ email: email });
      if (checkEmail) {
        return res.status(400).json({
          success: false,
          message: `Email ${email} already in use`,
        });
      }
      const hashedPassword = await argon2.hash(password);
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
      });
      await newUser.save();
      return res.json({ success: true, data: newUser });
    } catch (err) {
      res.status(500).json({ success: false, message: "Error !" });
    }
  }

  async login(req, res) {
    const { username, password } = req.body;
    try {
      if (!username || !password) {
        return res.status(400).send({
          success: false,
          message: "Please fill full the information",
        });
      }
      const user = await User.findOne({ username: username });

      if (!user) {
        return res
          .status(400)
          .send({ success: false, message: `${username} does not exist` });
      }

      const passwordValid = await argon2.verify(user.password, password);

      if (!passwordValid) {
        return res
          .status(400)
          .send({ success: false, message: "Password incorrect" });
      }

      const accessToken = jwt.sign(
        { userId: user._id, isAdmin: user.isAdmin },
        process.env.JWT_SECRET
      );

      return res.json({
        success: true,
        message: "Login successfully",
        accessToken: accessToken,
      });
    } catch (err) {
      res.status(500).json({ success: false, message: "Error !" });
    }
  }

  async getProfile(req, res){
    try{
        const user = await User.findById(req.userId)
        return res.json({success: true, data: user})

    }
    catch(err){
        res.status(500).json({ success: false, message: "Error !" });
    }
  }
}

module.exports = new userController();
