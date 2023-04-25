import mongoose from "mongoose";
const CarInfoSchema = new mongoose.Schema(
  {
    photos: {
        type: [String],
        required: false,
      },
    model: {
      type: String,
      required: true,
      unique: true,
    },
    brand: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    lplate: {
      type: String,
      required: true,
    },
    seat: {
      type: String,
      required: true,
    },
    door: {
      type: String,
      required: true,
    },
    engine: {
      type: String,
      required: true,
    },
    gear: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    statusAble: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("CarInfo", CarInfoSchema);