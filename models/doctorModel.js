import mongoose from "mongoose";

//create user schema
const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    },
    bmdcNo: {
        type: Number,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    department: {
        type: String,
        enum: ['Cardiology', 'Orthopedics', 'Neurology', 'Other'], // Add more departments if needed
        required: true,
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'], // Assuming these are the possible values
        required: true,
    },
    address: {
        type: {},
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },
    role: 2,

}, { timestamps: true })
export default mongoose.model('users', doctorSchema);