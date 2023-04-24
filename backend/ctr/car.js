import Car from "../models/Car.js";

export const addCar = async (req, res, next) => {
  try {
    console.log(1);
    const newCar = new Car({
      ...req.body,
    });
    await newCar.save();
    res.status(200).send("Car has been added successfuly.");
  } catch (err) {
    return res.status(400).send(err);
  }
};
