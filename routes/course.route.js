import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import upload from "../utils/multer.js";
import {createCourse, getCreatorCourse} from "../controllers/course.controller.js";

const router = express.Router();

router.route('/').post(isAuthenticated,createCourse)
router.route('/').get(isAuthenticated,getCreatorCourse)

export default router;
