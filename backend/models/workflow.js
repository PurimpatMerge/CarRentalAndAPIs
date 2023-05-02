import mongoose from "mongoose";
const WorkSchema = new mongoose.Schema(
  {
    distribution: {
        type: String,
        required: true,
      },
    },
  { timestamps: true }
);

export default mongoose.model("Work", WorkSchema);