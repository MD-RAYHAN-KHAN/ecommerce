import express from "express";
import {
    createDoctorController,
    getDoctorController,
    getSingleDoctorController,
    doctorPhotoController,
    deleteDoctorController,
    updateDoctorController,
    doctorFiltersController,
    doctorCountController,
    doctorListController,
    searchDoctorController,
    realtedDoctorController,
    doctorCategoryController,
    braintreeTokenController,
} from "../controllers/doctorController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

//routes
router.post(
  "/create-doctor",
  requireSignIn,
  isAdmin,
  formidable(),
  createDoctorController
);
//routes
router.put(
  "/update-doctor/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateDoctorController
);

//get doctors
router.get("/get-doctor", getDoctorController);

//single doctor
router.get("/get-doctor/:slug", getSingleDoctorController);

//get photo
router.get("/doctor-photo/:pid", doctorPhotoController);

//delete rdoctor
router.delete("/delete-doctor/:pid", deleteDoctorController);

//filter doctor
router.post("/doctor-filters", doctorFiltersController);

//doctor count
router.get("/doctor-count", doctorCountController);

//doctor per page
router.get("/doctor-list/:page", doctorListController);

//search doctor
router.get("/search/:keyword", searchDoctorController);

//similar doctor
router.get("/related-doctor/:pid/:cid", realtedDoctorController);

//category wise doctor
router.get("/doctor-category/:slug", doctorCategoryController);

//payments routes
//token
router.get("/braintree/token", braintreeTokenController);

//payments
// router.post("/braintree/payment", requireSignIn, brainTreePaymentController);

export default router;
