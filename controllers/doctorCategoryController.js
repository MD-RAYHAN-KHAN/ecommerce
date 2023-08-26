import doctorCategoryModel from "../models/doctorCategoryModel.js";
import slugify from "slugify";
export const createDoctorCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({ message: "Name is required" });
    }
    const existingDoctorCategory = await doctorCategoryModel.findOne({ name });
    if (existingDoctorCategory) {
      return res.status(200).send({
        success: false,
        message: "Doctor Category Already Exisits",
      });
    }
    const doctorCategory = await new doctorCategoryModel({
      name,
      slug: slugify(name),
    }).save();
    res.status(201).send({
      success: true,
      message: "new Doctor Category created",
      doctorCategory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      errro,
      message: "Errro in Doctor Category",
    });
  }
};

//update category
export const updateDoctorCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const dcotorCategory = await doctorCategoryModel.findByIdAndUpdate(
      id,
      { name, slug: slugify(name) },
      { new: true }
    );
    res.status(200).send({
      success: true,
      messsage: "Category Updated Successfully",
      dcotorCategory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while updating Dcotor Category",
    });
  }
};

// get all cat
export const doctorCategoryControlller = async (req, res) => {
  try {
    const dcotorCategory = await doctorCategoryModel.find({});
    res.status(200).send({
      success: true,
      message: "All Dcotor Category List",
      dcotorCategory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting all Dcotor Category",
    });
  }
};

// single category
export const singleDoctorCategoryController = async (req, res) => {
  try {
    const dcotorCategory = await doctorCategoryModel.findOne({ slug: req.params.slug });
    res.status(200).send({
      success: true,
      message: "Get SIngle Dcotor Category SUccessfully",
      dcotorCategory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error While getting Single Dcotor Category",
    });
  }
};

//delete category
export const deleteDoctorCategoryCOntroller = async (req, res) => {
  try {
    const { id } = req.params;
    await doctorCategoryModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Dcotor Category Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while deleting Dcotor Category",
      error,
    });
  }
};
