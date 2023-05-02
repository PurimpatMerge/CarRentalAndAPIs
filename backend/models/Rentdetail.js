import mongoose from "mongoose";
const RentSchema = new mongoose.Schema(
  {
    photos: {
      type: [String],
      required: true,
      },
    cusfname: {
      type: String,
      required: true,
    },
    cuslname: {
      type: String,
      required: true,
    },
    cusemail: {
      type: String,
      required: true,
    },
    cusphone: {
      type: String,
      required: true,
    },
    getcar: {
      type: String,
      required: true,
    },
    getcartime: {
      type: String,
      required: true,
    },
    returncar: {
      type: String,
      required: true,
    },
    returncartime: {
      type: String,
      required: true,
    },
    carid: {
      type: String,
      required: true,
    },
    adminid: {
      type: String,
      required: false,
    },
    activestatus: {
      type: String,
      required: false,
    },
    responsibilities : {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Rent", RentSchema);