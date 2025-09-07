// let courses = require('../data/courses')
const Course = require('../models/course.model')
const { validationResult } = require('express-validator')

const getAllCourses = async (req, res) => {
    try {
        let courses = await Course.find({},{'__v': false})
        res.status(200).json(courses)
    } catch (err) {
        res.status(500).json({ message: 'Error from Server', error: err })
    }
}

const getCourseById = async (req, res) => {
    try {
        let id = req.params.courseId;
        // let course = Course.find({_id: id})
        let course = await Course.findById(id)
        if (!course) return res.status(404).json({ error: 'Course not found' })
        res.status(200).json(course)
    } catch (err) {
        res.status(500).json({ message: 'Error from Server', error: err })
    }
}


const addCourse = async (req, res) => {
    try {
        let errors = validationResult(req)
        console.log(errors)
        if (!errors.isEmpty()) return res.status(400).json({ message: 'Bad Request', errors: errors.array() })

        let newCourse = new Course(req.body)
        await newCourse.save()

        res.status(201).json({ message: 'Created Successfully' })
    } catch (err) {
        res.status(500).json({ message: 'Error from Server', error: err })
    }
}


const updateCourse = async (req, res) => {
    try {
        let id = req.params.courseId;
        // findOneAndUpdate({_id: id},{$set: {...req.body}})
        let updatedCourse = await Course.findByIdAndUpdate(id, { $set: { ...req.body } })
        if (!updatedCourse) return res.status(404).json({ error: 'Course not found' })

        res.status(200).json({ message: 'Updated Successfully' })
    } catch (err) {
        res.status(500).json({ message: 'Error from Server', error: err })
    }
}


const deleteCourse = async (req, res) => {
    try {
        let id = req.params.courseId;
        await Course.deleteOne({ _id: id })
        res.status(200).json({ message: 'Deleted Successfully' })
    } catch (err) {
        res.status(500).json({ message: 'Error from Server', error: err })
    }
}


module.exports = {
    getAllCourses,
    getCourseById,
    addCourse,
    updateCourse,
    deleteCourse
}