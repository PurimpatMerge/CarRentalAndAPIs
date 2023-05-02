import Rent from "../models/Rentdetail.js";
import Car from "../models/Car.js";
import User from "../models/User.js";
import Work from "../models/workflow.js";
export const addRent = async (req, res, next) => {
  try {
    // console.log(1);
    const newRent = new Rent({
      ...req.body,
      activestatus: "Processing",
    });
    await newRent.save();
    res.status(200).send("Rental has been added successfuly.");
  } catch (err) {
    return res.status(400).send(err);
  }
};

export const getAllRent = async (req, res, next) => {
  try {
    const allRent = await Rent.find({ activestatus: "Processing" });
    const carIds = allRent.map((rent) => rent.carid);
    const cars = await Car.find({ _id: { $in: carIds } }).lean(); // add .lean() to get plain JavaScript objects instead of Mongoose documents
    const rentAndCarIds = allRent.map((rent) => ({
      rentid: rent._id,
      getcartime: rent.getcartime,
      returncartime: rent.returncartime,
      carid: rent.carid,
      car: cars.find((car) => car._id.toString() === rent.carid.toString()), // add the corresponding car document to the rent object based on the carid
    }));
    // console.log(rentAndCarIds);
    res.status(200).send(rentAndCarIds);
  } catch (err) {
    next(err);
  }
};

export const getRentById = async (req, res, next) => {
  try {
    console.log(req.params.id);
    const allRentbyid = await Rent.findById(req.params.id);
    res.status(200).json(allRentbyid);
  } catch (err) {
    next(err);
  }
};


export const distributionAndUpdateStatus = async (req, res, next) => {
  try {
    const getCounter = await Work.find();

    // validation for distribution that not more than idgernate

    const workerAdmin = parseInt(getCounter[0].distribution) + 1;

    const user = await User.findOne({ idgenerate: workerAdmin });

    const id = req.params.id; // get the ID from the URL parameter

    const updatedStatusAndResponse = await Rent.findByIdAndUpdate(
      id,
      { activestatus: "confirm", responsibilities: user.fname },
      { new: true }
    );

    res.status(200).json(updatedStatusAndResponse);
  } catch (err) {
    next(err);
  }
};