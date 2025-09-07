const express = require('express')
const courseController = require('../contollers/course.controller')
const validation = require('../middlewares/validation')
const verifyToken = require('../middlewares/verifyToken')
const allowedTo = require('../middlewares/allowedTo')

let router = express.Router()

router.route('/')
        .get(courseController.getAllCourses)
        .post(validation ,courseController.addCourse)

router.route('/:courseId')
        .get(courseController.getCourseById)
        .patch(courseController.updateCourse)
        .delete(verifyToken, allowedTo('Admin'),courseController.deleteCourse)


module.exports = router