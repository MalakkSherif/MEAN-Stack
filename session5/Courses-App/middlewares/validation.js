import {body} from 'express-validator';


let validation = [
          body('title')
          .notEmpty().withMessage('Title is required')
          .isLength({min: 3}).withMessage('Title should be at least 3 characters'),
          body('price')
          .notEmpty().withMessage('Price is required')
          ]

export {validation};