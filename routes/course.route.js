import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import upload from "../utils/multer.js";
import {createCourse, createLecture, editCourse, editLecture, getCourseById, getCourseLecture, getCreatorCourse, getLectureById, removeCourse, removeLecture, togglePublishCourse} from "../controllers/course.controller.js";
// import upload from "../utils/multer.js";
const router = express.Router();

router.route('/').post(isAuthenticated,createCourse)
router.route('/').get(isAuthenticated,getCreatorCourse)
router.route('/:courseId').put(isAuthenticated,upload.single("thumbnail"),editCourse)
router.route('/:courseId').get(isAuthenticated,getCourseById)
router.route('/:courseId').delete(isAuthenticated,removeCourse)
router.route('/:courseId').patch(isAuthenticated,togglePublishCourse)
// For Lectures
router.route('/:courseId/lecture').post(isAuthenticated,createLecture)
router.route('/:courseId/lecture').get(isAuthenticated,getCourseLecture)
router.route("/:courseId/lecture/:lectureId").post(isAuthenticated, editLecture);
router.route("/lecture/:lectureId").delete(isAuthenticated, removeLecture);
router.route("/lecture/:lectureId").get(isAuthenticated, getLectureById);
export default router;
