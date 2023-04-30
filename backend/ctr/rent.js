import Rent from "../models/Rentdetail.js";
import Car from "../models/Car.js";

export const addRent = async (req, res, next) => {
    try {
      // console.log(1);
      const newRent = new Rent({
        ...req.body,
        activestatus: 'Processing'
      });
      await newRent.save();
      res.status(200).send("Rental has been added successfuly.");
    } catch (err) {
      return res.status(400).send(err);
    }
  };

  export const getAllRent = async (req, res, next) => {
    try {
      // console.log(2);
      const allRent = await Rent.find();
      console.log(allRent.carid);
      const car = await Car.find(allRent.carid);
     
      // console.log(car);
      // res.status(200).json(allRent);
    } catch (err) {
      next(err);
    }
  };



  