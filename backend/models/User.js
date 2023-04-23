import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    photos: {
        type: [String],
        required: false,
      },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    fname: {
      type: String,
      required: false,
    },
    lname: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);