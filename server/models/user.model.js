
import mongoose from 'mongoose';
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    otp:{
        type: Number,
    },
    otpTime:{
        type: Date,
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    password: {
        type: String,
        required: true
    }
});



const User = mongoose.model('User', UserSchema);

export default User;