import mongoose from 'mongoose';

const courseSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 3
    },
    price: {
        type: Number,
        required: true,

    }
})

const courseModel = mongoose.model('Courses', courseSchema);

export default courseModel;