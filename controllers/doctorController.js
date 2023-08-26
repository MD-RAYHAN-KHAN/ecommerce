import doctorModel from "../models/DoctorModel.js";
import doctorCategoryModel from "../models/doctorCategoryModel.js";
import orderModel from "../models/orderModel.js";

import fs from "fs";
import slugify from "slugify";
import braintree from "braintree";
import dotenv from "dotenv";

dotenv.config();


export const createDoctorController = async (req, res) => {
  try {
    const { name, description, price, category, statuss } =
      req.fields;
    const { photo } = req.files;
    //Validation
    switch (true) {
      case !name:
        return res.status(500).send({ error: "Name is Required" });
      case !description:
        return res.status(500).send({ error: "Description is Required" });
      case !price:
        return res.status(500).send({ error: "Price is Required" });
      case !category:
        return res.status(500).send({ error: "Category is Required" });
      case photo && photo.size > 1000000:
        return res
          .status(500)
          .send({ error: "photo is Required and should be less then 1mb" });
    }

    const doctors = new doctorModel({ ...req.fields, slug: slugify(name) });
    if (photo) {
      doctors.photo.data = fs.readFileSync(photo.path);
      doctors.photo.contentType = photo.type;
    }
    await doctors.save();
    res.status(201).send({
      success: true,
      message: "Doctor Created Successfully",
      doctors,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in crearing Doctor",
    });
  }
};

//get all doctors
export const getDoctorController = async (req, res) => {
  try {
    const doctors = await doctorModel
      .find({})
      .populate("category")
      .select("-photo")
      .limit(12)
      .sort({ createdAt: -1 });
    res.status(200).send({
      success: true,
      counTotal: doctors.length,
      message: "ALldoctors ",
      doctors,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Erorr in getting doctors",
      error: error.message,
    });
  }
};
// get single doctor
export const getSingleDoctorController = async (req, res) => {
  try {
    const doctor = await doctorModel
      .findOne({ slug: req.params.slug })
      .select("-photo")
      .populate("category");
    res.status(200).send({
      success: true,
      message: "Single doctor Fetched",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Eror while getitng single doctor",
      error,
    });
  }
};

// get photo
export const doctorPhotoController = async (req, res) => {
  try {
    const doctor = await doctorModel.findById(req.params.pid).select("photo");
    if (doctor.photo.data) {
      res.set("Content-type", doctor.photo.contentType);
      return res.status(200).send(doctor.photo.data);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Erorr while getting photo",
      error,
    });
  }
};

//delete controller
export const deleteDoctorController = async (req, res) => {
  try {
    await doctorModel.findByIdAndDelete(req.params.pid).select("-photo");
    res.status(200).send({
      success: true,
      message: "doctor Deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting doctor",
      error,
    });
  }
};

//upate doctor
export const updateDoctorController = async (req, res) => {
  try {
    const { name, description, price, category, statuss } =
      req.fields;
    const { photo } = req.files;
    //alidation
    switch (true) {
      case !name:
        return res.status(500).send({ error: "Name is Required" });
      case !description:
        return res.status(500).send({ error: "Description is Required" });
      case !price:
        return res.status(500).send({ error: "Price is Required" });
      case !category:
        return res.status(500).send({ error: "Category is Required" });
      case photo && photo.size > 1000000:
        return res
          .status(500)
          .send({ error: "photo is Required and should be less then 1mb" });
    }

    const doctors = await doctorModel.findByIdAndUpdate(
      req.params.pid,
      { ...req.fields, slug: slugify(name) },
      { new: true }
    );
    if (photo) {
      doctors.photo.data = fs.readFileSync(photo.path);
      doctors.photo.contentType = photo.type;
    }
    await doctors.save();
    res.status(201).send({
      success: true,
      message: "Doctor Updated Successfully",
      doctors,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Updted doctor",
    });
  }
};

// filters
export const doctorFiltersController = async (req, res) => {
  try {
    const { checked, radio } = req.body;
    let args = {};
    if (checked.length > 0) args.category = checked;
    if (radio.length) args.price = { $gte: radio[0], $lte: radio[1] };
    const doctors = await doctorModel.find(args);
    res.status(200).send({
      success: true,
      doctors,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error WHile Filtering doctors",
      error,
    });
  }
};

// product count
export const doctorCountController = async (req, res) => {
  try {
    const total = await doctorModel.find({}).estimatedDocumentCount();
    res.status(200).send({
      success: true,
      total,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      message: "Error in doctor count",
      error,
      success: false,
    });
  }
};

// doctor list base on page
export const doctorListController = async (req, res) => {
  try {
    const perPage = 6;
    const page = req.params.page ? req.params.page : 1;
    const doctors = await doctorModel
      .find({})
      .select("-photo")
      .skip((page - 1) * perPage)
      .limit(perPage)
      .sort({ createdAt: -1 });
    res.status(200).send({
      success: true,
      doctors,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "error in per page ctrl",
      error,
    });
  }
};

// search product
export const searchDoctorController = async (req, res) => {
  try {
    const { keyword } = req.params;
    const resutls = await doctorModel
      .find({
        $or: [
          { name: { $regex: keyword, $options: "i" } },
          { description: { $regex: keyword, $options: "i" } },
        ],
      })
      .select("-photo");
    res.json(resutls);
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error In Search Product API",
      error,
    });
  }
};

// similar doctors
export const realtedDoctorController = async (req, res) => {
  try {
    const { pid, cid } = req.params;
    const doctors = await doctorModel
      .find({
        category: cid,
        _id: { $ne: pid },
      })
      .select("-photo")
      .limit(3)
      .populate("category");
    res.status(200).send({
      success: true,
      doctors,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "error while geting related doctor",
      error,
    });
  }
};

// get doctor by catgory
export const doctorCategoryController = async (req, res) => {
  try {
    const category = await doctorCategoryModel.findOne({ slug: req.params.slug });
    const doctors = await doctorModel.find({ category }).populate("category");
    res.status(200).send({
      success: true,
      category,
      doctors,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      error,
      message: "Error While Getting doctors",
    });
  }
};

//payment gateway api
//token
export const braintreeTokenController = async (req, res) => {
  try {
    gateway.clientToken.generate({}, function (err, response) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(response);
      }
    });
  } catch (error) {
    console.log(error);
  }
};
