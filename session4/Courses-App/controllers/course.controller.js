import {courses,modifyC} from '../data/Courses.js';
import {validationResult} from 'express-validator';

export const getAllCourses = (req,res)=>{
    res.status(200).json(courses);
}

export const getCourseById = (req,res)=>{
    let id = +req.params.courseId;
    let foundCourse = courses.find(i => i.id === id);
    if(!foundCourse) return res.status(404).json({Error: 'Course not found'});
    res.status(200).json(foundCourse);
}

export const addCourse = (req,res)=>{
    let errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({message: 'Bad Request', Errors: errors.array()});
    }
    let newCourse = req.body;
    newCourse.id = courses.length ? courses[courses.length -1].id +1 : 1;
    courses.push(newCourse);
    res.status(201).json({message: 'Course added successfully', course: newCourse});
}

export const updateCourse = (req,res)=>{
    let id = +req.params.courseId;
    let course = courses.find(i => i.id === id);
    if(!course) return res.status(404).json({Error: 'Course not found'});
    let updatedFields = req.body;
    course = {...course, ...updatedFields};
    modifyC(courses.map(c => c.id ===id ? course : c));
    res.status(200).json({message: 'Course updated successfully', newCourse: course});
}

export const deleteCourse = (req,res)=>{
    let id = +req.params.courseId;
    let course = courses.find(c => c.id === id);
    if(!course) return res.status(404).json({Error: 'Course not found'});
    modifyC(courses.filter(c => c.id !== id));
    res.status(200).json({message: 'Course deleted successfully', courses: courses});
}