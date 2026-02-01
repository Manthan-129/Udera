const mongoose= require('mongoose');

const UserSchema= new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: false, select: false},
    imageUrl: {type: String, default: ''},
    enrolledCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }],
    role: {type: String, enum: ['educator', 'student'], default: 'student'},
},{timestamps: true});

module.exports= mongoose.model('User', UserSchema);