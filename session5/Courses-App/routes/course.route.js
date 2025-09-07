import express from 'express';
import * as coursesController from '../controllers/course.controller.js'
import {validation} from '../middlewares/validation.js'
let router = express.Router();

router.route('/')
     .get(coursesController.getAllCourses)
     .post(coursesController.addCourse)
     
router.route('/:courseId')
     .get(coursesController.getCourseById)
     .patch(coursesController.updateCourse)
     .delete(coursesController.deleteCourse)


export default router;