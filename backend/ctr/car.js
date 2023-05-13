import Car from "../models/Car.js";

export const addCar = async (req, res, next) => {
  try {
    // console.log(1);
    const newCar = new Car({
      ...req.body,
      statusAble: "false",
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

export const getCarById = async (req, res, next) => {
  try {
    const allCarbyid = await Car.findById(req.params.id);
    res.status(200).json(allCarbyid);
  } catch (err) {
    next(err);
  }
};

export const getCarBySearch = async (req, res, next) => {
  try {
    // console.log(2);
    const allCar = await Car.find();
    res.status(200).json(allCar);
  } catch (err) {
    next(err);
  }
};

export const getCarByFilter = async (req, res, next) => {
  try {
    const { types, seats, brands } = req.params;
    const typesArr = types ? types.split(",") : [];
    const seatsArr = seats ? seats.split(",") : [];
    const brandsArr = brands ? brands.split(",") : [];

    // res.status(200).json(allCar);
    // const [filteredCars, allCars] = await Promise.all([
    //   // Query for filtered cars if any filters are specified
    //   typesArr.length > 0 || seatsArr.length > 0 || brandsArr.length > 0
    //     ? Car.find({
    //         type: { $in: typesArr },
    //         seat: { $in: seatsArr },
    //         brand: { $in: brandsArr }
    //       })
    //     : [],
    //   // Query for all cars if no filters are specified
    //   Car.find()
    // ]);
   
    // Merge the filtered cars with all cars
    // const result = filteredCars.length > 0 ? filteredCars : allCars;
    const allCarbyid = await Car.findById(req.params.id);
    res.status(200).json(allCarbyid);
  } catch (err) {
    next(err);
  }
};

export const updateStatusCar = async (req, res, next) => {
  try {
    const { id, statusAble } = req.body;

    const updatedCar = await Car.findByIdAndUpdate(
      id,
      { statusAble },
      { new: true }
    );
    if (!updatedCar) {
      return res.status(404).json({ error: "Car not found" });
    }

    return res.status(200).json(updatedCar);
  } catch (err) {
    next("err");
  }
};

export const updateStatusRentCar = async (req, res, next) => {
  try {
    const { id, carRentStatus } = req.body;

    const updatedCar = await Car.findByIdAndUpdate(
      id,
      { carRentStatus },
      { new: true }
    );
    if (!updatedCar) {
      return res.status(404).json({ error: "Car not found" });
    }

    return res.status(200).json(updatedCar);
  } catch (err) {
    next("err");
  }
};

export const editCarById = async (req, res, next) => {
  try {
    const newData = new Car({
      ...req.body,
    });
    const updatedata = await Car.findByIdAndUpdate(
      req.body._id,
      { $set: newData },
      { new: true }
    );
    if (!updatedata) {
      return res.status(404).json({ error: "Car not found" });
    }
    return res.status(200).json(updatedata);
  } catch (err) {
    next("err");
  }
};

export const deleteThiscar = async (req, res, next) => {
  try {
    const deleteCar = await Car.findByIdAndDelete(req.params.id);
    if (!deleteCar) {
      return res.status(404).json({ error: "Car not found" });
    }

    return res.status(200).json(deleteCar);
  } catch (err) {
    next(err);
  }
};

export const deleteThiscarPhotos = async (req, res, next) => {
  try {
    const deletePhotos = await Car.findByIdAndUpdate(req.params.id, {
      $set: { photos: [] },
    });
    if (!deletePhotos) {
      return res.status(404).json({ error: "Car not found" });
    }
    return res.status(200).json(deletePhotos);
  } catch (err) {
    next(err);
  }
};
