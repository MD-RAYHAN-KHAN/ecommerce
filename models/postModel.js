import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    userInfo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users", // This references the "users" collection
    },
    title: {
      type: String,
      required: [true, 'Title is Required'],
      trim: true,
    },
    content: {
      type: String,
      required: [true, 'Content is Required'],
      unique: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("posts", postSchema);
