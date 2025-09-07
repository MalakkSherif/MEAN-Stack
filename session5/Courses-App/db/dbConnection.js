import mongoose from 'mongoose';


const connection =()=>{
    mongoose.connect('mongodb://localhost:27017/Courses-App').then(()=>{
        console.log('Connected to MongoDB');
    })

}

export default connection;