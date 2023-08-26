import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
    doctorCategoryControlller,
    createDoctorCategoryController,
    deleteDoctorCategoryCOntroller,
    singleDoctorCategoryController,
    updateDoctorCategoryController,
} from "../controllers/doctorCategoryController.js";

const router = express.Router();

//routes
// create doctor category
router.post(
    "/create-doctor-category",
    requireSignIn,
    isAdmin,
    createDoctorCategoryController
);

//update doctor category
router.put(
    "/update-doctor-category/:id",
    requireSignIn,
    isAdmin,
    updateDoctorCategoryController
);

//getALl doctor category
router.get("/get-doctor-category", doctorCategoryControlller);

//single doctor category
router.get("/single-doctor-category/:slug", singleDoctorCategoryController);

//delete doctor category
router.delete(
    "/delete-doctor-category/:id",
    requireSignIn,
    isAdmin,
    deleteDoctorCategoryCOntroller
);

export default router;
