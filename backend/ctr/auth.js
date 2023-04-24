import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import express from "express";

const app = express();
app.set("View engine", "ejs");

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(404).send("Username not Found!");
    }
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) {
      return res.status(401).send("Password is not Correct!");
    }

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );

    const { password, isAdmin, ...otherDetails } = user._doc;
    res.cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ details: { ...otherDetails }, isAdmin });
  } catch (err) {
    next(err);
  }
};

// export const login = async (req, res, next) => {
//     try {
//       const user = await User.findOne({ username: req.body.username });
//       if (!user){
//         return res.status(404).send("Username not Found!")
//       }
//       const isPasswordCorrect = await bcrypt.compare(
//         req.body.password,
//         user.password
//       );
//       if (!isPasswordCorrect){
//         return res.status(401).send("Password is not Correct!")
//       }
//       res.status(200).send("Login success!")
//     } catch (err) {
//       next(err);
//     }
//   };

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      ...req.body,
      password: hash,
      isAdmin: true,
    });

    await newUser.save();
    res.status(200).send("User has been created.");
  } catch (err) {
    next(err);
  }
};
