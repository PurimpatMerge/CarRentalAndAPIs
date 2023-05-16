import Rent from "../models/Rentdetail.js";
import Car from "../models/Car.js";
import User from "../models/User.js";
import Work from "../models/workflow.js";
import nodemailer from "nodemailer";


export const addRent = async (req, res, next) => {

  //get data a car
  const carbyid = await Car.findById(req.body.carid);

  const receipt = new Rent({
    ...req.body,
  });
 
  const receiptAll = {
    ...receipt,
    ...carbyid.toObject(),
   
  };
  
console.log('receiptAll is:',receiptAll);
  const generateCarRentalReceipt = () => {
    return `
      <html>
        <head>
          <style>
            /* Inline CSS styles */
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f5f5f5;
            }
            
            .header {
              background-color: #333;
              color: #fff;
              padding: 10px;
              text-align: center;
            }
            
            .content {
              background-color: #fff;
              padding: 20px;
            }
            
            .rental-details {
              margin-bottom: 20px;
            }
            
            .rental-details h2 {
              font-size: 24px;
              margin: 0 0 10px;
            }
            
            .rental-details p {
              margin: 0;
            }
            
            .footer {
              background-color: #333;
              color: #fff;
              padding: 10px;
              text-align: center;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Chiangmai Car Rental Receipt</h1>
            </div>
            <div class="content">
              <div class="rental-details">
                <h2>Rental Details</h2>
                <p><strong>Customer Name:</strong>${receipt.cusfname} ${receipt.cuslname} </p>
                <p><strong>Car Model:</strong> ${receiptAll.brand} ${receiptAll.model} ${receiptAll.year}</p>
                <p><strong>Pick Location:</strong> ${receipt.getcar} </p>
                <p><strong>Return Location:</strong> ${receipt.returncar} </p>
                <p><strong>Rental Duration:</strong> ${receipt.getcartime} - ${receipt.returncartime}</p>
                <p><strong>Total Amount:</strong> ${receipt.totalprice}</p>
              </div>
              <img src="http://res.cloudinary.com/dmtdxulw2/image/upload/v1684179872/otvwb29lfavgos71pluy.jpg" alt="Car Image" style="max-width: 100%; height: auto;">
            </div>
            <div class="footer">
              <p>Thank you for choosing our car rental service!</p>
            </div>
          </div>
        </body>
      </html>
    `;
  };
  const email = req.body.cusemail; // Update variable name to 'cusemail'
   // create reusable transporter object using the Gmail SMTP transport
   let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "1998narapol@gmail.com",
      pass: "whjsdcsyqexlludx"
    },
  });
  // const filePath = path.join(__dirname, "../attachemail/Payment.html");
  const emailMsg = {
    from: '"Chiangmai Rent a car 👻" <Ghostware@example.com>', // sender address
    to: email, // Use the 'email' variable directly
    subject: "ใบเสร็จการเช่ารถ Chiangmai Rent a car", // Subject line
    html: generateCarRentalReceipt({receipt}),
  };

  try {
    // send mail with defined transport object
    const info = await transporter.sendMail(emailMsg);

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    const newRent = new Rent({
      ...req.body,
      activestatus: "Processing",
    });
    await newRent.save();
    res.status(200).send("Rental has been added successfully.");
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
      activestatus: rent.activestatus,
      car: cars.find((car) => car._id.toString() === rent.carid.toString()), // add the corresponding car document to the rent object based on the carid
    }));
    // console.log(rentAndCarIds);
    res.status(200).send(rentAndCarIds);
  } catch (err) {
    next(err);
  }
};

export const getAllRentConfirm = async (req, res, next) => {
  try {
    const allRent = await Rent.find({ activestatus: "Confirmed" });
    const carIds = allRent.map((rent) => rent.carid);
    const cars = await Car.find({ _id: { $in: carIds } }).lean(); // add .lean() to get plain JavaScript objects instead of Mongoose documents
    const rentAndCarIds = allRent.map((rent) => ({
      responsibilities: rent.responsibilities,
      rentid: rent._id,
      getcartime: rent.getcartime,
      returncartime: rent.returncartime,
      carid: rent.carid,
      activestatus: rent.activestatus,
      car: cars.find((car) => car._id.toString() === rent.carid.toString()), // add the corresponding car document to the rent object based on the carid
    }));
    // console.log(rentAndCarIds);
    res.status(200).send(rentAndCarIds);
  } catch (err) {
    next(err);
  }
};

export const getAllHistory = async (req, res, next) => {
  try {
    const allRent = await Rent.find({
      activestatus: { $in: ["History", "Rejected"] },
    });
    const carIds = allRent.map((rent) => rent.carid);
    const cars = await Car.find({ _id: { $in: carIds } }).lean(); // add .lean() to get plain JavaScript objects instead of Mongoose documents
    const rentAndCarIds = allRent.map((rent) => ({
      responsibilities: rent.responsibilities,
      rentid: rent._id,
      getcartime: rent.getcartime,
      returncartime: rent.returncartime,
      carid: rent.carid,
      activestatus: rent.activestatus,
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
    // console.log(req.params.id);
    const allRentbyid = await Rent.findById(req.params.id);
    res.status(200).json(allRentbyid);
  } catch (err) {
    next(err);
  }
};

export const distributionAndUpdateStatus = async (req, res, next) => {
  try {
    const allUser = await User.find();
    const getCounter = await Work.find();
    const idForCounter = getCounter[0]._id;
    let workerAdmin = parseInt(getCounter[0].distribution);
    let user;

    do {
      workerAdmin += 1;
      user = await User.findOne({ idgenerate: workerAdmin, status: true });
      // console.log(user);
      // console.log("work", workerAdmin);
    } while (user === null && workerAdmin <= allUser.length);

    if(workerAdmin <= allUser.length){
      await Work.findByIdAndUpdate(
        idForCounter,
        { distribution: 0 },
        { new: true }
      );
    }

    //user not found
    if (user === null && workerAdmin > allUser.length) {
      await Work.findByIdAndUpdate(
        idForCounter,
        { distribution: 0 },
        { new: true }
      );
      // console.log("User not found and reset");
    }
    
    //update work
    if (user) {
      await Work.findByIdAndUpdate(
        idForCounter,
        { distribution: workerAdmin },
        { new: true }
      );
      if(workerAdmin === allUser.length){
        await Work.findByIdAndUpdate(
          idForCounter,
          { distribution: 0 },
          { new: true }
        );
      }
    }

    const id = req.params.id; // get the ID from the URL parameter
    const updatedStatusAndResponse = await Rent.findByIdAndUpdate(
      id,
      { activestatus: "Confirmed", responsibilities: user.fname },
      { new: true }
    );

    res.status(200).json(updatedStatusAndResponse);
  } catch (err) {
    next(err);
  }
};

export const distributionAndUpdateStatusRejected = async (req, res, next) => {
  try {
    const fname = req.params.fname;
    const id = req.params.id; // get the ID from the URL parameter
    const updatedStatusAndResponse = await Rent.findByIdAndUpdate(
      id,
      { activestatus: "Rejected", responsibilities: fname },
      { new: true }
    );
    res.status(200).json(updatedStatusAndResponse);
  } catch (err) {
    next(err);
  }
};

export const fineAndUpdateStatus = async (req, res, next) => {
  try {
    const id = req.params.id; // get the ID from the URL parameter
    console.log(id, req.body);
    const updatedStatusfine = await Rent.findByIdAndUpdate(
      id,
      { ...req.body, activestatus: "History" },
      { new: true }
    );
    if (!updatedStatusfine) {
      return res.status(404).json({ error: "fine not found" });
    }

    return res.status(200).send("1");
  } catch (err) {
    next("err");
  }
};
