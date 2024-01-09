import categoryModel from "../models/postModel.js";
import slugify from "slugify";

export const createPostController = async (req, res) => {
  try {
    // Extract post data from the request body
    req.body.userInfo = req.body._id;
    const { title, content,userInfo} = req.body;

    // Generate a slug for the post
    const slug = slugify(title, { lower: true });

    // Create a new post using the categoryModel
    const newPost = new categoryModel({
      title,
      content,
      userInfo,
      slug,
    });

    // Save the new post to the database
    await newPost.save();

    console.log('Post created successfully');
    console.log(newPost);

    res.status(201).json({
      success: true,
      data: newPost,
      message: "Post created successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Error in creating Post",
    });
  }
};

// export const createPostController = async (req, res) => {
//   try {
//     const { name } = req.body;
//     if (!name) {
//       return res.status(401).send({ message: "Name is required" });
//     }
//     const existingCategory = await postModel.findOne({ name });
//     if (existingCategory) {
//       return res.status(200).send({
//         success: false,
//         message: "Category Already Exisits",
//       });
//     }
//     const category = await new postModel({
//       name,
//       slug: slugify(name),
//     }).save();
//     res.status(201).send({
//       success: true,
//       message: "new Post created",
//       category,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       errro,
//       message: "Errro in Post",
//     });
//   }
// };

//update category
// export const updatePostController = async (req, res) => {
//   try {
//     const { name } = req.body;
//     const { id } = req.params;
//     const category = await postModel.findByIdAndUpdate(
//       id,
//       { name, slug: slugify(name) },
//       { new: true }
//     );
//     res.status(200).send({
//       success: true,
//       messsage: "Post Updated Successfully",
//       category,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       error,
//       message: "Error while updating Post",
//     });
//   }
// };

// get all cat
// export const postController = async (req, res) => {
//   try {
//     const category = await postModel.find({});
//     res.status(200).send({
//       success: true,
//       message: "All Posts List",
//       category,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       error,
//       message: "Error while getting all Post",
//     });
//   }
// };

// single category
// export const singlePostController = async (req, res) => {
//   try {
//     const category = await postModel.findOne({ slug: req.params.slug });
//     res.status(200).send({
//       success: true,
//       message: "Get SIngle Post SUccessfully",
//       category,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       error,
//       message: "Error While getting Single Post",
//     });
//   }
// };

//delete category
// export const deletePostCOntroller = async (req, res) => {
//   try {
//     const { id } = req.params;
//     await categoryModel.findByIdAndDelete(id);
//     res.status(200).send({
//       success: true,
//       message: "Post Deleted Successfully",
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       message: "error while deleting Post",
//       error,
//     });
//   }
// };
