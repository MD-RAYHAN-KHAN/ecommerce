import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  createPostController
} from "../controllers/postController.js";

const router = express.Router();

//routes
// create post
router.post(
  "/create-post",
  // requireSignIn,
  // isAdmin,
  createPostController
);

// //update post
// router.put(
//   "/update-post/:id",
//   requireSignIn,
//   updatePostController
// );

// //getALl post
// router.get("/get-post", postController);

// // get singl post
// router.get("/single-post/:slug", singlePostController);

// //delete post
// router.delete(
//   "/delete-post/:id",
//   isAdmin,
//   requireSignIn,
//   deletePostController
// );

export default router;
