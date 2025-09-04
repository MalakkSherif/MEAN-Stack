import {body} from 'express-validator';

export const validation =[
    body('title')
        .isString().withMessage('Title must be a string')
        .isLength({min:3}).withMessage('Title must be at least 3 characters long'),
    body('content')
        .isString().withMessage('Content must be a string')
        .isLength({min:10}).withMessage('Content must be at least 10 characters long')
]