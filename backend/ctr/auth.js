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
    const allUser = await User.find();
    const userGetlenght = allUser.length  ;
    const newUser = new User({
      ...req.body,
      password: hash,
      isAdmin: true,
      status:"false",
      idgenerate: userGetlenght
    });

    await newUser.save();
    console.log(userGetlenght);
    res.status(200).send("User has been created.");
  } catch (err) {
    next(err);
  }
};

export const getallUser = async (req, res, next) => {
  try {
    const allUser = await User.find();
    res.status(200).json(allUser);
  } catch (err) {
    next(err);
  }
};

export const deleteThisUser = async (req, res, next) => {
  try {
    const deleteUser = await User.findByIdAndDelete(req.params.id);
    if (!deleteUser) {
      return res.status(404).json({ error: 'Car not found' });
    }
    return res.status(200).json(deleteUser);
    // console.log("DeleteThisUser Test Api");
  } catch (err) {
    next(err);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const allUserbyid = await User.findById(req.params.id);
     res.status(200).json(allUserbyid);
    // console.log('testgetuserbyid api');
  } catch (err) {
    next(err);
  }
};

export const editUserById = async (req, res, next) => {
  try {
    const newData = new User({  
      ...req.body,
    });
    const updatedata = await User.findByIdAndUpdate(req.body._id, { $set: newData }, { new: true });
    console.log(updatedata);
    if (!updatedata) {
      
      return res.status(404).json({ error: 'User not found' });
    }
    return res.status(200).json(updatedata);
  } catch (err) {
    next("err");
  }
};

export const deleteThisUserPhotos = async (req, res, next) => {
  try {
    
    const deletePhotos = await User.findByIdAndUpdate(req.params.id, { $set: {photos: []} });
    if (!deletePhotos) {
      return res.status(404).json({ error: 'Car not found' });
    }
    return res.status(200).json(deletePhotos);
  } catch (err) {
    next(err);
  }
};


export const updateStatusUser = async (req, res, next) => {
  try {
    const { id, status } = req.body;

    const updatedStatus = await User.findByIdAndUpdate(id, { status }, { new: true });
    if (!updatedStatus) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.status(200).json(updatedStatus);
  } catch (err) {
    next("err");
  }
};