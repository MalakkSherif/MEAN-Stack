// import {courses,modifyC} from '../data/Courses.js';
import course from '../models/course.model.js';
import {validationResult} from 'express-validator';

export const getAllCourses = async (req,res)=>{
    try{
        let courses = await course.find({},{'__v': false});
        res.status(200).json(courses);
    }catch(err){
        res.status(500).json({message: 'Error from Server', error: err})
    }
}

export const getCourseById = async (req,res)=>{
    try{
        let id = req.params.courseId;
        let foundCourse = await course.findById(id);
        if(!foundCourse) return res.status(404).json({Error: 'Course not found'});
        res.status(200).json(foundCourse);
    }catch(err){
        res.status(500).json({message: 'Error from Server', error: err})
    }
    
}

export const addCourse = async (req,res)=>{
    try{
        let errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({message: 'Bad Request', Errors: errors.array()});
        }
        let newCourse = new course(req.body);
        await newCourse.save()
        res.status(201).json({message: 'Course added successfully', course: newCourse});
    }catch(err){
        res.status(500).json({message: 'Error from Server', error: err})
    }

}

export const updateCourse = async (req,res)=>{
    try{
        let id = req.params.courseId;
        let updatedCourse = await course.findByIdAndUpdate(id,{ $set: {...req.body} });
        if(!course) return res.status(404).json({Error: 'Course not found'});
        res.status(200).json({message: 'Course updated successfully', updatedCourse: updatedCourse});
    }catch(err){
        res.status(500).json({message: 'Error from Server', error: err})
    }

}

export const deleteCourse = async (req,res)=>{
    try{
        let id = req.params.courseId;
        let deletedCourse = await course.findByIdAndDelete(id);
        if(!deletedCourse) return res.status(404).json({Error: 'Course not found'});
        res.status(200).json({message: 'Course deleted successfully'});
    }catch(err){
        res.status(500).json({message: 'Error from Server', error: err})
    }

}