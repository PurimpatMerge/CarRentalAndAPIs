import Car from "../models/Car.js";

export const addCar = async (req, res, next) => {
  try {
    // console.log(1);
    const newCar = new Car({
      ...req.body,
      statusAble:"false"
    });
    await newCar.save();
    res.status(200).send("Car has been added successfuly.");
  } catch (err) {
    return res.status(400).send(err);
  }
};


export const getAllCar = async (req, res, next) => {
  try {
    // console.log(2);
    const allCar = await Car.find();
    res.status(200).json(allCar);
  } catch (err) {
    next(err);
  }
};




export const updateStatusCar = async (req, res, next) => {
  try {
    const { id, statusAble } = req.body;

    const updatedCar = await Car.findByIdAndUpdate(id, { statusAble }, { new: true });
    if (!updatedCar) {
      return res.status(404).json({ error: 'Car not found' });
    }

    return res.status(200).json(updatedCar);
  } catch (err) {
    next("err");
  }
};
export const deleteThiscar = async (req, res, next) => {
  try {
    const deleteCar = await Car.findByIdAndDelete(req.params.id);
    if (!deleteCar) {
      return res.status(404).json({ error: 'Car not found' });
    }

    return res.status(200).json(deleteCar);
  } catch (err) {
    next(err);
  }
};

