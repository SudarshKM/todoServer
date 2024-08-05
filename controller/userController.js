const users = require("../model/userModel");

exports.addUserController = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const exsitingUser = await users.findOne({ email });

    if (exsitingUser) {
      res.status(406).json("Account already exist");
    } else {
      const newuser = new users({
        username,
        email,
        password,
      });

      await newuser.save();

      res.status(200).json(newuser);
    }
  } catch (error) {
    res.status(401).json(error);
  }
};

exports.getUsersController = async (req, res) => {
  const allUsers = await users.find();

  try {
    if (allUsers) {
      res.status(200).json(allUsers);
    } else {
      res.status(406).json("No users to display");
    }
  } catch (error) {
    res.status(401).json(error);
  }
};
