import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    bmdcNo: {
      type: String,
    },
    nmcNo: {
      type: String,
    },
    mobile: {
      type: String,
      required: true,
    },
    department: {
      type: String,
    },
    education: {
      type: String,
    },
    category: {
      type: String,
    },
    division: {
      type: String,
    },
    district: {
      type: String,
    },
    address: {
      type: {},
      required: true,
    },
    thana: {
      type: String,
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'other'], // Assuming these are the possible values
    },
    answer: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("users", userSchema);
